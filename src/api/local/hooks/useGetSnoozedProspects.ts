import {
  ProspectVariables,
  ProspectListData,
  ApiCallStates,
} from '../../../models';
import {
  GetSnoozedProspectsQueryVariables,
  useGetSnoozedProspectsQuery,
} from '../generatedTypes';
import { getPageUrls } from '../utils';

export const useGetSnoozedProspects = (
  vars: ProspectVariables
): ApiCallStates & ProspectListData => {
  const pageNumber = vars.page > 0 ? vars.page - 1 : 0;

  // Get current timestamp to be able to filter prospects
  // to fetch only those entries with 'snoozedUntil' in the future
  const date = new Date();
  const currentTimestamp = Math.floor(+date / 1000);

  const variables = {
    ...vars,
    page: pageNumber,
    currentTimestamp,
  } as GetSnoozedProspectsQueryVariables;

  const { loading, error, data: result } = useGetSnoozedProspectsQuery({
    variables,
  });

  let data: any;

  if (result) {
    const totalResults = result.totals?.length ?? 0;

    const { nextPageUrl, prevPageUrl } = getPageUrls(
      vars.page,
      vars.perPage,
      totalResults,
      'prospects/snoozed',
      'prospects/snoozed'
    );

    data = {
      data: result.allProspects,
      meta: {
        totalResults,
        currentPage: vars.page,
        perPage: vars.perPage,
        nextPageUrl,
        prevPageUrl,
      },
    };
  }
  return { loading, error, data };
};
