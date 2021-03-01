import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';

/**
 * Send a prospect to the "Rejected" tab.
 */
export const rejectProspect = gql`
  mutation rejectProspect($id: ID!) {
    data: updateProspect(id: $id, state: "REJECTED") {
      ...ProspectData
    }
  }
  ${ProspectData}
`;
