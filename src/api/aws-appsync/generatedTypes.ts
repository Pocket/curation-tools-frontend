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
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
};

export type Query = {
  __typename?: 'Query';
  listLiveProspects: Array<Prospect>;
  getFeed?: Maybe<Feed>;
  listFeeds?: Maybe<ModelFeedConnection>;
  getProspect?: Maybe<Prospect>;
  listProspects?: Maybe<ModelProspectConnection>;
  getScheduleEntry?: Maybe<ScheduleEntry>;
  listScheduleEntrys?: Maybe<ModelScheduleEntryConnection>;
  byFeedIdAndState?: Maybe<ModelProspectConnection>;
  searchProspects?: Maybe<SearchableProspectConnection>;
  searchScheduleEntrys?: Maybe<SearchableScheduleEntryConnection>;
};

export type QueryListLiveProspectsArgs = {
  input?: Maybe<ListLiveProspectsInput>;
};

export type QueryGetFeedArgs = {
  id: Scalars['ID'];
};

export type QueryListFeedsArgs = {
  filter?: Maybe<ModelFeedFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type QueryGetProspectArgs = {
  id: Scalars['ID'];
};

export type QueryListProspectsArgs = {
  filter?: Maybe<ModelProspectFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type QueryGetScheduleEntryArgs = {
  id: Scalars['ID'];
};

export type QueryListScheduleEntrysArgs = {
  filter?: Maybe<ModelScheduleEntryFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type QueryByFeedIdAndStateArgs = {
  feedId?: Maybe<Scalars['ID']>;
  stateSnoozedUntilUpdatedAt?: Maybe<ModelProspectFeedIdStateCompositeKeyConditionInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  filter?: Maybe<ModelProspectFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type QuerySearchProspectsArgs = {
  filter?: Maybe<SearchableProspectFilterInput>;
  sort?: Maybe<SearchableProspectSortInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
};

export type QuerySearchScheduleEntrysArgs = {
  filter?: Maybe<SearchableScheduleEntryFilterInput>;
  sort?: Maybe<SearchableScheduleEntrySortInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Int']>;
};

export type Prospect = {
  __typename?: 'Prospect';
  id: Scalars['ID'];
  feedId: Scalars['ID'];
  feed?: Maybe<Feed>;
  state: ProspectState;
  snoozedUntil?: Maybe<Scalars['AWSDateTime']>;
  url: Scalars['String'];
  publisher?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['ID']>;
  topic?: Maybe<Scalars['String']>;
  sourceName?: Maybe<Scalars['String']>;
  sourceScore?: Maybe<Scalars['Float']>;
  syndicationArticleId?: Maybe<Scalars['ID']>;
  scheduleEntries?: Maybe<ModelScheduleEntryConnection>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  groupsWrite?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProspectScheduleEntriesArgs = {
  filter?: Maybe<ModelScheduleEntryFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Feed = {
  __typename?: 'Feed';
  id: Scalars['ID'];
  legacyId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  groupsRead?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum ProspectState {
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Approved = 'APPROVED',
}

export type ModelScheduleEntryConnection = {
  __typename?: 'ModelScheduleEntryConnection';
  items?: Maybe<Array<Maybe<ScheduleEntry>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ScheduleEntry = {
  __typename?: 'ScheduleEntry';
  id: Scalars['ID'];
  feedId: Scalars['ID'];
  feed?: Maybe<Feed>;
  prospectId: Scalars['ID'];
  startTime: Scalars['AWSDateTime'];
  endTime: Scalars['AWSDateTime'];
  prospect?: Maybe<Prospect>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  groupsWrite?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ModelScheduleEntryFilterInput = {
  id?: Maybe<ModelIdInput>;
  feedId?: Maybe<ModelIdInput>;
  prospectId?: Maybe<ModelIdInput>;
  startTime?: Maybe<ModelStringInput>;
  endTime?: Maybe<ModelStringInput>;
  createdAt?: Maybe<ModelStringInput>;
  updatedAt?: Maybe<ModelStringInput>;
  groupsWrite?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelScheduleEntryFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelScheduleEntryFilterInput>>>;
  not?: Maybe<ModelScheduleEntryFilterInput>;
};

export type ModelIdInput = {
  ne?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  contains?: Maybe<Scalars['ID']>;
  notContains?: Maybe<Scalars['ID']>;
  between?: Maybe<Array<Maybe<Scalars['ID']>>>;
  beginsWith?: Maybe<Scalars['ID']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export enum ModelAttributeTypes {
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet',
  Null = '_null',
}

export type ModelSizeInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ModelStringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
  beginsWith?: Maybe<Scalars['String']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type ListLiveProspectsInput = {
  feedId: Scalars['ID'];
  limit?: Maybe<Scalars['Int']>;
};

export type ModelFeedConnection = {
  __typename?: 'ModelFeedConnection';
  items?: Maybe<Array<Maybe<Feed>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelFeedFilterInput = {
  id?: Maybe<ModelIdInput>;
  legacyId?: Maybe<ModelIntInput>;
  name?: Maybe<ModelStringInput>;
  createdAt?: Maybe<ModelStringInput>;
  updatedAt?: Maybe<ModelStringInput>;
  groupsRead?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelFeedFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelFeedFilterInput>>>;
  not?: Maybe<ModelFeedFilterInput>;
};

export type ModelIntInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelProspectConnection = {
  __typename?: 'ModelProspectConnection';
  items?: Maybe<Array<Maybe<Prospect>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelProspectFilterInput = {
  id?: Maybe<ModelIdInput>;
  feedId?: Maybe<ModelIdInput>;
  state?: Maybe<ModelProspectStateInput>;
  snoozedUntil?: Maybe<ModelStringInput>;
  url?: Maybe<ModelStringInput>;
  publisher?: Maybe<ModelStringInput>;
  author?: Maybe<ModelStringInput>;
  title?: Maybe<ModelStringInput>;
  excerpt?: Maybe<ModelStringInput>;
  imageUrl?: Maybe<ModelStringInput>;
  altText?: Maybe<ModelStringInput>;
  itemId?: Maybe<ModelIdInput>;
  topic?: Maybe<ModelStringInput>;
  sourceName?: Maybe<ModelStringInput>;
  sourceScore?: Maybe<ModelFloatInput>;
  syndicationArticleId?: Maybe<ModelIdInput>;
  createdAt?: Maybe<ModelStringInput>;
  updatedAt?: Maybe<ModelStringInput>;
  groupsWrite?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelProspectFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelProspectFilterInput>>>;
  not?: Maybe<ModelProspectFilterInput>;
};

export type ModelProspectStateInput = {
  eq?: Maybe<ProspectState>;
  ne?: Maybe<ProspectState>;
};

export type ModelFloatInput = {
  ne?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<Array<Maybe<Scalars['Float']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelProspectFeedIdStateCompositeKeyConditionInput = {
  eq?: Maybe<ModelProspectFeedIdStateCompositeKeyInput>;
  le?: Maybe<ModelProspectFeedIdStateCompositeKeyInput>;
  lt?: Maybe<ModelProspectFeedIdStateCompositeKeyInput>;
  ge?: Maybe<ModelProspectFeedIdStateCompositeKeyInput>;
  gt?: Maybe<ModelProspectFeedIdStateCompositeKeyInput>;
  between?: Maybe<Array<Maybe<ModelProspectFeedIdStateCompositeKeyInput>>>;
  beginsWith?: Maybe<ModelProspectFeedIdStateCompositeKeyInput>;
};

export type ModelProspectFeedIdStateCompositeKeyInput = {
  state?: Maybe<ProspectState>;
  snoozedUntil?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type SearchableProspectConnection = {
  __typename?: 'SearchableProspectConnection';
  items?: Maybe<Array<Maybe<Prospect>>>;
  nextToken?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type SearchableProspectFilterInput = {
  id?: Maybe<SearchableIdFilterInput>;
  state?: Maybe<SearchableStringFilterInput>;
  feedId?: Maybe<SearchableIdFilterInput>;
  snoozedUntil?: Maybe<SearchableStringFilterInput>;
  url?: Maybe<SearchableStringFilterInput>;
  publisher?: Maybe<SearchableStringFilterInput>;
  title?: Maybe<SearchableStringFilterInput>;
  excerpt?: Maybe<SearchableStringFilterInput>;
  imageUrl?: Maybe<SearchableStringFilterInput>;
  itemId?: Maybe<SearchableIdFilterInput>;
  sourceName?: Maybe<SearchableStringFilterInput>;
  sourceScore?: Maybe<SearchableFloatFilterInput>;
  syndicationArticleId?: Maybe<SearchableIdFilterInput>;
  createdAt?: Maybe<SearchableStringFilterInput>;
  updatedAt?: Maybe<SearchableStringFilterInput>;
  and?: Maybe<Array<Maybe<SearchableProspectFilterInput>>>;
  or?: Maybe<Array<Maybe<SearchableProspectFilterInput>>>;
  not?: Maybe<SearchableProspectFilterInput>;
};

export type SearchableIdFilterInput = {
  ne?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  match?: Maybe<Scalars['ID']>;
  matchPhrase?: Maybe<Scalars['ID']>;
  matchPhrasePrefix?: Maybe<Scalars['ID']>;
  multiMatch?: Maybe<Scalars['ID']>;
  exists?: Maybe<Scalars['Boolean']>;
  wildcard?: Maybe<Scalars['ID']>;
  regexp?: Maybe<Scalars['ID']>;
};

export type SearchableStringFilterInput = {
  ne?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  match?: Maybe<Scalars['String']>;
  matchPhrase?: Maybe<Scalars['String']>;
  matchPhrasePrefix?: Maybe<Scalars['String']>;
  multiMatch?: Maybe<Scalars['String']>;
  exists?: Maybe<Scalars['Boolean']>;
  wildcard?: Maybe<Scalars['String']>;
  regexp?: Maybe<Scalars['String']>;
};

export type SearchableFloatFilterInput = {
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
  range?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type SearchableProspectSortInput = {
  field?: Maybe<SearchableProspectSortableFields>;
  direction?: Maybe<SearchableSortDirection>;
};

export enum SearchableProspectSortableFields {
  Id = 'id',
  FeedId = 'feedId',
  SnoozedUntil = 'snoozedUntil',
  Url = 'url',
  Publisher = 'publisher',
  Author = 'author',
  Title = 'title',
  Excerpt = 'excerpt',
  ImageUrl = 'imageUrl',
  AltText = 'altText',
  ItemId = 'itemId',
  Topic = 'topic',
  SourceName = 'sourceName',
  SourceScore = 'sourceScore',
  SyndicationArticleId = 'syndicationArticleId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  GroupsWrite = 'groupsWrite',
}

export enum SearchableSortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type SearchableScheduleEntryConnection = {
  __typename?: 'SearchableScheduleEntryConnection';
  items?: Maybe<Array<Maybe<ScheduleEntry>>>;
  nextToken?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type SearchableScheduleEntryFilterInput = {
  id?: Maybe<SearchableIdFilterInput>;
  feedId?: Maybe<SearchableIdFilterInput>;
  prospectId?: Maybe<SearchableIdFilterInput>;
  startTime?: Maybe<SearchableStringFilterInput>;
  endTime?: Maybe<SearchableStringFilterInput>;
  createdAt?: Maybe<SearchableStringFilterInput>;
  updatedAt?: Maybe<SearchableStringFilterInput>;
  groupsWrite?: Maybe<SearchableStringFilterInput>;
  and?: Maybe<Array<Maybe<SearchableScheduleEntryFilterInput>>>;
  or?: Maybe<Array<Maybe<SearchableScheduleEntryFilterInput>>>;
  not?: Maybe<SearchableScheduleEntryFilterInput>;
};

export type SearchableScheduleEntrySortInput = {
  field?: Maybe<SearchableScheduleEntrySortableFields>;
  direction?: Maybe<SearchableSortDirection>;
};

export enum SearchableScheduleEntrySortableFields {
  Id = 'id',
  FeedId = 'feedId',
  ProspectId = 'prospectId',
  StartTime = 'startTime',
  EndTime = 'endTime',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  GroupsWrite = 'groupsWrite',
}

export type Mutation = {
  __typename?: 'Mutation';
  createProspectByUrl?: Maybe<Prospect>;
  createFeed?: Maybe<Feed>;
  updateFeed?: Maybe<Feed>;
  deleteFeed?: Maybe<Feed>;
  createProspect?: Maybe<Prospect>;
  updateProspect?: Maybe<Prospect>;
  deleteProspect?: Maybe<Prospect>;
  createScheduleEntry?: Maybe<ScheduleEntry>;
  updateScheduleEntry?: Maybe<ScheduleEntry>;
  deleteScheduleEntry?: Maybe<ScheduleEntry>;
};

export type MutationCreateProspectByUrlArgs = {
  input?: Maybe<CreateProspectByUrlInput>;
};

export type MutationCreateFeedArgs = {
  input: CreateFeedInput;
  condition?: Maybe<ModelFeedConditionInput>;
};

export type MutationUpdateFeedArgs = {
  input: UpdateFeedInput;
  condition?: Maybe<ModelFeedConditionInput>;
};

export type MutationDeleteFeedArgs = {
  input: DeleteFeedInput;
  condition?: Maybe<ModelFeedConditionInput>;
};

export type MutationCreateProspectArgs = {
  input: CreateProspectInput;
  condition?: Maybe<ModelProspectConditionInput>;
};

export type MutationUpdateProspectArgs = {
  input: UpdateProspectInput;
  condition?: Maybe<ModelProspectConditionInput>;
};

export type MutationDeleteProspectArgs = {
  input: DeleteProspectInput;
  condition?: Maybe<ModelProspectConditionInput>;
};

export type MutationCreateScheduleEntryArgs = {
  input: CreateScheduleEntryInput;
  condition?: Maybe<ModelScheduleEntryConditionInput>;
};

export type MutationUpdateScheduleEntryArgs = {
  input: UpdateScheduleEntryInput;
  condition?: Maybe<ModelScheduleEntryConditionInput>;
};

export type MutationDeleteScheduleEntryArgs = {
  input: DeleteScheduleEntryInput;
  condition?: Maybe<ModelScheduleEntryConditionInput>;
};

export type CreateProspectByUrlInput = {
  feedId: Scalars['ID'];
  url: Scalars['String'];
  force?: Maybe<Scalars['Boolean']>;
  sourceName?: Maybe<Scalars['String']>;
  sourceScore?: Maybe<Scalars['Float']>;
  topic?: Maybe<Scalars['String']>;
};

export type CreateFeedInput = {
  id?: Maybe<Scalars['ID']>;
  legacyId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  groupsRead?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ModelFeedConditionInput = {
  legacyId?: Maybe<ModelIntInput>;
  name?: Maybe<ModelStringInput>;
  createdAt?: Maybe<ModelStringInput>;
  updatedAt?: Maybe<ModelStringInput>;
  groupsRead?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelFeedConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelFeedConditionInput>>>;
  not?: Maybe<ModelFeedConditionInput>;
};

export type UpdateFeedInput = {
  id: Scalars['ID'];
  legacyId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  groupsRead?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DeleteFeedInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CreateProspectInput = {
  id?: Maybe<Scalars['ID']>;
  feedId: Scalars['ID'];
  state: ProspectState;
  snoozedUntil?: Maybe<Scalars['AWSDateTime']>;
  url: Scalars['String'];
  publisher?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['ID']>;
  topic?: Maybe<Scalars['String']>;
  sourceName?: Maybe<Scalars['String']>;
  sourceScore?: Maybe<Scalars['Float']>;
  syndicationArticleId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  groupsWrite?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ModelProspectConditionInput = {
  feedId?: Maybe<ModelIdInput>;
  state?: Maybe<ModelProspectStateInput>;
  snoozedUntil?: Maybe<ModelStringInput>;
  url?: Maybe<ModelStringInput>;
  publisher?: Maybe<ModelStringInput>;
  author?: Maybe<ModelStringInput>;
  title?: Maybe<ModelStringInput>;
  excerpt?: Maybe<ModelStringInput>;
  imageUrl?: Maybe<ModelStringInput>;
  altText?: Maybe<ModelStringInput>;
  itemId?: Maybe<ModelIdInput>;
  topic?: Maybe<ModelStringInput>;
  sourceName?: Maybe<ModelStringInput>;
  sourceScore?: Maybe<ModelFloatInput>;
  syndicationArticleId?: Maybe<ModelIdInput>;
  createdAt?: Maybe<ModelStringInput>;
  updatedAt?: Maybe<ModelStringInput>;
  groupsWrite?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelProspectConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelProspectConditionInput>>>;
  not?: Maybe<ModelProspectConditionInput>;
};

export type UpdateProspectInput = {
  id: Scalars['ID'];
  state?: Maybe<ProspectState>;
  snoozedUntil?: Maybe<Scalars['AWSDateTime']>;
  url?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  excerpt: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['ID']>;
  topic: Scalars['String'];
  sourceName?: Maybe<Scalars['String']>;
  sourceScore?: Maybe<Scalars['Float']>;
  syndicationArticleId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type DeleteProspectInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CreateScheduleEntryInput = {
  id?: Maybe<Scalars['ID']>;
  feedId: Scalars['ID'];
  prospectId: Scalars['ID'];
  startTime: Scalars['AWSDateTime'];
  endTime: Scalars['AWSDateTime'];
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  groupsWrite?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ModelScheduleEntryConditionInput = {
  feedId?: Maybe<ModelIdInput>;
  prospectId?: Maybe<ModelIdInput>;
  startTime?: Maybe<ModelStringInput>;
  endTime?: Maybe<ModelStringInput>;
  createdAt?: Maybe<ModelStringInput>;
  updatedAt?: Maybe<ModelStringInput>;
  groupsWrite?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelScheduleEntryConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelScheduleEntryConditionInput>>>;
  not?: Maybe<ModelScheduleEntryConditionInput>;
};

export type UpdateScheduleEntryInput = {
  id: Scalars['ID'];
  prospectId?: Maybe<Scalars['ID']>;
  startTime?: Maybe<Scalars['AWSDateTime']>;
  endTime?: Maybe<Scalars['AWSDateTime']>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type DeleteScheduleEntryInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateFeed?: Maybe<Feed>;
  onUpdateFeed?: Maybe<Feed>;
  onDeleteFeed?: Maybe<Feed>;
  onCreateProspect?: Maybe<Prospect>;
  onUpdateProspect?: Maybe<Prospect>;
  onDeleteProspect?: Maybe<Prospect>;
  onCreateScheduleEntry?: Maybe<ScheduleEntry>;
  onUpdateScheduleEntry?: Maybe<ScheduleEntry>;
  onDeleteScheduleEntry?: Maybe<ScheduleEntry>;
};

export type SearchableBooleanFilterInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
};

export type SearchableIntFilterInput = {
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  range?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ModelBooleanInput = {
  ne?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ProspectDataAppSyncFragment = { __typename?: 'Prospect' } & Pick<
  Prospect,
  | 'id'
  | 'altText'
  | 'author'
  | 'excerpt'
  | 'feedId'
  | 'imageUrl'
  | 'publisher'
  | 'snoozedUntil'
  | 'title'
  | 'topic'
  | 'url'
> & { source: Prospect['sourceName'] };

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
  prospect?: Maybe<{ __typename?: 'Prospect' } & ProspectDataAppSyncFragment>;
};

export type CreateProspectByUrlMutationVariables = Exact<{
  feedId: Scalars['ID'];
  url: Scalars['String'];
}>;

export type CreateProspectByUrlMutation = { __typename?: 'Mutation' } & {
  data?: Maybe<{ __typename?: 'Prospect' } & ProspectDataAppSyncFragment>;
};

export type GetCurrentFeedQueryVariables = Exact<{
  name: Scalars['String'];
}>;

export type GetCurrentFeedQuery = { __typename?: 'Query' } & {
  currentFeed?: Maybe<
    { __typename?: 'ModelFeedConnection' } & {
      items?: Maybe<
        Array<Maybe<{ __typename?: 'Feed' } & Pick<Feed, 'id' | 'name'>>>
      >;
    }
  >;
};

export type GetPendingProspectsQueryVariables = Exact<{
  feedId: Scalars['ID'];
  limit: Scalars['Int'];
  nextToken?: Maybe<Scalars['String']>;
}>;

export type GetPendingProspectsQuery = { __typename?: 'Query' } & {
  listProspects?: Maybe<
    { __typename?: 'ModelProspectConnection' } & Pick<
      ModelProspectConnection,
      'nextToken'
    > & {
        items?: Maybe<
          Array<
            Maybe<{ __typename?: 'Prospect' } & ProspectDataAppSyncFragment>
          >
        >;
      }
  >;
};

export const ProspectDataAppSyncFragmentDoc = gql`
  fragment ProspectDataAppSync on Prospect {
    id
    altText
    author
    excerpt
    feedId
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
    prospect: updateProspect(
      input: {
        id: $id
        altText: $altText
        author: $author
        excerpt: $excerpt
        imageUrl: $imageUrl
        publisher: $publisher
        snoozedUntil: null
        state: APPROVED
        title: $title
        topic: $topic
        updatedAt: null
      }
    ) {
      ...ProspectDataAppSync
    }
  }
  ${ProspectDataAppSyncFragmentDoc}
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
export const CreateProspectByUrlDocument = gql`
  mutation createProspectByUrl($feedId: ID!, $url: String!) {
    data: createProspectByUrl(input: { feedId: $feedId, url: $url }) {
      ...ProspectDataAppSync
    }
  }
  ${ProspectDataAppSyncFragmentDoc}
`;
export type CreateProspectByUrlMutationFn = Apollo.MutationFunction<
  CreateProspectByUrlMutation,
  CreateProspectByUrlMutationVariables
>;

/**
 * __useCreateProspectByUrlMutation__
 *
 * To run a mutation, you first call `useCreateProspectByUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProspectByUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProspectByUrlMutation, { data, loading, error }] = useCreateProspectByUrlMutation({
 *   variables: {
 *      feedId: // value for 'feedId'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useCreateProspectByUrlMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProspectByUrlMutation,
    CreateProspectByUrlMutationVariables
  >
): MutationTuple<
  CreateProspectByUrlMutation,
  CreateProspectByUrlMutationVariables
> {
  return Apollo.useMutation<
    CreateProspectByUrlMutation,
    CreateProspectByUrlMutationVariables
  >(CreateProspectByUrlDocument, baseOptions);
}
export type CreateProspectByUrlMutationHookResult = ReturnType<
  typeof useCreateProspectByUrlMutation
>;
export type CreateProspectByUrlMutationResult = Apollo.MutationResult<CreateProspectByUrlMutation>;
export type CreateProspectByUrlMutationOptions = Apollo.BaseMutationOptions<
  CreateProspectByUrlMutation,
  CreateProspectByUrlMutationVariables
>;
export const GetCurrentFeedDocument = gql`
  query getCurrentFeed($name: String!) {
    currentFeed: listFeeds(filter: { name: { eq: $name } }) {
      items {
        id
        name
      }
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
  query getPendingProspects($feedId: ID!, $limit: Int!, $nextToken: String) {
    listProspects(
      limit: $limit
      nextToken: $nextToken
      filter: { feedId: { eq: $feedId }, state: { eq: PENDING } }
    ) {
      items {
        ...ProspectDataAppSync
      }
      nextToken
    }
  }
  ${ProspectDataAppSyncFragmentDoc}
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
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
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
