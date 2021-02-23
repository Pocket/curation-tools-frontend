import { DocumentNode } from '@apollo/client';
import { RECORDS_ON_PAGE } from '../../constants';
import { getPendingProspects } from './queries/getPendingProspects';
import { getSnoozedProspects } from './queries/getSnoozedProspects';
import { getApprovedProspects } from './queries/getApprovedProspects';
import { getRejectedProspects } from './queries/getRejectedProspects';
import { Prospect } from '../../models';

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

interface RefetchOptions {
  query: DocumentNode;
  variables: { feedId: string; page: number; perPage: number };
}
/**
 * This function returns a couple of helper variables that define what queries
 * need refetching after a mutation on the frontend has run successfully
 * (i.e., a user rejected a prospect)
 */
const getRefetchParams = (
  feedId: string,
  currentState: string,
  futureState: string
): RefetchOptions[] => {
  const variables = {
    feedId,
    page: 0,
    perPage: RECORDS_ON_PAGE,
  };

  const refetchQueries: RefetchOptions[] = [];

  if (currentState === 'PENDING') {
    refetchQueries.push({
      query: getPendingProspects,
      variables,
    });
  }

  if (currentState === 'SNOOZED' || futureState === 'SNOOZED') {
    refetchQueries.push({
      query: getSnoozedProspects,
      variables,
    });
  }

  if (currentState === 'REJECTED' || futureState === 'REJECTED') {
    refetchQueries.push({
      query: getRejectedProspects,
      variables,
    });
  }

  if (currentState === 'APPROVED' || futureState === 'APPROVED') {
    refetchQueries.push({
      query: getApprovedProspects,
      variables,
    });
  }

  return refetchQueries;
};

export const getMutationOptions = (prospect: Prospect, futureState: string) => {
  return {
    variables: { id: prospect.id },
    refetchQueries: getRefetchParams(
      prospect.feedId,
      prospect.state,
      futureState
    ),
  };
};
