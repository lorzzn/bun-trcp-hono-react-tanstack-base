import { z } from 'zod';

// prettier-ignore
export const TodoInputSchema = z.object({
    id: z.number().int(),
    content: z.string()
}).strict();

export type TodoInputType = z.infer<typeof TodoInputSchema>;
