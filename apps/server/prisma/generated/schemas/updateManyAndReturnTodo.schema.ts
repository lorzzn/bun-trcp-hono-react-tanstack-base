import { z } from 'zod';
import { TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoUpdateManyMutationInputObjectSchema } from './objects/TodoUpdateManyMutationInput.schema';
import { TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';

export const TodoUpdateManyAndReturnSchema = z.object({ select: TodoSelectObjectSchema.optional(), data: TodoUpdateManyMutationInputObjectSchema, where: TodoWhereInputObjectSchema.optional()  }).strict()