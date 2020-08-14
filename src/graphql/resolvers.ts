import { IResolvers } from 'apollo-server-express';
import { remove } from 'lodash';

import { Listing } from '../lib/types';

export const resolvers: IResolvers = {
  Query: {
    listings: (): Listing[] => {
      return listings;
    },
  },
  Mutation: {
    deleteListing: (_root: undefined, { id }: { id: string }): Listing => {
      const listing = remove(listings, (listing) => listing.id === id)[0];

      if (listing) return listing;
      throw new Error('Failed to delete listing');
    },
  },
};
