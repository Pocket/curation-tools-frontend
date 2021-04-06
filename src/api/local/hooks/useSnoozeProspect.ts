import { MutationFunction } from '@apollo/client';
import {
  SnoozeProspectMutation,
  SnoozeProspectMutationVariables,
  useSnoozeProspectMutation,
} from '../generatedTypes';

export const useSnoozeProspect = (): MutationFunction<
  SnoozeProspectMutation,
  SnoozeProspectMutationVariables
> => {
  const [snoozeProspect] = useSnoozeProspectMutation();

  return snoozeProspect;
};
