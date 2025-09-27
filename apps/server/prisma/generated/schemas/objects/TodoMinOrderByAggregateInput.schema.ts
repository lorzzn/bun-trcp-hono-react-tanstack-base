import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional()
}).strict();
export const TodoMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TodoMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoMinOrderByAggregateInput>;
export const TodoMinOrderByAggregateInputObjectZodSchema = makeSchema();
