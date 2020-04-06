const cluster = require("cluster");
const limit = 8;

async function main() {
  // ensuring we have a new client for each require call
  const { PrismaClient } = require("@prisma/client");
  const prisma = new PrismaClient();

  await prisma.connect();
  const count = await prisma.text.count();
  console.log({count});

  await prisma.disconnect();
}

if (cluster.isMaster) {
  for (let i = 0; i < limit; i++) {
    cluster.fork();
  }
} else {
  main();
}