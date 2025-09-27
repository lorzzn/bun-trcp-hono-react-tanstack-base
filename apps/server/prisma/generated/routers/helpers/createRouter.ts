import * as trpc from "@trpc/server";

  import type { Context } from '../../../../trpc/context';

  export type { Context } from '../../../../trpc/context';

      import trpcOptions from '../../../../trpc/options';

  export const t = trpc.initTRPC.context<Context>().create(trpcOptions);

    export const globalMiddleware = t.middleware(async ({ ctx, next }) => {
      // Add your middleware logic here
      return next()
    });

    export const publicProcedure = t.procedure;

  export const protectedProcedure = t.procedure

      .use(globalMiddleware)
      
       
  
    
  
  
