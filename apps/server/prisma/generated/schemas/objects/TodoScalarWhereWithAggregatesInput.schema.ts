import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const todoscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TodoScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TodoScalarWhereWithAggregatesInput> = todoscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TodoScalarWhereWithAggregatesInput>;
export const TodoScalarWhereWithAggregatesInputObjectZodSchema = todoscalarwherewithaggregatesinputSchema;
