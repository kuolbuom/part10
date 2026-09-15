import { useParams } from "react-router-native";
import { View, Text, FlatList } from "react-native";

import RepositoryItem from "../RepositoryItem";
import useRepository from "../../hooks/useRepository";
import ReviewsItem from "../ReviewsItem";

const Repository = () => {
  const { id } = useParams();

  const { repository, loading, error, reviews } = useRepository(id);

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
    />
  );
};

export default Repository;
