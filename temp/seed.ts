require('dotenv').config();

import { connectDatabase } from '../src/database';
import { listings } from './listings';

const seed = async () => {
  try {
    console.log('[seed] : running...');

    const db = await connectDatabase();

    for (const listing of listings) {
      await db.listings.create(listing).save();
    }

    console.log('[seed] : success');
    process.exit();
  } catch {
    throw new Error('Failed to seed database');
  }
};

seed();
