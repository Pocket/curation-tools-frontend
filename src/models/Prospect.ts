export interface Prospect {
  id: string;
  altText: string;
  author: string;
  excerpt: string;
  feedId: string;
  imageUrl: string;
  publisher: string;
  snoozedUntil: string | null;
  source: string;
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

export interface ApproveProspectVariables {
  id: string;
  altText: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  publisher: string;
  title: string;
  topic: string;
}
