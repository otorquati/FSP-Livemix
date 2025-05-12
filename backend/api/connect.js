import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

{/*if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    db = new PrismaClient();
  }
  db = global.cachedPrisma;
}*/}

