import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema'

const todowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TodoWhereInputObjectSchema), z.lazy(() => TodoWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TodoWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TodoWhereInputObjectSchema), z.lazy(() => TodoWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const TodoWhereInputObjectSchema: z.ZodType<Prisma.TodoWhereInput> = todowhereinputSchema as unknown as z.ZodType<Prisma.TodoWhereInput>;
export const TodoWhereInputObjectZodSchema = todowhereinputSchema;
