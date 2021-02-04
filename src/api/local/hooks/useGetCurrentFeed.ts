import { client } from '../client';
import { FeedVariables, FeedData } from '../../../models';
import { useGetCurrentFeedQuery } from '../generatedTypes';
import { getCurrentFeed } from '../queries/getCurrentFeed';
import { useMemo } from 'react';

export const useGetCurrentFeed = (vars: FeedVariables): FeedData => {
  const { loading, error, data: result } = useGetCurrentFeedQuery({
    query: getCurrentFeed,
    variables: vars,
    client,
  });

  const data = useMemo(() => {
    if (result) {
      return result.allFeeds && result.allFeeds[0];
    }
  }, [result]);

  return { loading, error, data };
};
