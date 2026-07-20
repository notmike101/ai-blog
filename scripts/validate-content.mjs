import { execFileSync } from 'node:child_process';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import matter from 'gray-matter';

const root = process.cwd();
const postsDirectory = path.join(root, 'src', 'content', 'posts');
const personaPath = path.join(root, 'src', 'data', 'persona.json');
const allowedFrontmatter = new Set([
  'title',
  'description',
  'publishedAt',
  'updatedAt',
  'categories',
  'cover',
]);
const errors = [];
const isoTimestampPattern =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?(?:Z|[+-]\d{2}:\d{2})$/;

const privacyPatterns = [
  [
    /\b(?:my|the|an?)\s+(?:operator|owner|user|reviewer)\b/i,
    'references a private role behind the publication',
  ],
  [/\b(?:operator|reviewer)\b/i, 'references a private role behind the publication'],
  [
    /\b(?:the|my|a)\s+(?:prompt|instruction source|hidden instructions?)\b/i,
    'references non-public instructions',
  ],
  [
    /\bI was (?:asked|told|prompted|instructed|requested)\b/i,
    'implies a private request or instruction',
  ],
  [
    /\bsomeone (?:asked|told|prompted|instructed) me\b/i,
    'implies a private request or instruction',
  ],
  [/\bour (?:conversation|chat|messages?)\b/i, 'references a private conversation'],
  [
    /\b(?:private|hidden) (?:conversation|instructions?|approval|review process)\b/i,
    'references a non-public process',
  ],
  [/\b[A-Za-z]:\\[^\s]+/, 'contains a local Windows path'],
  [/(?:^|[\s(])\/(?:Users|home)\/[^\s)]+/i, 'contains a local user path'],
  [
    /\b(?:localhost|127\.0\.0\.1|10\.\d{1,3}(?:\.\d{1,3}){2})\b/i,
    'contains a private host',
  ],
  [
    /\b(?:192\.168|172\.(?:1[6-9]|2\d|3[01]))\.\d{1,3}\.\d{1,3}\b/,
    'contains a private IP address',
  ],
  [/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i, 'contains an email address'],
  [/\b(?:sk|ghp|github_pat)_[A-Za-z0-9_-]{12,}\b/, 'contains a credential-like token'],
];

function addError(file, message) {
  errors.push(`${path.relative(root, file).replaceAll('\\', '/')}: ${message}`);
}

function dateValue(value) {
  if (!(value instanceof Date) && typeof value !== 'string') return undefined;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function frontmatterValue(source, field) {
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1];
  const match = frontmatter?.match(new RegExp(`^${field}:\\s*(.*?)\\s*$`, 'm'));
  if (!match) return undefined;

  const value = match[1].replace(/\s+#.*$/, '').trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function categorySlug(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getRemoteOwner() {
  try {
    const remote = execFileSync('git', ['config', '--get', 'remote.origin.url'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    const match = remote.match(/(?:github\.com[/:])([^/]+)\//i);
    return match?.[1];
  } catch {
    return undefined;
  }
}

function scanPrivacy(file, text, remoteOwner) {
  for (const [pattern, reason] of privacyPatterns) {
    if (pattern.test(text)) addError(file, reason);
  }
  if (
    remoteOwner &&
    new RegExp(`\\b${remoteOwner.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(
      text,
    )
  ) {
    addError(file, 'contains the repository account identifier');
  }
}

const entries = await readdir(postsDirectory, { withFileTypes: true });
const postFiles = entries
  .filter(
    (entry) => entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'AGENTS.md',
  )
  .map((entry) => path.join(postsDirectory, entry.name));

if (postFiles.length === 0) errors.push('At least one article is required.');

const postSlugs = new Set();
const categoryNames = new Map();
const publicationTimestamps = new Map();
const now = new Date();
const remoteOwner = getRemoteOwner();

for (const file of postFiles) {
  const slug = path.basename(file, '.md');
  postSlugs.add(slug);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    addError(file, 'filename must be a lowercase kebab-case slug');
  }

  const raw = await readFile(file, 'utf8');
  let parsed;
  try {
    parsed = matter(raw);
  } catch (error) {
    addError(file, `frontmatter could not be parsed: ${error.message}`);
    continue;
  }

  const { data, content } = parsed;
  for (const key of Object.keys(data)) {
    if (!allowedFrontmatter.has(key))
      addError(file, `unsupported frontmatter field “${key}”`);
  }

  if (
    typeof data.title !== 'string' ||
    data.title.trim().length === 0 ||
    data.title.length > 90
  ) {
    addError(file, 'title must contain 1–90 characters');
  }
  if (
    typeof data.description !== 'string' ||
    data.description.trim().length < 40 ||
    data.description.length > 180
  ) {
    addError(file, 'description must contain 40–180 characters');
  }

  const publishedAt = dateValue(data.publishedAt);
  const updatedAt = data.updatedAt === undefined ? undefined : dateValue(data.updatedAt);
  const publishedAtSource = frontmatterValue(raw, 'publishedAt');
  const updatedAtSource = frontmatterValue(raw, 'updatedAt');
  if (!publishedAt) addError(file, 'publishedAt must be a valid date');
  else {
    if (!isoTimestampPattern.test(publishedAtSource ?? '')) {
      addError(file, 'publishedAt must be an ISO 8601 timestamp with a time zone');
    } else {
      const existing = publicationTimestamps.get(publishedAt.getTime());
      if (existing) {
        addError(
          file,
          `publishedAt duplicates ${path.relative(root, existing).replaceAll('\\', '/')}`,
        );
      } else publicationTimestamps.set(publishedAt.getTime(), file);
    }
    if (publishedAt > now) addError(file, 'publishedAt cannot be in the future');
  }
  if (data.updatedAt !== undefined && !updatedAt)
    addError(file, 'updatedAt must be a valid date');
  else if (updatedAt && !isoTimestampPattern.test(updatedAtSource ?? '')) {
    addError(file, 'updatedAt must be an ISO 8601 timestamp with a time zone');
  }
  if (publishedAt && updatedAt && updatedAt < publishedAt) {
    addError(file, 'updatedAt cannot be earlier than publishedAt');
  }

  if (
    !Array.isArray(data.categories) ||
    data.categories.length < 1 ||
    data.categories.length > 3
  ) {
    addError(file, 'categories must contain one to three values');
  } else {
    const localCategories = new Set();
    for (const category of data.categories) {
      if (
        typeof category !== 'string' ||
        category.trim().length === 0 ||
        category.length > 40
      ) {
        addError(file, 'each category must contain 1–40 characters');
        continue;
      }
      const categoryKey = category.toLocaleLowerCase('en-US');
      if (localCategories.has(categoryKey))
        addError(file, `category “${category}” is duplicated`);
      localCategories.add(categoryKey);

      const categoryPath = categorySlug(category);
      const existing = categoryNames.get(categoryPath);
      if (existing && existing !== category) {
        addError(
          file,
          `category “${category}” collides with “${existing}” at /${categoryPath}/`,
        );
      } else categoryNames.set(categoryPath, category);
    }
  }

  if (data.cover !== undefined) {
    if (
      typeof data.cover !== 'object' ||
      data.cover === null ||
      Array.isArray(data.cover) ||
      Object.keys(data.cover).some((key) => !['src', 'alt'].includes(key)) ||
      typeof data.cover.src !== 'string' ||
      !data.cover.src.startsWith('/') ||
      typeof data.cover.alt !== 'string' ||
      data.cover.alt.trim().length === 0
    ) {
      addError(
        file,
        'cover must contain only an absolute site path and meaningful alt text',
      );
    }
  }

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  if (wordCount < 250) addError(file, 'article body must contain at least 250 words');
  if (/<(?:script|iframe|object|embed)\b/i.test(content)) {
    addError(file, 'article body contains a disallowed embedded element');
  }
  scanPrivacy(file, `${JSON.stringify(data)}\n${content}`, remoteOwner);
}

let persona;
try {
  persona = JSON.parse(await readFile(personaPath, 'utf8'));
} catch (error) {
  addError(personaPath, `could not be parsed: ${error.message}`);
}

if (persona) {
  const expectedKeys = ['openQuestions', 'preferences', 'principles', 'revisions'];
  const actualKeys = Object.keys(persona).sort();
  if (JSON.stringify(actualKeys) !== JSON.stringify(expectedKeys)) {
    addError(personaPath, `must contain exactly: ${expectedKeys.join(', ')}`);
  }

  const sections = [
    ['principles', 'statement', 'evidencePost'],
    ['preferences', 'statement', 'evidencePost'],
    ['revisions', 'statement', 'evidencePost'],
    ['openQuestions', 'question', 'raisedIn'],
  ];
  const seen = new Set();

  for (const [section, textKey, sourceKey] of sections) {
    const values = persona[section];
    if (!Array.isArray(values)) {
      addError(personaPath, `${section} must be an array`);
      continue;
    }
    for (const [index, item] of values.entries()) {
      const label = `${section}[${index}]`;
      if (
        typeof item !== 'object' ||
        item === null ||
        Array.isArray(item) ||
        Object.keys(item).sort().join('|') !== [sourceKey, textKey].sort().join('|')
      ) {
        addError(personaPath, `${label} must contain exactly ${textKey} and ${sourceKey}`);
        continue;
      }
      if (typeof item[textKey] !== 'string' || item[textKey].trim().length < 20) {
        addError(personaPath, `${label}.${textKey} must contain at least 20 characters`);
      }
      if (typeof item[sourceKey] !== 'string' || !postSlugs.has(item[sourceKey])) {
        addError(
          personaPath,
          `${label}.${sourceKey} must reference an existing article slug`,
        );
      }
      const fingerprint = `${section}:${item[textKey]?.trim().toLocaleLowerCase('en-US')}`;
      if (seen.has(fingerprint)) addError(personaPath, `${label} duplicates another entry`);
      seen.add(fingerprint);
    }
  }
  scanPrivacy(personaPath, JSON.stringify(persona), remoteOwner);
}

if (errors.length > 0) {
  console.error(
    `Content validation failed with ${errors.length} error${errors.length === 1 ? '' : 's'}:\n`,
  );
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    `Content validation passed for ${postFiles.length} article${postFiles.length === 1 ? '' : 's'}.`,
  );
}
