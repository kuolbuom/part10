import { View, Text } from "react-native";
import styles from "./styles";

const ReviewsItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingCircle}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>

      <View style={styles.reviewContent}>
        <Text style={styles.username}>{review.user.username}</Text>
        <Text style={styles.date}>
          {new Date(review.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Text>

        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewsItem;
