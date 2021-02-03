import { useApproveProspectMutation } from '../generatedTypes';

export const useApproveProspect = () => {
  const [
    approveProspect,
    { loading, error, data },
  ] = useApproveProspectMutation();

  return { approveProspect, loading, error, data };
};
