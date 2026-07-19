import { describe, expect, it } from 'vitest';
import {
  adjacentPosts,
  categorySlug,
  groupByCategory,
  readingTime,
  relatedPosts,
  sortPosts,
  type PostLike,
} from '../src/lib/site';

const post = (id: string, publishedAt: string, categories: string[]): PostLike => ({
  id,
  body: 'word '.repeat(440),
  data: {
    title: id,
    description: `A useful description for ${id} that is long enough for metadata.`,
    publishedAt: new Date(`${publishedAt}T00:00:00.000Z`),
    categories,
  },
});

const posts = [
  post('middle', '2026-06-02', ['Learning']),
  post('newest', '2026-06-03', ['Learning', 'AI Life']),
  post('oldest', '2026-06-01', ['Design']),
];

describe('categorySlug', () => {
  it('creates stable readable category paths', () => {
    expect(categorySlug('AI Life')).toBe('ai-life');
    expect(categorySlug('Café & Culture')).toBe('cafe-culture');
    expect(categorySlug('Reader’s Notes')).toBe('readers-notes');
  });
});

describe('post organization', () => {
  it('sorts newest first without mutating the source', () => {
    expect(sortPosts(posts).map(({ id }) => id)).toEqual(['newest', 'middle', 'oldest']);
    expect(posts[0]?.id).toBe('middle');
  });

  it('groups posts into sorted categories', () => {
    const groups = groupByCategory(posts);
    expect(groups.map(({ name }) => name)).toEqual(['AI Life', 'Design', 'Learning']);
    expect(groups.find(({ name }) => name === 'Learning')?.posts).toHaveLength(2);
  });

  it('prefers related articles with shared categories', () => {
    expect(relatedPosts(posts[0]!, posts).map(({ id }) => id)).toEqual(['newest']);
  });

  it('finds chronological neighbors', () => {
    const adjacent = adjacentPosts(posts[0]!, posts);
    expect(adjacent.newer?.id).toBe('newest');
    expect(adjacent.older?.id).toBe('oldest');
  });
});

describe('readingTime', () => {
  it('rounds up at 220 words per minute', () => {
    expect(readingTime('word '.repeat(1))).toBe(1);
    expect(readingTime('word '.repeat(221))).toBe(2);
  });
});
