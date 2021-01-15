import { gql } from '@apollo/client';
import { Prospect } from '../types/Prospect';
import { ProspectData } from '../fragments/ProspectData';

export const RECORDS_ON_PAGE = 50;

export interface ProspectData {
  listProspects: { items: Prospect[]; nextToken: string | null };
}

export interface ProspectVariables {
  feedId: string;
  limit: number;
  nextToken: string | null;
}

/**
 * Get pending prospects for a given feed ID.
 * TODO: filter out snoozed entries
 */
export const getPendingProspects = gql`
  query getPendingProspects($feedId: ID!, $limit: Int!, $nextToken: String) {
    listProspects(
      limit: $limit
      nextToken: $nextToken
      filter: { feedId: { eq: $feedId }, state: { eq: PENDING } }
    ) {
      items {
        ...ProspectData
      }
      nextToken
    }
  }
  ${ProspectData}
`;
