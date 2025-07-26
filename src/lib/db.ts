import { PrismaClient } from '@prisma/client';
import { env as config } from "@/config/env";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}


export const prismadb = globalThis.prisma || new PrismaClient();

if (config.NODE_ENV !== "production") globalThis.prisma = prismadb;
