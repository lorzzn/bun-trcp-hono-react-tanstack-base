import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  content: z.string()
}).strict();
export const TodoUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TodoUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedCreateInput>;
export const TodoUncheckedCreateInputObjectZodSchema = makeSchema();
