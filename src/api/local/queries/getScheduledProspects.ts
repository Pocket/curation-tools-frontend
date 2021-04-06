import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';
/**
 * Get live prospects for a given feed ID.
 */
export const getScheduledProspects = gql`
  query getScheduledProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "APPROVED", feed_id: $feedId, isScheduled: true }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(
      filter: { state: "APPROVED", feed_id: $feedId, isScheduled: true }
    ) {
      id
    }
  }
  ${ProspectData}
`;
