import { MutationFunction } from '@apollo/client';
import {
  RejectProspectMutation,
  RejectProspectMutationVariables,
  useRejectProspectMutation,
} from '../generatedTypes';

export const useRejectProspect = (): MutationFunction<
  RejectProspectMutation,
  RejectProspectMutationVariables
> => {
  const [rejectProspect] = useRejectProspectMutation();

  return rejectProspect;
};
