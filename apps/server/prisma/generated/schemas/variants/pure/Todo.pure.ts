import { z } from 'zod';

// prettier-ignore
export const TodoModelSchema = z.object({
    id: z.number().int(),
    content: z.string()
}).strict();

export type TodoModelType = z.infer<typeof TodoModelSchema>;
