import { MutationFunction } from '@apollo/client';
import {
  ApproveProspectMutation,
  ApproveProspectMutationVariables,
  useApproveProspectMutation,
} from '../generatedTypes';

export const useApproveProspect = (): MutationFunction<
  ApproveProspectMutation,
  ApproveProspectMutationVariables
> => {
  const [approveProspect] = useApproveProspectMutation();

  return approveProspect;
};
