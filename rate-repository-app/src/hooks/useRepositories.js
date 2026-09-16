import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({
  orderBy = "CREATED_AT",
  orderDirection = "DESC",
  searchKeyword,
} = {}) => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy,
      orderDirection,
      searchKeyword,
    },
    fetchPolicy: "cache-and-network",
  });
  console.log("useRepositories - data:", data);
  const repositoriesNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  return {
    repositoriesNodes,
    loading,
    error,
  };
};

export default useRepositories;
