import { connect } from 'mongoose';
import { ENV } from './config.json';

export class MongoDB {
  connectMongoDB() {
    try {
      const isCluster = ENV.IS_MONGODB_CLUSTER
      if (isCluster) {
        connect(`${ENV.MONGODB_CLUSTER_URL}`, { useUnifiedTopology: true, useNewUrlParser: true });
      } else {
        if (ENV.MONGODB_USER && ENV.MONGODB_PASSWORD) {
          connect(`mongodb://${ENV.MONGODB_USER}:${ENV.MONGODB_PASSWORD}@${ENV.MONGODB_HOST}:${ENV.MONGODB_PORT}/${ENV.MONGODB_NAME}`, { useUnifiedTopology: true, useNewUrlParser: true });
        } else {
          connect(`mongodb://${ENV.MONGODB_HOST}:${ENV.MONGODB_PORT}/${ENV.MONGODB_NAME}`, { useUnifiedTopology: true, useNewUrlParser: true });
        }
      }
    } catch (err) {
      throw err;
    }
  }
}