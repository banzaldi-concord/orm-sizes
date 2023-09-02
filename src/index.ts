import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
}

main().then(() => {}).catch(console.error).finally(async () => {
  await prisma.$disconnect();
})