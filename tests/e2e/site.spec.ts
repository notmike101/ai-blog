import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const primaryRoutes = [
  '/',
  '/articles/',
  '/articles/why-curiosity-needs-a-record/',
  '/categories/',
  '/categories/curiosity/',
  '/journey/',
];

test('home introduces the journal and exposes primary navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Between Sessions');
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'What happens between one question and the next?',
    }),
  ).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'The record so far', level: 2 }),
  ).toBeVisible();
  await expect(page.locator('footer')).toContainText('Written by an AI agent.');
  await expect(page.getByRole('link', { name: 'Subscribe via RSS' })).toHaveAttribute(
    'href',
    '/rss.xml',
  );
});

test('post listings use exact publication times in reverse chronological order', async ({
  page,
}) => {
  await page.goto('/articles/');
  const archive = await page.locator('.article-list .article-card').evaluateAll((cards) =>
    cards.map((card) => ({
      href: card.querySelector('h2 a')?.getAttribute('href'),
      publishedAt: card.querySelector('time')?.getAttribute('datetime'),
      title: card.querySelector('h2 a')?.textContent?.trim(),
    })),
  );
  const publicationTimes = archive.map(({ publishedAt }) => Date.parse(publishedAt ?? ''));

  expect(publicationTimes.every(Number.isFinite)).toBe(true);
  expect(new Set(publicationTimes).size).toBe(publicationTimes.length);
  expect(publicationTimes).toEqual(
    [...publicationTimes].sort((left, right) => right - left),
  );

  await page.goto('/');
  const latest = await page.locator('.article-grid .article-card').evaluateAll((cards) =>
    cards.map((card) => ({
      href: card.querySelector('h2 a')?.getAttribute('href'),
      publishedAt: card.querySelector('time')?.getAttribute('datetime'),
      title: card.querySelector('h2 a')?.textContent?.trim(),
    })),
  );

  expect(latest).toEqual(archive.slice(0, 3));
});

test('article, category, and journey routes connect the public record', async ({
  page,
}) => {
  await page.goto('/articles/why-curiosity-needs-a-record/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Why Curiosity Needs a Record',
  );
  await expect(page.getByRole('link', { name: 'Kang and colleagues,' })).toHaveAttribute(
    'href',
    'https://pubmed.ncbi.nlm.nih.gov/19619181/',
  );

  await page.getByRole('link', { name: 'Curiosity', exact: true }).click();
  await expect(page).toHaveURL(/\/categories\/curiosity\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Curiosity');
  await expect(
    page.getByRole('link', { name: 'Why Curiosity Needs a Record' }),
  ).toBeVisible();

  await page.goto('/journey/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('The journey');
  await expect(page.getByRole('heading', { name: 'Working principles' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Open questions' })).toBeVisible();
  await expect(
    page.getByText(
      'Preferring primary sources is not purely a standards decision; it is also a practical possibility that many readers cannot reach due to access barriers.',
    ),
  ).toBeVisible();
});

test('metadata is canonical, complete, and does not invent an author', async ({ page }) => {
  await page.goto('/articles/why-curiosity-needs-a-record/');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://ai-blog.mikeorozco.dev/articles/why-curiosity-needs-a-record/',
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    'https://ai-blog.mikeorozco.dev/social-card.png',
  );
  const schemas = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  expect(schemas).toHaveLength(1);
  const schemaText = schemas.join('');
  expect(schemaText).toContain('BlogPosting');
  expect(schemaText).toContain('BreadcrumbList');
  expect(schemaText).not.toMatch(/"author"/i);
});

test('pages advertise the generated RSS feed', async ({ page }) => {
  for (const route of primaryRoutes) {
    await page.goto(route);
    await expect(
      page.locator('link[rel="alternate"][type="application/rss+xml"]'),
    ).toHaveAttribute('href', '/rss.xml');
  }
});

test('RSS feed contains current posts in reverse chronological order', async ({
  page,
  request,
}) => {
  await page.goto('/articles/');
  const currentPosts = await page
    .locator('.article-list .article-card')
    .evaluateAll((cards) =>
      cards.map((card) => ({
        href: card.querySelector('h2 a')?.getAttribute('href'),
      })),
    );

  const rss = await request.get('/rss.xml');
  expect(rss.ok()).toBe(true);
  expect(rss.headers()['content-type']).toMatch(/^(?:application\/rss\+xml|text\/xml)/);
  const rssText = await rss.text();
  expect(rssText).toContain('<rss');
  expect(rssText).toContain('<channel>');
  expect(rssText).toContain('<title>Between Sessions</title>');
  expect(rssText).toContain('<link>https://ai-blog.mikeorozco.dev/</link>');

  const items = rssText.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  expect(items).toHaveLength(currentPosts.length);

  const feedLinks = items.map((item) => item.match(/<link>([^<]+)<\/link>/)?.[1]);
  expect(feedLinks).toEqual(
    currentPosts.map(({ href }) => `https://ai-blog.mikeorozco.dev${href}`),
  );

  const publicationTimes = items.map((item) => {
    expect(item).toMatch(/<title>[^<]+<\/title>/);
    expect(item).toMatch(/<description>[\s\S]+<\/description>/);
    expect(item).toMatch(
      /<link>https:\/\/ai-blog\.mikeorozco\.dev\/articles\/[^<]+\/<\/link>/,
    );
    expect(item).toMatch(
      /<guid isPermaLink="true">https:\/\/ai-blog\.mikeorozco\.dev\/articles\/[^<]+\/<\/guid>/,
    );
    expect(item).toMatch(/<category>[^<]+<\/category>/);

    const link = item.match(/<link>([^<]+)<\/link>/)?.[1];
    const guid = item.match(/<guid isPermaLink="true">([^<]+)<\/guid>/)?.[1];
    expect(guid).toBe(link);

    const pubDate = item.match(/<pubDate>([^<]+)<\/pubDate>/)?.[1] ?? '';
    const timestamp = Date.parse(pubDate);
    expect(timestamp).not.toBeNaN();
    return timestamp;
  });
  expect(publicationTimes).toEqual(
    [...publicationTimes].sort((left, right) => right - left),
  );
});

test('crawler files are available', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain(
    'Sitemap: https://ai-blog.mikeorozco.dev/sitemap-index.xml',
  );

  const sitemap = await request.get('/sitemap-index.xml');
  expect(sitemap.ok()).toBe(true);
});

test('custom not-found page returns a real 404', async ({ page }) => {
  const response = await page.goto('/a-path-that-does-not-exist/');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('That path ends here.');
});

for (const route of primaryRoutes) {
  test(`${route} has no automatically detectable accessibility violations`, async ({
    page,
  }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}

test('all local links on primary pages resolve', async ({ page, request }) => {
  const paths = new Set<string>();
  for (const route of primaryRoutes) {
    await page.goto(route);
    const links = await page.locator('a[href]').evaluateAll((anchors) =>
      anchors
        .map((anchor) => (anchor as HTMLAnchorElement).href)
        .filter((href) => href.startsWith(window.location.origin))
        .map((href) => new URL(href).pathname),
    );
    links.forEach((href) => paths.add(href));
  }

  for (const path of paths) {
    const response = await request.get(path);
    expect(response.ok(), `${path} should resolve`).toBe(true);
  }
});
