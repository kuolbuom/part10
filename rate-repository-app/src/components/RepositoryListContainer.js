import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

import { useNavigate } from "react-router-native";
import theme from "./theme";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Text from "./Text";

const styles = StyleSheet.create({
  picker: {
    backgroundColor: theme.colors.mainBackground,
    border: "none",
    padding: 30,
    height: 144,
    width: "100%",
    color: "#000000",
    fontSize: 30,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const sortingOptions = {
  latest: { orderBy: "CREATED_AT", orderDirection: "DESC" },
  highest: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
  lowest: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
};

const RepositoryListContainer = () => {
  const [sort, setSort] = useState("latest");
  const { repositoriesNodes, loading, error } = useRepositories(
    sortingOptions[sort],
  );

  const navigate = useNavigate();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  console.log("Rendering RepositoryList with repositories:", repositoriesNodes);
  return (
    <FlatList
      data={repositoriesNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <View>
          <Picker
            style={styles.picker}
            prompt="Select an item..."
            selectedValue={sort}
            onValueChange={setSort}
          >
            <Picker.Item label="Latest repositories" value="latest" />
            <Picker.Item label="Highest rated repositories" value="highest" />
            <Picker.Item label="Lowest rated repositories" value="lowest" />
          </Picker>
        </View>
      }
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
    />
  );
};

export default RepositoryListContainer;
