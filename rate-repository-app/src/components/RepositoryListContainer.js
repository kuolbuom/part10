import { FlatList, View, StyleSheet, Pressable, TextInput } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigate } from "react-router-native";
import theme from "./theme";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import useDebounce from "../hooks/useDebounce";
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
  searchInput: {
    flex: 1,
    color: theme.colors.textPrimary,
    fontSize: 22,
    paddingHorizontal: theme.spacing.small,
  },
  searchBar: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f0eafa",
    borderRadius: 52,
    height: 100,
    marginHorizontal: 22,
    marginTop: 26,
    marginBottom: 18,
    paddingHorizontal: 22,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
  },
  clearButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    width: 48,
  },
  clearIcon: {
    color: "#514d5b",
    fontSize: 38,
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
  const [searchKeyword, setSearchKeyword] = useState("");
  const debouncedSearchKeyword = useDebounce(searchKeyword, 500);
  const { repositoriesNodes, loading, error } = useRepositories({
    ...sortingOptions[sort],
    searchKeyword: debouncedSearchKeyword,
  });

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
          <View style={styles.searchBar}>
            <MaterialIcons name="search" size={36} color="#514d5b" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search repositories"
              placeholderTextColor={theme.colors.textSecondary}
              value={searchKeyword}
              onChangeText={setSearchKeyword}
            />
            <Pressable
              style={styles.clearButton}
              onPress={() => setSearchKeyword("")}
              accessibilityLabel="Clear search"
            >
              <Text style={styles.clearIcon}>×</Text>
            </Pressable>
          </View>
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
