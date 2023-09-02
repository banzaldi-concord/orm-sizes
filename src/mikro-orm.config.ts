import { Post, User } from './entities';

export default {
  entities: [Post, User],
  dbName: 'mikro_orm_test',
  user: 'orm_test',
  password: 'orm_test',
  host: 'localhost',
  port: 5432,
  type: 'postgresql',
}