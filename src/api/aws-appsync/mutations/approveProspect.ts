import { gql } from '@apollo/client';
import { ProspectDataAppSync } from '../fragments/ProspectDataAppSync';

/**
 * Update a prospect's properties; set state to APPROVED
 */
export const approveProspect = gql`
  mutation approveProspect(
    $id: ID!
    $altText: String
    $author: String
    $excerpt: String!
    $imageUrl: String
    $publisher: String
    $title: String!
    $topic: String!
  ) {
    prospect: updateProspect(
      input: {
        id: $id
        altText: $altText
        author: $author
        excerpt: $excerpt
        imageUrl: $imageUrl
        publisher: $publisher
        snoozedUntil: null
        state: APPROVED
        title: $title
        topic: $topic
        updatedAt: null
      }
    ) {
      ...ProspectDataAppSync
    }
  }
  ${ProspectDataAppSync}
`;
