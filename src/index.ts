import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const main = async () => {
  const orm = await MikroORM.init<PostgreSqlDriver>({
    entities: ['./dist/entities'],
    entitiesTs: ['./src/entities'],
    dbName: 'mikro_orm_test',
    type: 'postgresql',
  });

  console.log(orm.em);
}

main().then(() => {}).catch(console.error);