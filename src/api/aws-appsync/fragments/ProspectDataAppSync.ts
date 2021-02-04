import { gql } from '@apollo/client';

/**
 * All the properties that are needed to display cards with prospect information
 */
export const ProspectDataAppSync = gql`
  fragment ProspectDataAppSync on Prospect {
    id
    altText
    author
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
