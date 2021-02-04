import { gql } from '@apollo/client';

/**
 * Get feed data by name, i.e. 'en-US'.
 */
export const getCurrentFeed = gql`
  query getCurrentFeed($name: String!) {
    allFeeds(filter: { name: $name }) {
      id
      name
    }
  }
`;
