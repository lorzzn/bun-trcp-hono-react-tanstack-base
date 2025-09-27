import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';

export const TodoFindUniqueSchema: z.ZodType<Prisma.TodoFindUniqueArgs> = z.object({ select: TodoSelectObjectSchema.optional(),  where: TodoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TodoFindUniqueArgs>;

export const TodoFindUniqueZodSchema = z.object({ select: TodoSelectObjectSchema.optional(),  where: TodoWhereUniqueInputObjectSchema }).strict();