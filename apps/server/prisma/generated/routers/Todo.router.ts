import { t, protectedProcedure } from "./helpers/createRouter";
import { Prisma } from "@prisma/client";
import { TodoAggregateSchema } from "../schemas/aggregateTodo.schema";
import { TodoCreateManySchema } from "../schemas/createManyTodo.schema";
import { TodoCreateManyAndReturnSchema } from "../schemas/createManyAndReturnTodo.schema";
import { TodoCreateOneSchema } from "../schemas/createOneTodo.schema";
import { TodoDeleteManySchema } from "../schemas/deleteManyTodo.schema";
import { TodoDeleteOneSchema } from "../schemas/deleteOneTodo.schema";
import { TodoFindFirstSchema } from "../schemas/findFirstTodo.schema";
import { TodoFindManySchema } from "../schemas/findManyTodo.schema";
import { TodoFindUniqueSchema } from "../schemas/findUniqueTodo.schema";
import { TodoGroupBySchema } from "../schemas/groupByTodo.schema";
import { TodoUpdateManySchema } from "../schemas/updateManyTodo.schema";
import { TodoUpdateManyAndReturnSchema } from "../schemas/updateManyAndReturnTodo.schema";
import { TodoUpdateOneSchema } from "../schemas/updateOneTodo.schema";
import { TodoUpsertSchema } from "../schemas/upsertOneTodo.schema";
import { TodoCountSchema } from "../schemas/countTodo.schema";

export const todosRouter = t.router({
  aggregateTodo: protectedProcedure
    .input(TodoAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTodo = await ctx.prisma.todo.aggregate(input as Prisma.TodoAggregateArgs);
      return aggregateTodo;
    }),
  createManyTodo: protectedProcedure
    .input(TodoCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTodo = await ctx.prisma.todo.createMany(input as Prisma.TodoCreateManyArgs);
      return createManyTodo;
    }),
  createManyTodoAndReturn: protectedProcedure
    .input(TodoCreateManyAndReturnSchema).mutation(async ({ ctx, input }) => {
      const createManyTodoAndReturn = await ctx.prisma.todo.createManyAndReturn(input as Prisma.TodoCreateManyAndReturnArgs);
      return createManyTodoAndReturn;
    }),
  createOneTodo: protectedProcedure
    .input(TodoCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTodo = await ctx.prisma.todo.create(input as Prisma.TodoCreateArgs);
      return createOneTodo;
    }),
  deleteManyTodo: protectedProcedure
    .input(TodoDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTodo = await ctx.prisma.todo.deleteMany(input as Prisma.TodoDeleteManyArgs);
      return deleteManyTodo;
    }),
  deleteOneTodo: protectedProcedure
    .input(TodoDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTodo = await ctx.prisma.todo.delete(input as Prisma.TodoDeleteArgs);
      return deleteOneTodo;
    }),
  findFirstTodo: protectedProcedure
    .input(TodoFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTodo = await ctx.prisma.todo.findFirst(input as Prisma.TodoFindFirstArgs);
      return findFirstTodo;
    }),
  findFirstTodoOrThrow: protectedProcedure
    .input(TodoFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTodoOrThrow = await ctx.prisma.todo.findFirstOrThrow(input as Prisma.TodoFindFirstOrThrowArgs);
      return findFirstTodoOrThrow;
    }),
  findManyTodo: protectedProcedure
    .input(TodoFindManySchema).query(async ({ ctx, input }) => {
      const findManyTodo = await ctx.prisma.todo.findMany(input as Prisma.TodoFindManyArgs);
      return findManyTodo;
    }),
  findUniqueTodo: protectedProcedure
    .input(TodoFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTodo = await ctx.prisma.todo.findUnique(input as Prisma.TodoFindUniqueArgs);
      return findUniqueTodo;
    }),
  findUniqueTodoOrThrow: protectedProcedure
    .input(TodoFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTodoOrThrow = await ctx.prisma.todo.findUniqueOrThrow(input as Prisma.TodoFindUniqueOrThrowArgs);
      return findUniqueTodoOrThrow;
    }),
  groupByTodo: protectedProcedure
    .input(TodoGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTodo = await ctx.prisma.todo.groupBy({ ...({ ...input, orderBy: input.orderBy } as Prisma.TodoGroupByArgs), orderBy: ({ ...input, orderBy: input.orderBy } as Prisma.TodoGroupByArgs).orderBy });
      return groupByTodo;
    }),
  updateManyTodo: protectedProcedure
    .input(TodoUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTodo = await ctx.prisma.todo.updateMany(input as Prisma.TodoUpdateManyArgs);
      return updateManyTodo;
    }),
  updateManyTodoAndReturn: protectedProcedure
    .input(TodoUpdateManyAndReturnSchema).mutation(async ({ ctx, input }) => {
      const updateManyTodoAndReturn = await ctx.prisma.todo.updateManyAndReturn(input as Prisma.TodoUpdateManyAndReturnArgs);
      return updateManyTodoAndReturn;
    }),
  updateOneTodo: protectedProcedure
    .input(TodoUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTodo = await ctx.prisma.todo.update(input as Prisma.TodoUpdateArgs);
      return updateOneTodo;
    }),
  upsertOneTodo: protectedProcedure
    .input(TodoUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTodo = await ctx.prisma.todo.upsert(input as Prisma.TodoUpsertArgs);
      return upsertOneTodo;
    }),
  countTodo: protectedProcedure
    .input(TodoCountSchema).query(async ({ ctx, input }) => {
      const countTodo = await ctx.prisma.todo.count(input as Prisma.TodoCountArgs);
      return countTodo;
    }),

}) 
