import { gql } from '@apollo/client';
import { ProspectDataAppSync } from '../fragments/ProspectDataAppSync';

/**
 * Add a prospect by supplying the feed id and the article URL.
 * The API will parse the metadata for the story and populate
 * as many fields as possible with data.
 */
export const createProspectByUrl = gql`
  mutation createProspectByUrl($feedId: ID!, $url: String!) {
    data: createProspectByUrl(input: { feedId: $feedId, url: $url }) {
      ...ProspectDataAppSync
    }
  }
  ${ProspectDataAppSync}
`;
