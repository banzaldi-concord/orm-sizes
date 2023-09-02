import { BaseEntity, Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core'
import { Post } from './post';

@Entity()
export class User extends BaseEntity<User, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  username!: string;

  @Property()
  email!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ columnType: 'datetime', type: 'Date | null' })
  deletedAt = null;

  @OneToMany(() => Post, post => post.author)
  posts = new Collection<Post>(this);
}