import { Repository } from 'typeorm';

import { Listing as ListingEntity } from '../database/entity/ListingEntity';

export interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export interface Database {
  listings: Repository<ListingEntity>;
}
