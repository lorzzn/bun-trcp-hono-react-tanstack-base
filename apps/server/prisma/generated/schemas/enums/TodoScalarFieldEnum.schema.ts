import { z } from 'zod';

export const TodoScalarFieldEnumSchema = z.enum(['id', 'content'])

export type TodoScalarFieldEnum = z.infer<typeof TodoScalarFieldEnumSchema>;