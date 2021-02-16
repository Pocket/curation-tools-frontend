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
