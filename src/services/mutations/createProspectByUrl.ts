import { gql } from '@apollo/client';
import { ProspectData } from '../fragments/ProspectData';
import { Prospect } from '../types/Prospect';

export interface CreateProspectData {
  prospect: Prospect;
}

export interface CreateProspectVariables {
  feedId: string;
  url: string;
}

/**
 * Add a prospect by supplying the feed id, source name and the article URL
 */
export const createProspectByUrl = gql`
  mutation createProspectByUrl($feedId: ID!, $url: String!) {
    prospect: createProspectByUrl(input: { feedId: $feedId, url: $url }) {
      ...ProspectData
    }
  }
  ${ProspectData}
`;
