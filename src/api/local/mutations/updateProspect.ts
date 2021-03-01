import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';

/**
 * Update a prospect's properties, including state.
 */
export const updateProspect = gql`
  mutation updateProspect(
    $id: ID!
    $altText: String
    $author: String
    $excerpt: String!
    $imageUrl: String
    $publisher: String
    $state: String
    $title: String!
    $topic: String!
  ) {
    data: updateProspect(
      id: $id
      altText: $altText
      author: $author
      excerpt: $excerpt
      imageUrl: $imageUrl
      publisher: $publisher
      state: $state
      title: $title
      topic: $topic
    ) {
      ...ProspectData
    }
  }
  ${ProspectData}
`;
