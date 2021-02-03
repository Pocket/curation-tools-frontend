import { useCreateProspectByUrlMutation } from '../generatedTypes';

export const useCreateProspectByUrl = () => {
  const [
    createProspect,
    { loading, error, data },
  ] = useCreateProspectByUrlMutation();

  //const id = faker.random.uuid();

  return { createProspect, loading, error, data };
};
