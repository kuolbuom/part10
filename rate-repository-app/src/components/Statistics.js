import { View } from "react-native";
import Text from "./Text";
import styles from "./styles";

const Statistics = ({ item }) => {
  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }

    return count;
  };

  return (
    <View>
      <View style={styles.statistics}>
        <View style={styles.statistic}>
          <Text style={styles.statisticValue}>
            {formatCount(item.stargazersCount)}
          </Text>
          <Text style={styles.statisticLabel}>Stars</Text>
        </View>

        <View style={styles.statistic}>
          <Text style={styles.statisticValue}>
            {formatCount(item.forksCount)}
          </Text>
          <Text style={styles.statisticLabel}>Forks</Text>
        </View>

        <View style={styles.statistic}>
          <Text style={styles.statisticValue}>
            {formatCount(item.reviewCount)}
          </Text>
          <Text style={styles.statisticLabel}>Reviews</Text>
        </View>

        <View style={styles.statistic}>
          <Text style={styles.statisticValue}>
            {formatCount(item.ratingAverage)}
          </Text>
          <Text style={styles.statisticLabel}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default Statistics;
