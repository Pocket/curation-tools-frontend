import { MutationFunction } from '@apollo/client';
import {
  RemoveProspectMutation,
  RemoveProspectMutationVariables,
  useRemoveProspectMutation,
} from '../generatedTypes';

export const useRemoveProspect = (): MutationFunction<
  RemoveProspectMutation,
  RemoveProspectMutationVariables
> => {
  const [removeProspect] = useRemoveProspectMutation();

  return removeProspect;
};
