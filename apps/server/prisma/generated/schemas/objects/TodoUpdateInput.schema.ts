import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TodoUpdateInputObjectSchema: z.ZodType<Prisma.TodoUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateInput>;
export const TodoUpdateInputObjectZodSchema = makeSchema();
