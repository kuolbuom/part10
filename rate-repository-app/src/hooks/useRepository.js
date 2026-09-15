import { useQuery } from "@apollo/client/react";
import { REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, loading, error } = useQuery(REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      repositoryId: id,
    },
  });

  const repository = data?.repository;

  const reviews = repository?.reviews?.edges.map((edge) => edge.node) ?? [];

  console.log("useRepository - data:", data);

  return {
    repository,
    reviews,
    loading,
    error,
  };
};
export default useRepository;
