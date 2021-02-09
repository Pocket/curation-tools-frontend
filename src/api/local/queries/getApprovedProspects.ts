import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';
/**
 * Get pending prospects for a given feed ID.
 */
export const getApprovedProspects = gql`
  query getApprovedProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "APPROVED", feed_id: $feedId }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(filter: { state: "APPROVED", feed_id: $feedId }) {
      id
    }
  }
  ${ProspectData}
`;
