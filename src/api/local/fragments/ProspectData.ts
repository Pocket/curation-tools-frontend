import { gql } from '@apollo/client';

/**
 * All the properties that are needed to display cards with prospect information
 */
export const ProspectData = gql`
  fragment ProspectData on Prospect {
    id
    altText
    author
    excerpt
    feedId: feed_id
    imageUrl
    isLive
    isRemoved
    isScheduled
    publisher
    removalReason
    source: sourceName
    state
    title
    topic
    url
  }
`;
