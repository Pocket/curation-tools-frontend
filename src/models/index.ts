import { ApolloError } from '@apollo/client';

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
  ApproveProspectVariables,
} from './Prospect';
