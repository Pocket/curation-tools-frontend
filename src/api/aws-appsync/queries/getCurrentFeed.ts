import { gql } from '@apollo/client';

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
