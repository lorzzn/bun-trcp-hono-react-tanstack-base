import { z } from 'zod';
export const TodoFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  content: z.string()
}));