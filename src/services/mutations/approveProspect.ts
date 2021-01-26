import { gql } from '@apollo/client';
import { Prospect } from '../types/Prospect';
import { ProspectData } from '../fragments/ProspectData';

export interface ApproveProspectData {
  prospect: Prospect;
}

export interface ApproveProspectVariables {
  id: string;
  altText: string;
  excerpt: string;
  imageUrl: string;
  publisher: string;
  title: string;
  topic: string;
}

/**
 * Update a prospect's properties; set state to APPROVED
 * TODO: add a scheduled entry
 */
export const approveProspect = gql`
  mutation approveProspect(
    $id: ID!
    $altText: String
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
      ...ProspectData
    }
  }
  ${ProspectData}
`;
