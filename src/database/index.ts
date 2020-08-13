import { MongoClient } from 'mongodb';

import config from '../config';
import { Database } from '../lib/types';

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('main');

  console.log('DB connected');

  return {
    listings: db.collection('test_listings'),
  };
};
