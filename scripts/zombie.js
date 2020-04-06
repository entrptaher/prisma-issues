const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function run() {
  // create some texts, usually a hundred to ensure things are working fine
  for (let i = 0; i < 100; i++) {
    await prisma.text.create({
      data: { data: "x" },
    });
  }

  // verify the data
  const count = await prisma.text.count();
  console.log({ count });

  // this will cause a zombie (or a disconnected) process
  process.exit();
}

run();
