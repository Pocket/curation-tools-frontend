import { useCreateProspectByUrlMutation } from '../generatedTypes';

export const useCreateProspectByUrl = () => {
  const [
    createProspect,
    { loading, error, data },
  ] = useCreateProspectByUrlMutation();

  return { createProspect, loading, error, data };
};
