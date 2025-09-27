import { t } from "./helpers/createRouter";
import { todosRouter } from "./Todo.router";

    export const appRouter = t.router({
      todo: todosRouter})
    
