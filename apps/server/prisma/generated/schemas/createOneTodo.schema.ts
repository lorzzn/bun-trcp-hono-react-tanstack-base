import { z } from 'zod';
import { TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoCreateInputObjectSchema } from './objects/TodoCreateInput.schema';
import { TodoUncheckedCreateInputObjectSchema } from './objects/TodoUncheckedCreateInput.schema';

export const TodoCreateOneSchema = z.object({ select: TodoSelectObjectSchema.optional(),  data: z.union([TodoCreateInputObjectSchema, TodoUncheckedCreateInputObjectSchema])  })