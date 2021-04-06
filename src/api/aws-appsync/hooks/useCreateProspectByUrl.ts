import { MutationFunction } from '@apollo/client';
import {
  CreateProspectByUrlMutation,
  CreateProspectByUrlMutationVariables,
  useCreateProspectByUrlMutation,
} from '../generatedTypes';

export const useCreateProspectByUrl = (): MutationFunction<
  CreateProspectByUrlMutation,
  CreateProspectByUrlMutationVariables
> => {
  const [createProspect] = useCreateProspectByUrlMutation();

  return createProspect;
};
