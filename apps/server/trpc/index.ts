import { t } from "../prisma/generated/routers/helpers/createRouter"
import { appRouter as generatedAppRouter } from "../prisma/generated/routers/index"

export const appRouter = t.router({
  generatedAppRouter,
})

export type AppRouter = typeof appRouter
