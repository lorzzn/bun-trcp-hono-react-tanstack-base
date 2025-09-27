import { z } from 'zod';
export const TodoAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});