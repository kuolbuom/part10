import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({
  orderBy = "CREATED_AT",
  orderDirection = "DESC",
  searchKeyword,
} = {}) => {
  const { data, loading, error, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      variables: {
        orderBy,
        orderDirection,
        searchKeyword,
      },
      fetchPolicy: "cache-and-network",
    },
  );
  console.log("useRepositories - data:", data);
  const repositoriesNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  const handleFetchMore = () => {
    console.log("End of the list reached");

    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      console.log("No more repositories to fetch");
      return;
    }
    console.log("Fetching more repositories...");

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy,
        orderDirection,
        searchKeyword,
      },
    });
  };

  return {
    repositoriesNodes,
    loading,
    error,
    handleFetchMore,
    ...result,
  };
};

export default useRepositories;
