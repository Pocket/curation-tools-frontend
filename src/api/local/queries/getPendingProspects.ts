import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';
/**
 * Get pending prospects for a given feed ID.
 */
export const getPendingProspects = gql`
  query getPendingProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "PENDING", feed_id: $feedId }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(filter: { state: "PENDING", feed_id: $feedId }) {
      id
    }
  }
  ${ProspectData}
`;
