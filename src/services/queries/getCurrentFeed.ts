import { gql } from '@apollo/client';
import { Feed } from '../types/Feed';

export interface FeedData {
  currentFeed: { items: Feed[] };
}

export interface FeedVariables {
  name: string;
}

/**
 * Get feed data by name, i.e. 'en-US'.
 */
export const getCurrentFeed = gql`
  query getCurrentFeed($name: String!) {
    currentFeed: listFeeds(filter: { name: { eq: $name } }) {
      items {
        id
        name
      }
    }
  }
`;
