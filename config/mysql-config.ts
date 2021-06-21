const mysql = require('mysql')
const util = require('util')
import { ENV } from './config.json';

export var pool = mysql.createPool({
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME
});

export const dbPool = {
  query: (text: any) => util.promisify(pool.query),
  pool: pool
};

pool.query = util.promisify(pool.query);
pool.getConnection = util.promisify(pool.getConnection);