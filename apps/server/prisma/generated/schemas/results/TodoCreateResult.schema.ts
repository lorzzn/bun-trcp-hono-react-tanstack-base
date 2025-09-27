import { z } from 'zod';
export const TodoCreateResultSchema = z.object({
  id: z.number().int(),
  content: z.string()
});