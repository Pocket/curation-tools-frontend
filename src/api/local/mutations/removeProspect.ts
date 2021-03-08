import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';

/**
 * Remove a prospect from the Live feed.
 */
export const removeProspect = gql`
  mutation removeProspect($id: ID!, $removalReason: String!) {
    data: updateProspect(
      id: $id
      isRemoved: true
      removalReason: $removalReason
    ) {
      id
      title
      isRemoved
      removalReason
    }
  }
  ${ProspectData}
`;
