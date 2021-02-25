import {
  ApolloError,
  ApolloQueryResult,
  DocumentNode,
  FetchMoreOptions,
  FetchMoreQueryOptions,
} from '@apollo/client';

export interface ApiCallStates {
  loading: boolean;
  error: Error | ApolloError | undefined;
}

export type { Feed, FeedVariables, FeedData } from './Feed';
export type {
  Prospect,
  ProspectData,
  ProspectListData,
  ProspectVariables,
  CreateProspectVariables,
  UpdateProspectVariables,
} from './Prospect';

/**
 * The following is taken word-for-word from this as yet unaddressed issue
 * https://github.com/apollographql/apollo-feature-requests/issues/165#issuecomment-521061691
 *
 * Apollo doesn't export types for the 'fetchMore' helper function that is used in pagination.
 */
export type ApolloFetchMoreType<TData, TVariables> = (<
  K extends keyof TVariables
>(
  fetchMoreOptions: FetchMoreQueryOptions<TVariables, K> &
    FetchMoreOptions<TData, TVariables>
) => Promise<ApolloQueryResult<TData>>) &
  // Note I do not use TData2 or TVariables2
  (<K extends keyof TVariables>(
    fetchMoreOptions: {
      query?: DocumentNode;
    } & FetchMoreQueryOptions<TVariables, K> &
      FetchMoreOptions<TData, TVariables>
  ) => Promise<ApolloQueryResult<TData>>);
