import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  content: z.string()
}).strict();
export const TodoCreateInputObjectSchema: z.ZodType<Prisma.TodoCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateInput>;
export const TodoCreateInputObjectZodSchema = makeSchema();
