import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';

export const TodoFindUniqueOrThrowSchema: z.ZodType<Prisma.TodoFindUniqueOrThrowArgs> = z.object({ select: TodoSelectObjectSchema.optional(),  where: TodoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TodoFindUniqueOrThrowArgs>;

export const TodoFindUniqueOrThrowZodSchema = z.object({ select: TodoSelectObjectSchema.optional(),  where: TodoWhereUniqueInputObjectSchema }).strict();