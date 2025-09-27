import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { serve } from "bun"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { TRPC_SERVE_PORT } from "./config"
import { appRouter } from "./trpc"
import { createContext } from "./trpc/context"

const app = new Hono()

app.use(cors({ origin: "*" }))

app.all("/trpc/*", (c) =>
  fetchRequestHandler({
    req: c.req.raw,
    router: appRouter,
    createContext,
    endpoint: "/trpc",
  }),
)

app.get("/", (c) => c.text("Hono + tRPC running"))

console.log(`Starting server on port ${TRPC_SERVE_PORT}...`)
serve({
  fetch: app.fetch.bind(app),
  port: TRPC_SERVE_PORT,
})
