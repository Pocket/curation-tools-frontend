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
  altText: Scalars['String'];
  author: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  imageUrl: Scalars['String'];
  publisher: Scalars['String'];
  isLive: Scalars['Boolean'];
  syndicationArticleId: Scalars['String'];
  sourceScore: Scalars['Float'];
  removalReason?: Maybe<Scalars['String']>;
  topic: Scalars['String'];
  isScheduled: Scalars['Boolean'];
  isRemoved: Scalars['Boolean'];
  itemId: Scalars['String'];
  sourceName: Scalars['String'];
  state: Scalars['String'];
  createdAt: Scalars['String'];
  excerpt: Scalars['String'];
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
  altText?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  isLive?: Maybe<Scalars['Boolean']>;
  syndicationArticleId?: Maybe<Scalars['String']>;
  sourceScore?: Maybe<Scalars['Float']>;
  removalReason?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  isScheduled?: Maybe<Scalars['Boolean']>;
  isRemoved?: Maybe<Scalars['Boolean']>;
  itemId?: Maybe<Scalars['String']>;
  sourceName?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
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
  altText: Scalars['String'];
  author: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  imageUrl: Scalars['String'];
  publisher: Scalars['String'];
  isLive: Scalars['Boolean'];
  syndicationArticleId: Scalars['String'];
  sourceScore: Scalars['Float'];
  removalReason?: Maybe<Scalars['String']>;
  topic: Scalars['String'];
  isScheduled: Scalars['Boolean'];
  isRemoved: Scalars['Boolean'];
  itemId: Scalars['String'];
  sourceName: Scalars['String'];
  state: Scalars['String'];
  createdAt: Scalars['String'];
  excerpt: Scalars['String'];
};

export type MutationUpdateProspectArgs = {
  id: Scalars['ID'];
  feed_id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  isLive?: Maybe<Scalars['Boolean']>;
  syndicationArticleId?: Maybe<Scalars['String']>;
  sourceScore?: Maybe<Scalars['Float']>;
  removalReason?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  isScheduled?: Maybe<Scalars['Boolean']>;
  isRemoved?: Maybe<Scalars['Boolean']>;
  itemId?: Maybe<Scalars['String']>;
  sourceName?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
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
  | 'isLive'
  | 'isRemoved'
  | 'isScheduled'
  | 'publisher'
  | 'removalReason'
  | 'state'
  | 'title'
  | 'topic'
  | 'url'
> & { feedId: Prospect['feed_id']; source: Prospect['sourceName'] };

export type RejectProspectMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type RejectProspectMutation = { __typename?: 'Mutation' } & {
  data?: Maybe<{ __typename?: 'Prospect' } & ProspectDataFragment>;
};

export type RemoveProspectMutationVariables = Exact<{
  id: Scalars['ID'];
  removalReason: Scalars['String'];
}>;

export type RemoveProspectMutation = { __typename?: 'Mutation' } & {
  data?: Maybe<
    { __typename?: 'Prospect' } & Pick<
      Prospect,
      'id' | 'title' | 'isRemoved' | 'removalReason'
    >
  >;
};

export type SnoozeProspectMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type SnoozeProspectMutation = { __typename?: 'Mutation' } & {
  data?: Maybe<{ __typename?: 'Prospect' } & ProspectDataFragment>;
};

export type UpdateProspectMutationVariables = Exact<{
  id: Scalars['ID'];
  altText?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  excerpt: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  topic: Scalars['String'];
}>;

export type UpdateProspectMutation = { __typename?: 'Mutation' } & {
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

export type GetLiveProspectsQueryVariables = Exact<{
  feedId: Scalars['ID'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
}>;

export type GetLiveProspectsQuery = { __typename?: 'Query' } & {
  allProspects?: Maybe<
    Array<Maybe<{ __typename?: 'Prospect' } & ProspectDataFragment>>
  >;
  totals?: Maybe<
    Array<Maybe<{ __typename?: 'Prospect' } & Pick<Prospect, 'id'>>>
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

export type GetScheduledProspectsQueryVariables = Exact<{
  feedId: Scalars['ID'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
}>;

export type GetScheduledProspectsQuery = { __typename?: 'Query' } & {
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
export const RemoveProspectDocument = gql`
  mutation removeProspect($id: ID!, $removalReason: String!) {
    data: updateProspect(
      id: $id
      isRemoved: true
      removalReason: $removalReason
    ) {
      id
      title
      isRemoved
      removalReason
    }
  }
`;
export type RemoveProspectMutationFn = Apollo.MutationFunction<
  RemoveProspectMutation,
  RemoveProspectMutationVariables
>;

/**
 * __useRemoveProspectMutation__
 *
 * To run a mutation, you first call `useRemoveProspectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProspectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProspectMutation, { data, loading, error }] = useRemoveProspectMutation({
 *   variables: {
 *      id: // value for 'id'
 *      removalReason: // value for 'removalReason'
 *   },
 * });
 */
export function useRemoveProspectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveProspectMutation,
    RemoveProspectMutationVariables
  >
): MutationTuple<RemoveProspectMutation, RemoveProspectMutationVariables> {
  return Apollo.useMutation<
    RemoveProspectMutation,
    RemoveProspectMutationVariables
  >(RemoveProspectDocument, baseOptions);
}
export type RemoveProspectMutationHookResult = ReturnType<
  typeof useRemoveProspectMutation
>;
export type RemoveProspectMutationResult = Apollo.MutationResult<RemoveProspectMutation>;
export type RemoveProspectMutationOptions = Apollo.BaseMutationOptions<
  RemoveProspectMutation,
  RemoveProspectMutationVariables
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
export const UpdateProspectDocument = gql`
  mutation updateProspect(
    $id: ID!
    $altText: String
    $author: String
    $excerpt: String!
    $imageUrl: String
    $publisher: String
    $state: String
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
      state: $state
      title: $title
      topic: $topic
    ) {
      ...ProspectData
    }
  }
  ${ProspectDataFragmentDoc}
`;
export type UpdateProspectMutationFn = Apollo.MutationFunction<
  UpdateProspectMutation,
  UpdateProspectMutationVariables
>;

/**
 * __useUpdateProspectMutation__
 *
 * To run a mutation, you first call `useUpdateProspectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProspectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProspectMutation, { data, loading, error }] = useUpdateProspectMutation({
 *   variables: {
 *      id: // value for 'id'
 *      altText: // value for 'altText'
 *      author: // value for 'author'
 *      excerpt: // value for 'excerpt'
 *      imageUrl: // value for 'imageUrl'
 *      publisher: // value for 'publisher'
 *      state: // value for 'state'
 *      title: // value for 'title'
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useUpdateProspectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProspectMutation,
    UpdateProspectMutationVariables
  >
): MutationTuple<UpdateProspectMutation, UpdateProspectMutationVariables> {
  return Apollo.useMutation<
    UpdateProspectMutation,
    UpdateProspectMutationVariables
  >(UpdateProspectDocument, baseOptions);
}
export type UpdateProspectMutationHookResult = ReturnType<
  typeof useUpdateProspectMutation
>;
export type UpdateProspectMutationResult = Apollo.MutationResult<UpdateProspectMutation>;
export type UpdateProspectMutationOptions = Apollo.BaseMutationOptions<
  UpdateProspectMutation,
  UpdateProspectMutationVariables
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
export const GetLiveProspectsDocument = gql`
  query getLiveProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "APPROVED", feed_id: $feedId, isLive: true }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(
      filter: { state: "APPROVED", feed_id: $feedId, isLive: true }
    ) {
      id
    }
  }
  ${ProspectDataFragmentDoc}
`;

/**
 * __useGetLiveProspectsQuery__
 *
 * To run a query within a React component, call `useGetLiveProspectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLiveProspectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLiveProspectsQuery({
 *   variables: {
 *      feedId: // value for 'feedId'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetLiveProspectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLiveProspectsQuery,
    GetLiveProspectsQueryVariables
  >
): QueryResult<GetLiveProspectsQuery, GetLiveProspectsQueryVariables> {
  return Apollo.useQuery<GetLiveProspectsQuery, GetLiveProspectsQueryVariables>(
    GetLiveProspectsDocument,
    baseOptions
  );
}
export function useGetLiveProspectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLiveProspectsQuery,
    GetLiveProspectsQueryVariables
  >
): QueryTuple<GetLiveProspectsQuery, GetLiveProspectsQueryVariables> {
  return Apollo.useLazyQuery<
    GetLiveProspectsQuery,
    GetLiveProspectsQueryVariables
  >(GetLiveProspectsDocument, baseOptions);
}
export type GetLiveProspectsQueryHookResult = ReturnType<
  typeof useGetLiveProspectsQuery
>;
export type GetLiveProspectsLazyQueryHookResult = ReturnType<
  typeof useGetLiveProspectsLazyQuery
>;
export type GetLiveProspectsQueryResult = Apollo.QueryResult<
  GetLiveProspectsQuery,
  GetLiveProspectsQueryVariables
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
export const GetScheduledProspectsDocument = gql`
  query getScheduledProspects($feedId: ID!, $page: Int!, $perPage: Int!) {
    allProspects(
      filter: { state: "APPROVED", feed_id: $feedId, isScheduled: true }
      page: $page
      perPage: $perPage
      sortField: "createdAt"
      sortOrder: "DESC"
    ) {
      ...ProspectData
    }
    totals: allProspects(
      filter: { state: "APPROVED", feed_id: $feedId, isScheduled: true }
    ) {
      id
    }
  }
  ${ProspectDataFragmentDoc}
`;

/**
 * __useGetScheduledProspectsQuery__
 *
 * To run a query within a React component, call `useGetScheduledProspectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScheduledProspectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScheduledProspectsQuery({
 *   variables: {
 *      feedId: // value for 'feedId'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetScheduledProspectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetScheduledProspectsQuery,
    GetScheduledProspectsQueryVariables
  >
): QueryResult<
  GetScheduledProspectsQuery,
  GetScheduledProspectsQueryVariables
> {
  return Apollo.useQuery<
    GetScheduledProspectsQuery,
    GetScheduledProspectsQueryVariables
  >(GetScheduledProspectsDocument, baseOptions);
}
export function useGetScheduledProspectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetScheduledProspectsQuery,
    GetScheduledProspectsQueryVariables
  >
): QueryTuple<GetScheduledProspectsQuery, GetScheduledProspectsQueryVariables> {
  return Apollo.useLazyQuery<
    GetScheduledProspectsQuery,
    GetScheduledProspectsQueryVariables
  >(GetScheduledProspectsDocument, baseOptions);
}
export type GetScheduledProspectsQueryHookResult = ReturnType<
  typeof useGetScheduledProspectsQuery
>;
export type GetScheduledProspectsLazyQueryHookResult = ReturnType<
  typeof useGetScheduledProspectsLazyQuery
>;
export type GetScheduledProspectsQueryResult = Apollo.QueryResult<
  GetScheduledProspectsQuery,
  GetScheduledProspectsQueryVariables
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
