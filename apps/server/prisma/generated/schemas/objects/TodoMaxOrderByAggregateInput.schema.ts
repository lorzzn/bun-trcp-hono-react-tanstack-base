import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional()
}).strict();
export const TodoMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TodoMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoMaxOrderByAggregateInput>;
export const TodoMaxOrderByAggregateInputObjectZodSchema = makeSchema();
