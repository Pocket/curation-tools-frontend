import { useSnoozeProspectMutation } from '../generatedTypes';

export const useSnoozeProspect = () => {
  const [
    snoozeProspect,
    { loading, error, data },
  ] = useSnoozeProspectMutation();

  return { snoozeProspect, loading, error, data };
};
