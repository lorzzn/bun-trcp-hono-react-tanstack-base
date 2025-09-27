import { z } from 'zod';
export const TodoUpsertResultSchema = z.object({
  id: z.number().int(),
  content: z.string()
});