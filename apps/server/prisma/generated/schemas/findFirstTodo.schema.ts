import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TodoOrderByWithRelationInputObjectSchema } from './objects/TodoOrderByWithRelationInput.schema';
import { TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoScalarFieldEnumSchema } from './enums/TodoScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TodoFindFirstSelectSchema: z.ZodType<Prisma.TodoSelect> = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TodoSelect>;

export const TodoFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional()
  }).strict();

export const TodoFindFirstSchema: z.ZodType<Prisma.TodoFindFirstArgs> = z.object({ select: TodoFindFirstSelectSchema.optional(),  orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TodoScalarFieldEnumSchema, TodoScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TodoFindFirstArgs>;

export const TodoFindFirstZodSchema = z.object({ select: TodoFindFirstSelectSchema.optional(),  orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TodoScalarFieldEnumSchema, TodoScalarFieldEnumSchema.array()]).optional() }).strict();