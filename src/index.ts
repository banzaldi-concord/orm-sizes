import { Sequelize } from 'sequelize';
import { init } from './entities';

const sequelize = new Sequelize('postgres://orm_test:orm_test@localhost:5432/sequelize_orm_test');

const main = async () => {
  try {
    await sequelize.authenticate();
    init(sequelize);
    console.log('Successfully authenticated');
  } catch (err) {
    console.log('Unable to authenticate', {
      err
    });
  }
}