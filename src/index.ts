import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { users } from './entities';

const main = async () => {
const migrationClient = postgres('postgres://orm_test:orm_test@localhost:5432/drizzle_orm_test', { max: 1 });
await migrate(drizzle(migrationClient), {
  migrationsFolder: './drizzle'
});

const queryClient = postgres('postgres://orm_test:orm_test@localhost:5432/drizzle_orm_test');
const db: PostgresJsDatabase = drizzle(queryClient);
await db.select().from(users);
}

main().then(() => {}).catch(console.error);