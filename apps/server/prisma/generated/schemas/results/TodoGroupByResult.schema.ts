import { z } from 'zod';
export const TodoGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  content: z.string(),
  _count: z.object({
    id: z.number(),
    content: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    content: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    content: z.string().nullable()
  }).nullable().optional()
}));