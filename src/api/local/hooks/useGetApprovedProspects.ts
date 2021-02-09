import {
  ProspectVariables,
  ProspectListData,
  ApiCallStates,
} from '../../../models';
import {
  GetApprovedProspectsQueryVariables,
  useGetApprovedProspectsQuery,
} from '../generatedTypes';

export const useGetApprovedProspects = (
  vars: ProspectVariables
): ApiCallStates & ProspectListData => {
  const pageNumber = vars.page > 0 ? vars.page - 1 : 0;
  const variables = {
    ...vars,
    page: pageNumber,
  } as GetApprovedProspectsQueryVariables;

  const { loading, error, data: result } = useGetApprovedProspectsQuery({
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
