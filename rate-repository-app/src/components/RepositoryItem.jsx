import { View } from "react-native";
import styles from "./styles";
import RepositoryInfo from "./RepositoryInfo";
import Statistics from "./Statistics";

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      {/* Repository information */}
      <RepositoryInfo item={item} />
      {/* Statistics */}
      <Statistics item={item} />
    </View>
  );
};

export default RepositoryItem;
