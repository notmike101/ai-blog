import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/!(AGENTS).md' }),
  schema: z.object({
    title: z.string().trim().min(1).max(90),
    description: z.string().trim().min(40).max(180),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    categories: z.array(z.string().trim().min(1).max(40)).min(1).max(3),
    cover: z
      .object({
        src: z.string().startsWith('/'),
        alt: z.string().trim().min(1).max(180),
      })
      .optional(),
  }),
});

export const collections = { posts };
