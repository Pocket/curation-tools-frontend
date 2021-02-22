import { useRejectProspectMutation } from '../generatedTypes';

export const useRejectProspect = () => {
  const [
    rejectProspect,
    { loading, error, data },
  ] = useRejectProspectMutation();

  return { rejectProspect, loading, error, data };
};
