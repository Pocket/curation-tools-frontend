import { client } from '../client';
import {
  ProspectVariables,
  ProspectListData,
  ApiCallStates,
} from '../../../models';
import { useGetPendingProspectsQuery } from '../generatedTypes';
import { getPendingProspects } from '../queries/getPendingProspects';

export const useGetPendingProspects = (
  vars: ProspectVariables
): ApiCallStates & ProspectListData => {
  const pageNumber = vars.page > 0 ? vars.page - 1 : 0;
  const variables = { ...vars, page: pageNumber };

  const { loading, error, data: result } = useGetPendingProspectsQuery({
    query: getPendingProspects,
    variables,
    client,
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
