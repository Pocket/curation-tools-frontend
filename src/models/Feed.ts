import { ApiCallStates } from './';

export interface Feed {
  id: string;
  name: string;
}

export interface FeedVariables {
  name: string;
}

export interface FeedData extends ApiCallStates {
  data: Feed | null | undefined;
}
