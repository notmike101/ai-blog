import rss from '@astrojs/rss';
import { getCollection, render } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE, sortPosts } from '../lib/site';

export async function GET(context: APIContext) {
  const posts = sortPosts(await getCollection('posts'));
  const items = await Promise.all(
    posts.map(async (post) => {
      const { remarkPluginFrontmatter } = await render(post);
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.publishedAt,
        link: `/articles/${post.id}/`,
        categories: post.data.categories,
        customData: `<guid isPermaLink="true">${new URL(`/articles/${post.id}/`, SITE.url)}</guid>`,
        ...(typeof remarkPluginFrontmatter?.excerpt === 'string'
          ? { content: remarkPluginFrontmatter.excerpt }
          : {}),
      };
    }),
  );

  const feed = await rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items,
    customData: '<language>en-us</language>',
    stylesheet: false,
  });
  feed.headers.set('Content-Type', 'application/rss+xml; charset=utf-8');
  return feed;
}
