import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';
/**
 * Get snoozed prospects for a given feed ID.
 */
export const getSnoozedProspects = gql`
  query getSnoozedProspects(
    $feedId: ID!
    $page: Int!
    $perPage: Int!
    $currentTimestamp: Int!
  ) {
    allProspects(
      filter: {
        state: "PENDING"
        snoozedUntil_gte: $currentTimestamp
        feed_id: $feedId
      }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(
      filter: {
        state: "PENDING"
        snoozedUntil_gte: $currentTimestamp
        feed_id: $feedId
      }
    ) {
      id
    }
  }
  ${ProspectData}
`;
