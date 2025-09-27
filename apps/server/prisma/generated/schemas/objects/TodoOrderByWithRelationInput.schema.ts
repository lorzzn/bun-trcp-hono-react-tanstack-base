import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional()
}).strict();
export const TodoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TodoOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoOrderByWithRelationInput>;
export const TodoOrderByWithRelationInputObjectZodSchema = makeSchema();
