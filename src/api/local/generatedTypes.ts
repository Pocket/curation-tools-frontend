import { gql } from '@apollo/client';
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
  imageUrl: Scalars['String'];
  sourceScore: Scalars['Float'];
  sourceName: Scalars['String'];
  publisher: Scalars['String'];
  author: Scalars['String'];
  syndicationArticleId: Scalars['String'];
  itemId: Scalars['String'];
  topic: Scalars['String'];
  state: Scalars['String'];
  excerpt: Scalars['String'];
  snoozedUntil?: Maybe<Scalars['String']>;
  altText: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
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
  imageUrl?: Maybe<Scalars['String']>;
  sourceScore?: Maybe<Scalars['Float']>;
  sourceName?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  syndicationArticleId?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  snoozedUntil?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
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
  imageUrl: Scalars['String'];
  sourceScore: Scalars['Float'];
  sourceName: Scalars['String'];
  publisher: Scalars['String'];
  author: Scalars['String'];
  syndicationArticleId: Scalars['String'];
  itemId: Scalars['String'];
  topic: Scalars['String'];
  state: Scalars['String'];
  excerpt: Scalars['String'];
  snoozedUntil?: Maybe<Scalars['String']>;
  altText: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type MutationUpdateProspectArgs = {
  id: Scalars['ID'];
  feed_id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  sourceScore?: Maybe<Scalars['Float']>;
  sourceName?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  syndicationArticleId?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  snoozedUntil?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
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
  | 'snoozedUntil'
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
    snoozedUntil
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
      snoozedUntil: null
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
) {
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
) {
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
) {
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
) {
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
) {
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
