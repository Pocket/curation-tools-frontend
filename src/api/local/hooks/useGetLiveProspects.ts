import {
  ProspectVariables,
  ProspectListData,
  ApiCallStates,
} from '../../../models';
import {
  GetLiveProspectsQueryVariables,
  useGetLiveProspectsQuery,
} from '../generatedTypes';
import { getPageUrls } from '../utils';

export const useGetLiveProspects = (
  vars: ProspectVariables
): ApiCallStates & ProspectListData => {
  const pageNumber = vars.page > 0 ? vars.page - 1 : 0;
  const variables = {
    ...vars,
    page: pageNumber,
  } as GetLiveProspectsQueryVariables;

  const { loading, error, data: result } = useGetLiveProspectsQuery({
    variables,
  });

  let data: any;

  if (result) {
    const totalResults = result.totals?.length ?? 0;

    const { nextPageUrl, prevPageUrl } = getPageUrls(
      vars.page,
      vars.perPage,
      totalResults,
      '',
      'newtab/live'
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
