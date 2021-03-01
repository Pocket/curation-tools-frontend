import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';
/**
 * Get snoozed prospects for a given feed ID.
 */
export const getSnoozedProspects = gql`
  query getSnoozedProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "SNOOZED", feed_id: $feedId }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(filter: { state: "SNOOZED", feed_id: $feedId }) {
      id
    }
  }
  ${ProspectData}
`;
