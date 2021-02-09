import {
  ProspectVariables,
  ProspectListData,
  ApiCallStates,
} from '../../../models';
import {
  GetSnoozedProspectsQueryVariables,
  useGetSnoozedProspectsQuery,
} from '../generatedTypes';

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
    data = {
      data: result.allProspects,
      meta: {
        totalResults: result.totals?.length,
        currentPage: variables.page,
        perPage: variables.perPage,
        nextPageUrl: '',
        prevPageUrl: '',
      },
    };
  }
  return { loading, error, data };
};
