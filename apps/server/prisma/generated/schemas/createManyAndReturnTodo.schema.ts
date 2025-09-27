import { z } from 'zod';
import { TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoCreateManyInputObjectSchema } from './objects/TodoCreateManyInput.schema';

export const TodoCreateManyAndReturnSchema = z.object({ select: TodoSelectObjectSchema.optional(), data: z.union([ TodoCreateManyInputObjectSchema, z.array(TodoCreateManyInputObjectSchema) ]),  }).strict()