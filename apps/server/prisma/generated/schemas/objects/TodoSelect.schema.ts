import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional()
}).strict();
export const TodoSelectObjectSchema: z.ZodType<Prisma.TodoSelect> = makeSchema() as unknown as z.ZodType<Prisma.TodoSelect>;
export const TodoSelectObjectZodSchema = makeSchema();
