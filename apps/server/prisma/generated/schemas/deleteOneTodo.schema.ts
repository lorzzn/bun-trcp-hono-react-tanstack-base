import { z } from 'zod';
import { TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';

export const TodoDeleteOneSchema = z.object({ select: TodoSelectObjectSchema.optional(),  where: TodoWhereUniqueInputObjectSchema  })