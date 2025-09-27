import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TodoUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyMutationInput>;
export const TodoUpdateManyMutationInputObjectZodSchema = makeSchema();
