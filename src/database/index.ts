import { MongoClient } from 'mongodb';

import config from '../config';

export const connectDatabase = async () => {
  try {
    const client = await MongoClient.connect(config.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db('main');

    console.log('DB connected');

    return {
      listings: db.collection('test_listings'),
    };
  } catch (error) {
    console.error(error);
  }
};
