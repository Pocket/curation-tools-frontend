import { gql } from '@apollo/client';
import { Prospect } from '../types/Prospect';
import { ProspectData } from '../fragments/ProspectData';

interface ProspectId {
  id: string;
}

export interface ProspectData {
  total: { items: ProspectId[] };
  listProspects: { items: Prospect[] };
}

export interface ProspectVariables {
  feedId: string;
  limit: number;
}

/**
 * Get pending prospects for a given feed ID.
 */
export const getPendingProspects = gql`
  query getPendingProspects($feedId: ID!, $limit: Int!) {
    total: listProspects(
      filter: { feedId: { eq: $feedId }, state: { eq: PENDING } }
    ) {
      items {
        id
      }
    }
    listProspects(
      limit: $limit
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
