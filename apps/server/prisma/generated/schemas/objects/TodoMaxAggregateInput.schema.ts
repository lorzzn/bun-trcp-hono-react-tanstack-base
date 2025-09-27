import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  content: z.literal(true).optional()
}).strict();
export const TodoMaxAggregateInputObjectSchema: z.ZodType<Prisma.TodoMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TodoMaxAggregateInputType>;
export const TodoMaxAggregateInputObjectZodSchema = makeSchema();
