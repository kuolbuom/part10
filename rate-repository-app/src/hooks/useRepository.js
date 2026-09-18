import { useQuery } from "@apollo/client/react";
import { REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, loading, error, fetchMore } = useQuery(REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      repositoryId: id,
      first: 2,
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
    fetchMore,
  };
};
export default useRepository;
