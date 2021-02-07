import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';
/**
 * Get rejected prospects for a given feed ID.
 */
export const getRejectedProspects = gql`
  query getRejectedProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "REJECTED", feed_id: $feedId }
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
