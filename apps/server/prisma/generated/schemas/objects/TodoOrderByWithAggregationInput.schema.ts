import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TodoCountOrderByAggregateInputObjectSchema } from './TodoCountOrderByAggregateInput.schema';
import { TodoAvgOrderByAggregateInputObjectSchema } from './TodoAvgOrderByAggregateInput.schema';
import { TodoMaxOrderByAggregateInputObjectSchema } from './TodoMaxOrderByAggregateInput.schema';
import { TodoMinOrderByAggregateInputObjectSchema } from './TodoMinOrderByAggregateInput.schema';
import { TodoSumOrderByAggregateInputObjectSchema } from './TodoSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  _count: z.lazy(() => TodoCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TodoAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TodoMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TodoMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TodoSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TodoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TodoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoOrderByWithAggregationInput>;
export const TodoOrderByWithAggregationInputObjectZodSchema = makeSchema();
