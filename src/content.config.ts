import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const listings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/listings' }),
  schema: z.object({
    title: z.string(),
    price: z.number().nonnegative(),
    category: z.enum(['fixed-blade', 'spring-assisted', 'folding', 'multi-tools', 'antiques', 'vintage']),
    condition: z.string().default('Used'),
    status: z.enum(['Draft', 'Available', 'Pending', 'Sold']).default('Draft'),
    photos: z.array(z.string()).default([]),
    video: z.string().optional(),
    created: z.coerce.date().optional(),
  }),
});

export const collections = { listings };
