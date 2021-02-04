import { FeedVariables, FeedData } from '../../../models';
import { useGetCurrentFeedQuery } from '../generatedTypes';
import { getCurrentFeed } from '../queries/getCurrentFeed';
import { useMemo } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export const useGetCurrentFeed = (
  vars: FeedVariables,
  client: ApolloClient<NormalizedCacheObject>
): FeedData => {
  const { loading, error, data: result } = useGetCurrentFeedQuery({
    query: getCurrentFeed,
    variables: vars,
    client,
  });

  const data = useMemo(() => {
    if (result) {
      return result.currentFeed?.items && result.currentFeed?.items[0];
    }
  }, [result]);

  return { loading, error, data };
};
