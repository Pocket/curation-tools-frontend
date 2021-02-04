import { gql } from '@apollo/client';
import { ProspectDataAppSync } from '../fragments/ProspectDataAppSync';

/**
 * Get pending prospects for a given feed ID.
 */
export const getPendingProspects = gql`
  query getPendingProspects($feedId: ID!, $limit: Int!, $nextToken: String) {
    listProspects(
      limit: $limit
      nextToken: $nextToken
      filter: { feedId: { eq: $feedId }, state: { eq: PENDING } }
    ) {
      items {
        ...ProspectDataAppSync
      }
      nextToken
    }
  }
  ${ProspectDataAppSync}
`;
