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
  // adjust variables
  const variables = {
    feedId: vars.feedId,
    limit: vars.perPage,
  };

  const { loading, error, data: result } = useGetPendingProspectsQuery({
    query: getPendingProspects,
    variables,
  });

  let data: any;

  if (result) {
    data = {
      data: result.listProspects?.items,
      meta: {
        totalResults: result.listProspects?.items?.length,
        currentPage: vars.page,
        perPage: vars.perPage,
        nextPageUrl: '',
        prevPageUrl: '',
      },
    };
  }

  return { loading, error, data };
};
