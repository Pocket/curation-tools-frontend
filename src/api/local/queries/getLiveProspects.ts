import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';
/**
 * Get live prospects for a given feed ID.
 */
export const getLiveProspects = gql`
  query getLiveProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "APPROVED", feed_id: $feedId, isLive: true }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(
      filter: { state: "APPROVED", feed_id: $feedId, isLive: true }
    ) {
      id
    }
  }
  ${ProspectData}
`;
