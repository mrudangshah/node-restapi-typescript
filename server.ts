import app from './app';
import * as http from 'http';
import { ENV } from './config/config.json'
import { MongoDB } from './config/mongo-config';

const port = 2504;

http.createServer(app).listen(port, () => {
  console.log('Express server listening on port ' + port);
  const mdb = new MongoDB();
  mdb.connectMongoDB();
});