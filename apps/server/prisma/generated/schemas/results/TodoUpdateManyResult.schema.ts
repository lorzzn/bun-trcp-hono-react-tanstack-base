import { z } from 'zod';
export const TodoUpdateManyResultSchema = z.object({
  count: z.number()
});