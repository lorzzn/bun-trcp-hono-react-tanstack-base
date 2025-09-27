import { z } from 'zod';

// prettier-ignore
export const TodoResultSchema = z.object({
    id: z.number().int(),
    content: z.string()
}).strict();

export type TodoResultType = z.infer<typeof TodoResultSchema>;
