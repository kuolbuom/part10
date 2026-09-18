import { useParams } from "react-router-native";
import { View, Text, FlatList } from "react-native";

import RepositoryItem from "../RepositoryItem";
import useRepository from "../../hooks/useRepository";
import ReviewsItem from "../ReviewsItem";

const Repository = () => {
  const { id } = useParams();

  const { repository, loading, error, fetchMore } = useRepository(id);

  console.log("Repository screen id:", id);
  console.log("Repository screen data:", repository);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  // Get the review objects from the GraphQL edges
  const reviews = repository.reviews.edges.map((edge) => edge.node);

  const handleEndReached = () => {
    console.log("END REACHED");
    console.log("hasNextPage:", repository.reviews.pageInfo.hasNextPage);

    console.log("endCursor:", repository.reviews.pageInfo.endCursor);

    if (!repository.reviews.pageInfo.hasNextPage) {
      console.log("NO MORE REVIEWS");
      return;
    }

    console.log("FETCHING MORE REVIEWS");

    fetchMore({
      variables: {
        first: 2,
        after: repository.reviews.pageInfo.endCursor,
      },
    });
  };

  const ItemSeparator = () => <View style={{ height: 10 }} />;

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewsItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} showGitHubButton={true} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={handleEndReached}
    />
  );
};

export default Repository;
