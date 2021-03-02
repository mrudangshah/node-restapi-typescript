import { Sequelize } from 'sequelize';
import { ENV } from './config.json';

// Database Configuration
const _db_config = {
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  dialect: ENV.DB_DIALECT || 'mariadb', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' , Default : 'mariadb' */
  database: ENV.DB_NAME,
  logging: JSON.parse(ENV.DB_LOGGING.toLowerCase()),
  timezone: ENV.DB_TIMEZONE || "Etc/GMT0"
};

// Sequlize connection
const SQLize: any = new Sequelize(_db_config.database, _db_config.user, _db_config.password, {
  dialect: _db_config.dialect,
  host: _db_config.host,
  dialectOptions: {
    timezone: _db_config.timezone
  },
  logging: _db_config.logging || false,
});

// Tryuing to get model from current database connection
SQLize["getModel"] = (modelName: string) => {
  let allModels = Object.keys(SQLize.models);
  let modelIndex = allModels.findIndex(extModel => extModel == modelName);
  if (modelIndex > -1 && SQLize.modelManager.models.length >= modelIndex) {
    return SQLize.modelManager.models[modelIndex];
  }
  return false;
}

// Test and authenticate connection on app start.
SQLize.authenticate().then((result: any) => {
  console.log('Sequelize connection has been established successfully.');
}).catch((err: { message: any; msg: any; }) => {
  console.log('Sequelize connection not working.');
  console.log(err.message || err.msg || err)
});
export { SQLize };