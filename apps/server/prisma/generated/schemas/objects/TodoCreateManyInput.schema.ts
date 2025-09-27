import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  content: z.string()
}).strict();
export const TodoCreateManyInputObjectSchema: z.ZodType<Prisma.TodoCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateManyInput>;
export const TodoCreateManyInputObjectZodSchema = makeSchema();
