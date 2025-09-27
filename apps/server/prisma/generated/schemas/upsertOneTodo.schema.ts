import { z } from 'zod';
import { TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoCreateInputObjectSchema } from './objects/TodoCreateInput.schema';
import { TodoUncheckedCreateInputObjectSchema } from './objects/TodoUncheckedCreateInput.schema';
import { TodoUpdateInputObjectSchema } from './objects/TodoUpdateInput.schema';
import { TodoUncheckedUpdateInputObjectSchema } from './objects/TodoUncheckedUpdateInput.schema';

export const TodoUpsertSchema = z.object({ select: TodoSelectObjectSchema.optional(),  where: TodoWhereUniqueInputObjectSchema, create: z.union([ TodoCreateInputObjectSchema, TodoUncheckedCreateInputObjectSchema ]), update: z.union([ TodoUpdateInputObjectSchema, TodoUncheckedUpdateInputObjectSchema ])  })