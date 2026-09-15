import { useQuery } from "@apollo/client/react";
import { REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, loading, error } = useQuery(REPOSITORY, {
    variables: {
      repositoryId: id,
    },
  });

  console.log("useRepository - data:", data);

  return {
    repository: data?.repository,
    loading,
    error,
  };
};
export default useRepository;
