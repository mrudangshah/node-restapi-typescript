import * as mysql from 'mysql';
import { ENV } from './config.json';
import * as util from 'util';

export var pool = mysql.createPool({
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME
});

exports.pool = pool;