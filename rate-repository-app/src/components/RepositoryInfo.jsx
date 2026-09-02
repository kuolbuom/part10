import { View, Image } from "react-native";
import Text from "./Text";
import styles from "./styles";

const RepositoryInfo = ({ item }) => {
  return (
    <View>
      <View style={styles.repositoryInfo}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />

        <View style={styles.details}>
          <Text style={styles.fullName}>{item.fullName}</Text>

          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.languageContainer}>
            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RepositoryInfo;
