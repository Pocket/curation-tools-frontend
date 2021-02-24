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

/**
 * This method adds a list of queries to be refetched from the local API
 * to a mutation function alongside other options, such as variables
 * to pass to the API.
 *
 * Note that this is a 'nuclear' option that is only used here because another
 * request to the local API costs nothing and the re-render is almost seamless.
 *
 * For production environments, the 'update' function should be used instead
 * to modify the queries cached by Apollo.
 */
export const getMutationOptions = (prospect: Prospect, futureState: string) => {
  return {
    refetchQueries: getRefetchParams(
      prospect.feedId,
      prospect.state,
      futureState
    ),
  };
};

interface RefetchOptions {
  query: DocumentNode;
  variables: { feedId: string; page: number; perPage: number };
}
/**
 * Determine which queries need to be refetched from the local API based on the state
 * of the prospect that's been updated.
 *
 * For example, if a pending prospect is snoozed, refresh both the query behind
 * the "Pending" tab and the one behind the "Snoozed" tab so that the tabs re-render
 * and the updated prospect moves from one tab to another.
 */
const getRefetchParams = (
  feedId: string,
  currentState: string,
  futureState: string
): RefetchOptions[] => {
  const variables = {
    feedId,
    // TODO: update this once queries are merged locally
    // at the moment all queries are fetched separately for each page which is NQR.
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
