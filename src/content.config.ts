import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    label: z.string(),
    title: z.string(),
    summary: z.string(),
    problem: z.string(),
    role: z.string(),
    approach: z.array(z.string()).min(1),
    decisions: z.array(z.string()).min(1),
    outcome: z.string(),
    status: z.string(),
    priority: z.number().int().min(1),
    category: z.enum(['primary', 'secondary']),
    featured: z.boolean().default(false),
    linkLabel: z.string().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    summary: z.string(),
    topic: z.string(),
    readingTime: z.number().int().positive(),
    canonicalUrl: z.url(),
    relatedProject: z.string().optional(),
  }),
});

export const collections = { work, notes };
