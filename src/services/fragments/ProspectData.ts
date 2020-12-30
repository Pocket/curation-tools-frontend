import { gql } from '@apollo/client';

/**
 * All the properties that are needed to display cards with prospect information
 */
export const ProspectData = gql`
  fragment ProspectData on Prospect {
    id
    altText
    category: topic
    excerpt
    imageUrl
    publisher
    source: sourceName
    title
    url
  }
`;
