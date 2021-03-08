export interface Prospect {
  id: string;
  altText: string;
  author: string;
  excerpt: string;
  feedId: string;
  imageUrl: string;
  isLive: boolean;
  isRemoved: boolean;
  isScheduled: boolean;
  publisher: string;
  removalReason: string | null;
  source: string;
  state: string;
  title: string;
  topic: string;
  url: string;
}

export interface ProspectData {
  data:
    | undefined
    | null
    | {
        data: Prospect | null | undefined;
        meta: {
          totalResults: number;
          currentPage: number;
          perPage: number;
          nextPageUrl: string;
          prevPageUrl: string;
        };
      };
}

export interface ProspectListData {
  data:
    | undefined
    | null
    | {
        data: Prospect[] | null | undefined;
        meta: {
          totalResults: number;
          currentPage: number;
          perPage: number;
          nextPageUrl: string;
          prevPageUrl: string;
        };
      };
}

export interface ProspectVariables {
  feedId: string;
  page: number;
  perPage: number;
}

export interface CreateProspectVariables {
  feedId: string;
  url: string;
}

export interface UpdateProspectVariables {
  id: string;
  altText: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  publisher: string;
  state: string;
  title: string;
  topic: string;
}
