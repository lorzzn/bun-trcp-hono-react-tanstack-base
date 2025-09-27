import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TodoOrderByWithRelationInputObjectSchema } from './objects/TodoOrderByWithRelationInput.schema';
import { TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoCountAggregateInputObjectSchema } from './objects/TodoCountAggregateInput.schema';

export const TodoCountSchema: z.ZodType<Prisma.TodoCountArgs> = z.object({ orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TodoCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TodoCountArgs>;

export const TodoCountZodSchema = z.object({ orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TodoCountAggregateInputObjectSchema ]).optional() }).strict();