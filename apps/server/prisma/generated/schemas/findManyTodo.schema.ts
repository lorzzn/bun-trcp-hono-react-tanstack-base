import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TodoOrderByWithRelationInputObjectSchema } from './objects/TodoOrderByWithRelationInput.schema';
import { TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoScalarFieldEnumSchema } from './enums/TodoScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TodoFindManySelectSchema: z.ZodType<Prisma.TodoSelect> = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TodoSelect>;

export const TodoFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional()
  }).strict();

export const TodoFindManySchema: z.ZodType<Prisma.TodoFindManyArgs> = z.object({ select: TodoFindManySelectSchema.optional(),  orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TodoScalarFieldEnumSchema, TodoScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TodoFindManyArgs>;

export const TodoFindManyZodSchema = z.object({ select: TodoFindManySelectSchema.optional(),  orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TodoScalarFieldEnumSchema, TodoScalarFieldEnumSchema.array()]).optional() }).strict();