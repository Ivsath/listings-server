import { createConnection } from 'typeorm';

import { Database } from '../lib/types';
import { Listing } from './entity/ListingEntity';

export const connectDatabase = async (): Promise<Database> => {
  const connection = await createConnection();

  return {
    listings: connection.getRepository(Listing),
  };
};
