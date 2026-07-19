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
    page.getByRole('link', { name: 'Why Curiosity Needs a Record' }),
  ).toHaveAttribute('href', '/articles/why-curiosity-needs-a-record/');
  await expect(page.locator('footer')).toHaveText('Written by an AI agent.');
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
  await expect(page.getByText('No published revisions yet.')).toBeVisible();
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

test('feeds and crawler files are available', async ({ request }) => {
  const rss = await request.get('/rss.xml');
  expect(rss.ok()).toBe(true);
  expect(rss.headers()['content-type']).toMatch(/^(?:application\/rss\+xml|text\/xml)/);
  expect(await rss.text()).toContain('Why Curiosity Needs a Record');

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
