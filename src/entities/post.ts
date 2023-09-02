import { BaseEntity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './user';

export class Post extends BaseEntity<Post, 'id'> {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => User)
  author!: User;

  @Property()
  title!: string;

  @Property()
  body!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ columnType: 'datetime', type: 'Date | null' })
  deletedAt = null;
}