import { MutationFunction } from '@apollo/client';
import {
  UpdateProspectMutation,
  UpdateProspectMutationVariables,
  useUpdateProspectMutation,
} from '../generatedTypes';

export const useUpdateProspect = (): MutationFunction<
  UpdateProspectMutation,
  UpdateProspectMutationVariables
> => {
  const [updateProspect] = useUpdateProspectMutation();

  return updateProspect;
};
