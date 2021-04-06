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

  const variables = {
    ...vars,
    page: pageNumber,
  } as GetSnoozedProspectsQueryVariables;

  const { loading, error, data: result } = useGetSnoozedProspectsQuery({
    variables,
    fetchPolicy: 'cache-first',
  });

  let data: any;

  if (result) {
    const totalResults = result.totals?.length ?? 0;

    const { nextPageUrl, prevPageUrl } = getPageUrls(
      vars.page,
      vars.perPage,
      totalResults,
      '',
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
