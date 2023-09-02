import { Sequelize } from 'sequelize';
import { PostSchema } from './post';
import { UserSchema } from './user';

export const init = (sequelize: Sequelize) => {
  sequelize.define('User', UserSchema);
  sequelize.define('Post', PostSchema);

  sequelize.models.User.hasMany(sequelize.models.Post);
  sequelize.models.Post.belongsTo(sequelize.models.User);
}