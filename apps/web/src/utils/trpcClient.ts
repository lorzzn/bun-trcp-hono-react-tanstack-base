import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import { TRPC_SERVE_PORT } from "server/config"
import type { AppRouter } from "server/trpc"

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `http://localhost:${TRPC_SERVE_PORT}/trpc`,
    }),
  ],
})
