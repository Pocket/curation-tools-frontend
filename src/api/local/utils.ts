import { DocumentNode } from '@apollo/client';
import { RECORDS_ON_PAGE } from '../../constants';
import { getPendingProspects } from './queries/getPendingProspects';
import { getSnoozedProspects } from './queries/getSnoozedProspects';
import { getApprovedProspects } from './queries/getApprovedProspects';
import { getRejectedProspects } from './queries/getRejectedProspects';

/**
 * A helper function that returns a set of next & previous page URLs
 * for a given API call.
 */
export const getPageUrls = (
  currentPage: number,
  perPage: number,
  totalResults: number,
  feedId: string,
  pathname: string
): { nextPageUrl: string; prevPageUrl: string } => {
  let nextPageUrl = '';
  let prevPageUrl = '';

  // TODO: add feed name to URL (need another query to get feed name by the ID supplied
  const feed = 'en-US';

  // calculate the number of pages
  const pageCount = Math.ceil(totalResults / perPage);

  // is there a previous page?
  if (currentPage === 2) {
    prevPageUrl = `/${feed}/${pathname}/`;
  } else if (currentPage > 2 && currentPage <= pageCount) {
    prevPageUrl = `/${feed}/${pathname}/?page=${currentPage - 1}`;
  }

  // is there a next page?
  if (currentPage < pageCount) {
    nextPageUrl = `/${feed}/${pathname}/?page=${currentPage + 1}`;
  }

  return { nextPageUrl, prevPageUrl };
};

/**
 * This function returns a couple of helper variables that define what queries
 * need refetching after a mutation on the frontend has run successfully
 * (i.e., a user rejected a prospect)
 */

export const getRefetchParams = (
  feedId: string
): {
  query: DocumentNode;
  variables: { feedId: string; page: number; perPage: number };
}[] => {
  const queryVariables = {
    feedId,
    page: 0,
    perPage: RECORDS_ON_PAGE,
  };

  const refetchQueries = [
    {
      query: getPendingProspects,
      variables: queryVariables,
    },
    {
      query: getSnoozedProspects,
      variables: queryVariables,
    },
    {
      query: getApprovedProspects,
      variables: queryVariables,
    },
    {
      query: getRejectedProspects,
      variables: queryVariables,
    },
  ];

  return refetchQueries;
};
