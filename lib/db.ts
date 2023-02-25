import { PrismaClient } from "@prisma/client";

/* 
cache our prisma client and reuse when possible to avoid excess db connections in the serverless environment
*/

declare global {
  // eslint-disable-next-line no-unused-vars
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
