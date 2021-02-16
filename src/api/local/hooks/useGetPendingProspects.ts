import {
  ProspectVariables,
  ProspectListData,
  ApiCallStates,
  ApolloFetchMoreType,
} from '../../../models';
import {
  GetPendingProspectsQueryVariables,
  useGetPendingProspectsQuery,
} from '../generatedTypes';
import { getPageUrls } from '../utils';

interface PendingProspectsData extends ApiCallStates, ProspectListData {
  /**
   * A helper Apollo function that fetches paginated data
   */
  fetchMore: ApolloFetchMoreType<ProspectListData, ProspectVariables>;
}

export const useGetPendingProspects = (
  vars: ProspectVariables
): PendingProspectsData => {
  const pageNumber = vars.page > 0 ? vars.page - 1 : 0;
  const variables = {
    ...vars,
    page: pageNumber,
  } as GetPendingProspectsQueryVariables;

  const {
    loading,
    error,
    data: result,
    fetchMore,
  } = useGetPendingProspectsQuery({
    variables,
  });

  // Construct an API response.
  let data: any;
  if (result) {
    const totalResults = result.totals?.length ?? 0;

    const { nextPageUrl, prevPageUrl } = getPageUrls(
      vars.page,
      vars.perPage,
      totalResults,
      'prospects',
      'prospects'
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
  return { loading, error, data, fetchMore };
};
