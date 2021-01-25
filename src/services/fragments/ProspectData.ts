import { gql } from '@apollo/client';

/**
 * All the properties that are needed to display cards with prospect information
 */
export const ProspectData = gql`
  fragment ProspectData on Prospect {
    id
    altText
    excerpt
    feedId
    imageUrl
    publisher
    source: sourceName
    snoozedUntil
    title
    topic
    url
  }
`;
