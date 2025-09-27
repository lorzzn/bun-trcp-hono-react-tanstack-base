import { PrismaClient } from "@prisma/client"
import { db } from "../../utils/db"

export type Context = {
  prisma: PrismaClient
}

export async function createContext({ req }: { req: Request }): Promise<Context> {
  return {
    prisma: db,
  }
}
