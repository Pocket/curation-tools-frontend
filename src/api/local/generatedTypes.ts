import { gql, MutationTuple, QueryResult, QueryTuple } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  Feed?: Maybe<Feed>;
  allFeeds?: Maybe<Array<Maybe<Feed>>>;
  _allFeedsMeta?: Maybe<ListMetadata>;
  Prospect?: Maybe<Prospect>;
  allProspects?: Maybe<Array<Maybe<Prospect>>>;
  _allProspectsMeta?: Maybe<ListMetadata>;
};

export type QueryFeedArgs = {
  id: Scalars['ID'];
};

export type QueryAllFeedsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<FeedFilter>;
};

export type Query_AllFeedsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FeedFilter>;
};

export type QueryProspectArgs = {
  id: Scalars['ID'];
};

export type QueryAllProspectsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<ProspectFilter>;
};

export type Query_AllProspectsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<ProspectFilter>;
};

export type Feed = {
  __typename?: 'Feed';
  id: Scalars['ID'];
  name: Scalars['String'];
  Prospects?: Maybe<Array<Maybe<Prospect>>>;
};

export type Prospect = {
  __typename?: 'Prospect';
  id: Scalars['ID'];
  feed_id: Scalars['ID'];
  url: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  syndicationArticleId: Scalars['String'];
  sourceName: Scalars['String'];
  topic: Scalars['String'];
  publisher: Scalars['String'];
  sourceScore: Scalars['Float'];
  state: Scalars['String'];
  imageUrl: Scalars['String'];
  excerpt: Scalars['String'];
  createdAt: Scalars['String'];
  itemId: Scalars['String'];
  author: Scalars['String'];
  altText: Scalars['String'];
  Feed?: Maybe<Feed>;
};

export type FeedFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type ProspectFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  feed_id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  syndicationArticleId?: Maybe<Scalars['String']>;
  sourceName?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  sourceScore?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sourceScore_lt?: Maybe<Scalars['Float']>;
  sourceScore_lte?: Maybe<Scalars['Float']>;
  sourceScore_gt?: Maybe<Scalars['Float']>;
  sourceScore_gte?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFeed?: Maybe<Feed>;
  updateFeed?: Maybe<Feed>;
  removeFeed?: Maybe<Scalars['Boolean']>;
  createProspect?: Maybe<Prospect>;
  updateProspect?: Maybe<Prospect>;
  removeProspect?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateFeedArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MutationUpdateFeedArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type MutationRemoveFeedArgs = {
  id: Scalars['ID'];
};

export type MutationCreateProspectArgs = {
  id: Scalars['ID'];
  feed_id: Scalars['ID'];
  url: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  syndicationArticleId: Scalars['String'];
  sourceName: Scalars['String'];
  topic: Scalars['String'];
  publisher: Scalars['String'];
  sourceScore: Scalars['Float'];
  state: Scalars['String'];
  imageUrl: Scalars['String'];
  excerpt: Scalars['String'];
  createdAt: Scalars['String'];
  itemId: Scalars['String'];
  author: Scalars['String'];
  altText: Scalars['String'];
};

export type MutationUpdateProspectArgs = {
  id: Scalars['ID'];
  feed_id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  syndicationArticleId?: Maybe<Scalars['String']>;
  sourceName?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  sourceScore?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
};

export type MutationRemoveProspectArgs = {
  id: Scalars['ID'];
};

export type ProspectDataFragment = { __typename?: 'Prospect' } & Pick<
  Prospect,
  | 'id'
  | 'altText'
  | 'author'
  | 'excerpt'
  | 'imageUrl'
  | 'publisher'
  | 'state'
  | 'title'
  | 'topic'
  | 'url'
> & { feedId: Prospect['feed_id']; source: Prospect['sourceName'] };

export type ApproveProspectMutationVariables = Exact<{
  id: Scalars['ID'];
  altText?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  excerpt: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  topic: Scalars['String'];
}>;

export type ApproveProspectMutation = { __typename?: 'Mutation' } & {
  data?: Maybe<{ __typename?: 'Prospect' } & ProspectDataFragment>;
};

export type RejectProspectMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type RejectProspectMutation = { __typename?: 'Mutation' } & {
  data?: Maybe<{ __typename?: 'Prospect' } & ProspectDataFragment>;
};

export type SnoozeProspectMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type SnoozeProspectMutation = { __typename?: 'Mutation' } & {
  data?: Maybe<{ __typename?: 'Prospect' } & ProspectDataFragment>;
};

export type GetApprovedProspectsQueryVariables = Exact<{
  feedId: Scalars['ID'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
}>;

export type GetApprovedProspectsQuery = { __typename?: 'Query' } & {
  allProspects?: Maybe<
    Array<Maybe<{ __typename?: 'Prospect' } & ProspectDataFragment>>
  >;
  totals?: Maybe<
    Array<Maybe<{ __typename?: 'Prospect' } & Pick<Prospect, 'id'>>>
  >;
};

export type GetCurrentFeedQueryVariables = Exact<{
  name: Scalars['String'];
}>;

export type GetCurrentFeedQuery = { __typename?: 'Query' } & {
  allFeeds?: Maybe<
    Array<Maybe<{ __typename?: 'Feed' } & Pick<Feed, 'id' | 'name'>>>
  >;
};

export type GetPendingProspectsQueryVariables = Exact<{
  feedId: Scalars['ID'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
}>;

export type GetPendingProspectsQuery = { __typename?: 'Query' } & {
  allProspects?: Maybe<
    Array<Maybe<{ __typename?: 'Prospect' } & ProspectDataFragment>>
  >;
  totals?: Maybe<
    Array<Maybe<{ __typename?: 'Prospect' } & Pick<Prospect, 'id'>>>
  >;
};

export type GetRejectedProspectsQueryVariables = Exact<{
  feedId: Scalars['ID'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
}>;

export type GetRejectedProspectsQuery = { __typename?: 'Query' } & {
  allProspects?: Maybe<
    Array<Maybe<{ __typename?: 'Prospect' } & ProspectDataFragment>>
  >;
  totals?: Maybe<
    Array<Maybe<{ __typename?: 'Prospect' } & Pick<Prospect, 'id'>>>
  >;
};

export type GetSnoozedProspectsQueryVariables = Exact<{
  feedId: Scalars['ID'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
}>;

export type GetSnoozedProspectsQuery = { __typename?: 'Query' } & {
  allProspects?: Maybe<
    Array<Maybe<{ __typename?: 'Prospect' } & ProspectDataFragment>>
  >;
  totals?: Maybe<
    Array<Maybe<{ __typename?: 'Prospect' } & Pick<Prospect, 'id'>>>
  >;
};

export const ProspectDataFragmentDoc = gql`
  fragment ProspectData on Prospect {
    id
    altText
    author
    excerpt
    feedId: feed_id
    imageUrl
    publisher
    source: sourceName
    state
    title
    topic
    url
  }
`;
export const ApproveProspectDocument = gql`
  mutation approveProspect(
    $id: ID!
    $altText: String
    $author: String
    $excerpt: String!
    $imageUrl: String
    $publisher: String
    $title: String!
    $topic: String!
  ) {
    data: updateProspect(
      id: $id
      altText: $altText
      author: $author
      excerpt: $excerpt
      imageUrl: $imageUrl
      publisher: $publisher
      state: "APPROVED"
      title: $title
      topic: $topic
      updatedAt: null
    ) {
      ...ProspectData
    }
  }
  ${ProspectDataFragmentDoc}
`;
export type ApproveProspectMutationFn = Apollo.MutationFunction<
  ApproveProspectMutation,
  ApproveProspectMutationVariables
>;

/**
 * __useApproveProspectMutation__
 *
 * To run a mutation, you first call `useApproveProspectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveProspectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveProspectMutation, { data, loading, error }] = useApproveProspectMutation({
 *   variables: {
 *      id: // value for 'id'
 *      altText: // value for 'altText'
 *      author: // value for 'author'
 *      excerpt: // value for 'excerpt'
 *      imageUrl: // value for 'imageUrl'
 *      publisher: // value for 'publisher'
 *      title: // value for 'title'
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useApproveProspectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApproveProspectMutation,
    ApproveProspectMutationVariables
  >
): MutationTuple<ApproveProspectMutation, ApproveProspectMutationVariables> {
  return Apollo.useMutation<
    ApproveProspectMutation,
    ApproveProspectMutationVariables
  >(ApproveProspectDocument, baseOptions);
}
export type ApproveProspectMutationHookResult = ReturnType<
  typeof useApproveProspectMutation
>;
export type ApproveProspectMutationResult = Apollo.MutationResult<ApproveProspectMutation>;
export type ApproveProspectMutationOptions = Apollo.BaseMutationOptions<
  ApproveProspectMutation,
  ApproveProspectMutationVariables
>;
export const RejectProspectDocument = gql`
  mutation rejectProspect($id: ID!) {
    data: updateProspect(id: $id, state: "REJECTED") {
      ...ProspectData
    }
  }
  ${ProspectDataFragmentDoc}
`;
export type RejectProspectMutationFn = Apollo.MutationFunction<
  RejectProspectMutation,
  RejectProspectMutationVariables
>;

/**
 * __useRejectProspectMutation__
 *
 * To run a mutation, you first call `useRejectProspectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectProspectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectProspectMutation, { data, loading, error }] = useRejectProspectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRejectProspectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RejectProspectMutation,
    RejectProspectMutationVariables
  >
): MutationTuple<RejectProspectMutation, RejectProspectMutationVariables> {
  return Apollo.useMutation<
    RejectProspectMutation,
    RejectProspectMutationVariables
  >(RejectProspectDocument, baseOptions);
}
export type RejectProspectMutationHookResult = ReturnType<
  typeof useRejectProspectMutation
>;
export type RejectProspectMutationResult = Apollo.MutationResult<RejectProspectMutation>;
export type RejectProspectMutationOptions = Apollo.BaseMutationOptions<
  RejectProspectMutation,
  RejectProspectMutationVariables
>;
export const SnoozeProspectDocument = gql`
  mutation snoozeProspect($id: ID!) {
    data: updateProspect(id: $id, state: "SNOOZED") {
      ...ProspectData
    }
  }
  ${ProspectDataFragmentDoc}
`;
export type SnoozeProspectMutationFn = Apollo.MutationFunction<
  SnoozeProspectMutation,
  SnoozeProspectMutationVariables
>;

/**
 * __useSnoozeProspectMutation__
 *
 * To run a mutation, you first call `useSnoozeProspectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSnoozeProspectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [snoozeProspectMutation, { data, loading, error }] = useSnoozeProspectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSnoozeProspectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SnoozeProspectMutation,
    SnoozeProspectMutationVariables
  >
): MutationTuple<SnoozeProspectMutation, SnoozeProspectMutationVariables> {
  return Apollo.useMutation<
    SnoozeProspectMutation,
    SnoozeProspectMutationVariables
  >(SnoozeProspectDocument, baseOptions);
}
export type SnoozeProspectMutationHookResult = ReturnType<
  typeof useSnoozeProspectMutation
>;
export type SnoozeProspectMutationResult = Apollo.MutationResult<SnoozeProspectMutation>;
export type SnoozeProspectMutationOptions = Apollo.BaseMutationOptions<
  SnoozeProspectMutation,
  SnoozeProspectMutationVariables
>;
export const GetApprovedProspectsDocument = gql`
  query getApprovedProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "APPROVED", feed_id: $feedId }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(filter: { state: "APPROVED", feed_id: $feedId }) {
      id
    }
  }
  ${ProspectDataFragmentDoc}
`;

/**
 * __useGetApprovedProspectsQuery__
 *
 * To run a query within a React component, call `useGetApprovedProspectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApprovedProspectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApprovedProspectsQuery({
 *   variables: {
 *      feedId: // value for 'feedId'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetApprovedProspectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetApprovedProspectsQuery,
    GetApprovedProspectsQueryVariables
  >
): QueryResult<GetApprovedProspectsQuery, GetApprovedProspectsQueryVariables> {
  return Apollo.useQuery<
    GetApprovedProspectsQuery,
    GetApprovedProspectsQueryVariables
  >(GetApprovedProspectsDocument, baseOptions);
}
export function useGetApprovedProspectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetApprovedProspectsQuery,
    GetApprovedProspectsQueryVariables
  >
): QueryTuple<GetApprovedProspectsQuery, GetApprovedProspectsQueryVariables> {
  return Apollo.useLazyQuery<
    GetApprovedProspectsQuery,
    GetApprovedProspectsQueryVariables
  >(GetApprovedProspectsDocument, baseOptions);
}
export type GetApprovedProspectsQueryHookResult = ReturnType<
  typeof useGetApprovedProspectsQuery
>;
export type GetApprovedProspectsLazyQueryHookResult = ReturnType<
  typeof useGetApprovedProspectsLazyQuery
>;
export type GetApprovedProspectsQueryResult = Apollo.QueryResult<
  GetApprovedProspectsQuery,
  GetApprovedProspectsQueryVariables
>;
export const GetCurrentFeedDocument = gql`
  query getCurrentFeed($name: String!) {
    allFeeds(filter: { name: $name }) {
      id
      name
    }
  }
`;

/**
 * __useGetCurrentFeedQuery__
 *
 * To run a query within a React component, call `useGetCurrentFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentFeedQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCurrentFeedQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCurrentFeedQuery,
    GetCurrentFeedQueryVariables
  >
): QueryResult<GetCurrentFeedQuery, GetCurrentFeedQueryVariables> {
  return Apollo.useQuery<GetCurrentFeedQuery, GetCurrentFeedQueryVariables>(
    GetCurrentFeedDocument,
    baseOptions
  );
}
export function useGetCurrentFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentFeedQuery,
    GetCurrentFeedQueryVariables
  >
): QueryTuple<GetCurrentFeedQuery, GetCurrentFeedQueryVariables> {
  return Apollo.useLazyQuery<GetCurrentFeedQuery, GetCurrentFeedQueryVariables>(
    GetCurrentFeedDocument,
    baseOptions
  );
}
export type GetCurrentFeedQueryHookResult = ReturnType<
  typeof useGetCurrentFeedQuery
>;
export type GetCurrentFeedLazyQueryHookResult = ReturnType<
  typeof useGetCurrentFeedLazyQuery
>;
export type GetCurrentFeedQueryResult = Apollo.QueryResult<
  GetCurrentFeedQuery,
  GetCurrentFeedQueryVariables
>;
export const GetPendingProspectsDocument = gql`
  query getPendingProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "PENDING", feed_id: $feedId }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(filter: { state: "PENDING", feed_id: $feedId }) {
      id
    }
  }
  ${ProspectDataFragmentDoc}
`;

/**
 * __useGetPendingProspectsQuery__
 *
 * To run a query within a React component, call `useGetPendingProspectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPendingProspectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPendingProspectsQuery({
 *   variables: {
 *      feedId: // value for 'feedId'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetPendingProspectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPendingProspectsQuery,
    GetPendingProspectsQueryVariables
  >
): QueryResult<GetPendingProspectsQuery, GetPendingProspectsQueryVariables> {
  return Apollo.useQuery<
    GetPendingProspectsQuery,
    GetPendingProspectsQueryVariables
  >(GetPendingProspectsDocument, baseOptions);
}
export function useGetPendingProspectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPendingProspectsQuery,
    GetPendingProspectsQueryVariables
  >
): QueryTuple<GetPendingProspectsQuery, GetPendingProspectsQueryVariables> {
  return Apollo.useLazyQuery<
    GetPendingProspectsQuery,
    GetPendingProspectsQueryVariables
  >(GetPendingProspectsDocument, baseOptions);
}
export type GetPendingProspectsQueryHookResult = ReturnType<
  typeof useGetPendingProspectsQuery
>;
export type GetPendingProspectsLazyQueryHookResult = ReturnType<
  typeof useGetPendingProspectsLazyQuery
>;
export type GetPendingProspectsQueryResult = Apollo.QueryResult<
  GetPendingProspectsQuery,
  GetPendingProspectsQueryVariables
>;
export const GetRejectedProspectsDocument = gql`
  query getRejectedProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "REJECTED", feed_id: $feedId }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(filter: { state: "REJECTED", feed_id: $feedId }) {
      id
    }
  }
  ${ProspectDataFragmentDoc}
`;

/**
 * __useGetRejectedProspectsQuery__
 *
 * To run a query within a React component, call `useGetRejectedProspectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRejectedProspectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRejectedProspectsQuery({
 *   variables: {
 *      feedId: // value for 'feedId'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetRejectedProspectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRejectedProspectsQuery,
    GetRejectedProspectsQueryVariables
  >
): QueryResult<GetRejectedProspectsQuery, GetRejectedProspectsQueryVariables> {
  return Apollo.useQuery<
    GetRejectedProspectsQuery,
    GetRejectedProspectsQueryVariables
  >(GetRejectedProspectsDocument, baseOptions);
}
export function useGetRejectedProspectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRejectedProspectsQuery,
    GetRejectedProspectsQueryVariables
  >
): QueryTuple<GetRejectedProspectsQuery, GetRejectedProspectsQueryVariables> {
  return Apollo.useLazyQuery<
    GetRejectedProspectsQuery,
    GetRejectedProspectsQueryVariables
  >(GetRejectedProspectsDocument, baseOptions);
}
export type GetRejectedProspectsQueryHookResult = ReturnType<
  typeof useGetRejectedProspectsQuery
>;
export type GetRejectedProspectsLazyQueryHookResult = ReturnType<
  typeof useGetRejectedProspectsLazyQuery
>;
export type GetRejectedProspectsQueryResult = Apollo.QueryResult<
  GetRejectedProspectsQuery,
  GetRejectedProspectsQueryVariables
>;
export const GetSnoozedProspectsDocument = gql`
  query getSnoozedProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "SNOOZED", feed_id: $feedId }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(filter: { state: "SNOOZED", feed_id: $feedId }) {
      id
    }
  }
  ${ProspectDataFragmentDoc}
`;

/**
 * __useGetSnoozedProspectsQuery__
 *
 * To run a query within a React component, call `useGetSnoozedProspectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSnoozedProspectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSnoozedProspectsQuery({
 *   variables: {
 *      feedId: // value for 'feedId'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetSnoozedProspectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSnoozedProspectsQuery,
    GetSnoozedProspectsQueryVariables
  >
): QueryResult<GetSnoozedProspectsQuery, GetSnoozedProspectsQueryVariables> {
  return Apollo.useQuery<
    GetSnoozedProspectsQuery,
    GetSnoozedProspectsQueryVariables
  >(GetSnoozedProspectsDocument, baseOptions);
}
export function useGetSnoozedProspectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSnoozedProspectsQuery,
    GetSnoozedProspectsQueryVariables
  >
): QueryTuple<GetSnoozedProspectsQuery, GetSnoozedProspectsQueryVariables> {
  return Apollo.useLazyQuery<
    GetSnoozedProspectsQuery,
    GetSnoozedProspectsQueryVariables
  >(GetSnoozedProspectsDocument, baseOptions);
}
export type GetSnoozedProspectsQueryHookResult = ReturnType<
  typeof useGetSnoozedProspectsQuery
>;
export type GetSnoozedProspectsLazyQueryHookResult = ReturnType<
  typeof useGetSnoozedProspectsLazyQuery
>;
export type GetSnoozedProspectsQueryResult = Apollo.QueryResult<
  GetSnoozedProspectsQuery,
  GetSnoozedProspectsQueryVariables
>;
