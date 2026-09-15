import { View, Pressable, Text } from "react-native";

import * as Linking from "expo-linking";

import RepositoryInfo from "./RepositoryInfo";
import Statistics from "./Statistics";
import styles from "./styles";

const RepositoryItem = ({ item, showGitHubButton = false }) => {
  console.log("RepositoryItem:", item);
  console.log("showGitHubButton:", showGitHubButton);
  return (
    <View testID="repositoryItem" style={styles.container}>
      <RepositoryInfo item={item} />

      <Statistics item={item} />

      {showGitHubButton && (
        <Pressable
          style={styles.githubButton}
          onPress={() => Linking.openURL(item.url)}
        >
          <Text style={styles.githubButtonText}>Open in GitHub</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
