import { z } from 'zod';
export const TodoFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  content: z.string()
}));