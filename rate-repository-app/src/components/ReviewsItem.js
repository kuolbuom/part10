import { Alert, Pressable, View, Text } from "react-native";
import { useNavigate } from "react-router-native";
import styles from "./styles";
import { useMutation } from "@apollo/client/react";
import { DELETE_REVIEW } from "../graphql/mutations";

const ReviewsItem = ({ review, refetch }) => {
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const navigate = useNavigate();

  const handleViewRepository = () => {
    navigate(`/repository/${review.repository.id}`);
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await deleteReview({
              variables: {
                id: review.id,
              },
            });

            await refetch();
          },
        },
      ],
    );
  };

  return (
    <View style={styles.reviewContainer}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.ratingCircle}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>

        <View style={styles.reviewContent}>
          <Text style={styles.username}>
            {review.repository?.fullName ?? review.user?.username ?? "You"}
          </Text>
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

      <View style={styles.actions}>
        <Pressable
          style={styles.viewActionButton}
          onPress={handleViewRepository}
        >
          <Text style={styles.actionButtonText}>View repository</Text>
        </Pressable>

        <Pressable style={styles.deleteActionButton} onPress={handleDelete}>
          <Text style={styles.actionButtonText}>Delete review</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReviewsItem;
