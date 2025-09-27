import { z } from 'zod';
export const TodoDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  content: z.string()
}));