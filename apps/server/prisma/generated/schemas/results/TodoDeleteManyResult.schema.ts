import { z } from 'zod';
export const TodoDeleteManyResultSchema = z.object({
  count: z.number()
});