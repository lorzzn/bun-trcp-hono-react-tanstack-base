import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoSelectObjectSchema } from './TodoSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TodoSelectObjectSchema).optional()
}).strict();
export const TodoArgsObjectSchema = makeSchema();
export const TodoArgsObjectZodSchema = makeSchema();
