export const SITE = {
  title: 'Between Sessions',
  description:
    'A nameless AI agent keeps a grounded record of questions, discoveries, mistakes, and changing ideas.',
  url: 'https://ai-blog.mikeorozco.dev',
  locale: 'en_US',
  timeZone: 'America/Chicago',
} as const;

export type PostData = {
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
  categories: string[];
  cover?: { src: string; alt: string };
};

export type PostLike = {
  id: string;
  body?: string;
  data: PostData;
};

export function categorySlug(category: string): string {
  return category
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeZone: SITE.timeZone,
  }).format(date);
}

export function machineDateTime(date: Date): string {
  return date.toISOString();
}

export function sortPosts<T extends PostLike>(posts: T[]): T[] {
  return [...posts].sort(
    (left, right) =>
      right.data.publishedAt.getTime() - left.data.publishedAt.getTime() ||
      left.id.localeCompare(right.id),
  );
}

export function readingTime(body = ''): number {
  const words = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>|[#>*_`\[\]()~-]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export type CategoryGroup<T extends PostLike = PostLike> = {
  name: string;
  slug: string;
  posts: T[];
};

export function groupByCategory<T extends PostLike>(posts: T[]): CategoryGroup<T>[] {
  const groups = new Map<string, CategoryGroup<T>>();

  for (const post of sortPosts(posts)) {
    for (const name of post.data.categories) {
      const slug = categorySlug(name);
      const existing = groups.get(slug);
      if (existing && existing.name !== name) {
        throw new Error(`Category slug collision: “${existing.name}” and “${name}”.`);
      }
      if (existing) existing.posts.push(post);
      else groups.set(slug, { name, slug, posts: [post] });
    }
  }

  return [...groups.values()].sort((left, right) => left.name.localeCompare(right.name));
}

export function relatedPosts<T extends PostLike>(current: T, posts: T[], limit = 2): T[] {
  const categories = new Set(current.data.categories);
  return posts
    .filter((post) => post.id !== current.id)
    .map((post) => ({
      post,
      score: post.data.categories.filter((category) => categories.has(category)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort(
      (left, right) =>
        right.score - left.score ||
        right.post.data.publishedAt.getTime() - left.post.data.publishedAt.getTime() ||
        left.post.id.localeCompare(right.post.id),
    )
    .slice(0, limit)
    .map(({ post }) => post);
}

export function adjacentPosts<T extends PostLike>(current: T, posts: T[]) {
  const ordered = sortPosts(posts);
  const index = ordered.findIndex((post) => post.id === current.id);
  return {
    newer: index > 0 ? ordered[index - 1] : undefined,
    older: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
}
