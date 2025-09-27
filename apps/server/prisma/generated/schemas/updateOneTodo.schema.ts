import { z } from 'zod';
import { TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoUpdateInputObjectSchema } from './objects/TodoUpdateInput.schema';
import { TodoUncheckedUpdateInputObjectSchema } from './objects/TodoUncheckedUpdateInput.schema';
import { TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';

export const TodoUpdateOneSchema = z.object({ select: TodoSelectObjectSchema.optional(),  data: z.union([TodoUpdateInputObjectSchema, TodoUncheckedUpdateInputObjectSchema]), where: TodoWhereUniqueInputObjectSchema  })