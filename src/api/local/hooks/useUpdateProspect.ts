import { useUpdateProspectMutation } from '../generatedTypes';

export const useUpdateProspect = () => {
  const [
    updateProspect,
    { loading, error, data },
  ] = useUpdateProspectMutation();

  return { updateProspect, loading, error, data };
};
