import { client } from '../client';
import { FeedVariables, FeedData } from '../../../models';
import { useGetCurrentFeedQuery } from '../generatedTypes';
import { useMemo } from 'react';

export const useGetCurrentFeed = (vars: FeedVariables): FeedData => {
  const { loading, error, data: result } = useGetCurrentFeedQuery({
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
