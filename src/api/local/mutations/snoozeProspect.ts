import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';

/**
 * Send a prospect to the "Snoozed" tab.
 */
export const snoozeProspect = gql`
  mutation snoozeProspect($id: ID!) {
    data: updateProspect(id: $id, state: "SNOOZED") {
      ...ProspectData
    }
  }
  ${ProspectData}
`;
