import { z } from 'zod';
export const TodoUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  content: z.string()
}));