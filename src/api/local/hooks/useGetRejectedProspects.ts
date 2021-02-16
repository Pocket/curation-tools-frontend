import {
  ProspectVariables,
  ProspectListData,
  ApiCallStates,
} from '../../../models';
import {
  GetRejectedProspectsQueryVariables,
  useGetRejectedProspectsQuery,
} from '../generatedTypes';
import { getPageUrls } from '../utils';

export const useGetRejectedProspects = (
  vars: ProspectVariables
): ApiCallStates & ProspectListData => {
  const pageNumber = vars.page > 0 ? vars.page - 1 : 0;
  const variables = {
    ...vars,
    page: pageNumber,
  } as GetRejectedProspectsQueryVariables;

  const { loading, error, data: result } = useGetRejectedProspectsQuery({
    variables,
  });

  let data: any;

  if (result) {
    const totalResults = result.totals?.length ?? 0;

    const { nextPageUrl, prevPageUrl } = getPageUrls(
      vars.page,
      vars.perPage,
      totalResults,
      'prospects/rejected',
      'prospects/rejected'
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
