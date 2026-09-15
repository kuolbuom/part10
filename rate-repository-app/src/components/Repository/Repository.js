import { useParams } from "react-router-native";
import { View, Text } from "react-native";

import RepositoryItem from "../RepositoryItem";
import useRepository from "../../hooks/useRepository";

const Repository = () => {
  const { id } = useParams();

  const { repository, loading, error } = useRepository(id);

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
  return <RepositoryItem item={repository} showGitHubButton={true} />;
};

export default Repository;
