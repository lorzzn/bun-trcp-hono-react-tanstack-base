import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoOrderByWithAggregationInputObjectSchema } from './objects/TodoOrderByWithAggregationInput.schema';
import { TodoScalarWhereWithAggregatesInputObjectSchema } from './objects/TodoScalarWhereWithAggregatesInput.schema';
import { TodoScalarFieldEnumSchema } from './enums/TodoScalarFieldEnum.schema';
import { TodoCountAggregateInputObjectSchema } from './objects/TodoCountAggregateInput.schema';
import { TodoMinAggregateInputObjectSchema } from './objects/TodoMinAggregateInput.schema';
import { TodoMaxAggregateInputObjectSchema } from './objects/TodoMaxAggregateInput.schema';
import { TodoAvgAggregateInputObjectSchema } from './objects/TodoAvgAggregateInput.schema';
import { TodoSumAggregateInputObjectSchema } from './objects/TodoSumAggregateInput.schema';

export const TodoGroupBySchema: z.ZodType<Prisma.TodoGroupByArgs> = z.object({ where: TodoWhereInputObjectSchema.optional(), orderBy: z.union([TodoOrderByWithAggregationInputObjectSchema, TodoOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TodoScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TodoScalarFieldEnumSchema), _count: z.union([ z.literal(true), TodoCountAggregateInputObjectSchema ]).optional(), _min: TodoMinAggregateInputObjectSchema.optional(), _max: TodoMaxAggregateInputObjectSchema.optional(), _avg: TodoAvgAggregateInputObjectSchema.optional(), _sum: TodoSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TodoGroupByArgs>;

export const TodoGroupByZodSchema = z.object({ where: TodoWhereInputObjectSchema.optional(), orderBy: z.union([TodoOrderByWithAggregationInputObjectSchema, TodoOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TodoScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TodoScalarFieldEnumSchema), _count: z.union([ z.literal(true), TodoCountAggregateInputObjectSchema ]).optional(), _min: TodoMinAggregateInputObjectSchema.optional(), _max: TodoMaxAggregateInputObjectSchema.optional(), _avg: TodoAvgAggregateInputObjectSchema.optional(), _sum: TodoSumAggregateInputObjectSchema.optional() }).strict();