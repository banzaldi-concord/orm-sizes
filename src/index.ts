import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import knex from 'knex';
import { format as pgFormat } from 'node-pg-format';

const prisma = new PrismaClient();
const client = new Pool({
  user: 'orm_test',
  password: 'orm_test',
  database: 'raw_orm_test',
  host: 'localhost',
  port: 5432,
});

async function main() {
  await prisma.$connect();
  const db = await client.connect();
  const qb = new knex.QueryBuilder();
  console.log(qb);
  const rawQuery = pgFormat('SELECT %1$L', 1);
  db.query(rawQuery);
}

main().then(() => {}).catch(console.error).finally(async () => {
  await prisma.$disconnect();
})