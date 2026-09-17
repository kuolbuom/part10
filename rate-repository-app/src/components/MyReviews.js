import React from "react";
import { FlatList, Text } from "react-native";

import { useMyReviews } from "../hooks/useMyReviews";
import ReviewsItem from "./ReviewsItem";

const MyReviews = () => {
  const { reviews, loading, error, refetch } = useMyReviews();

  // Show loading message while reviews are being fetched
  if (loading) {
    return <Text>Loading...</Text>;
  }

  // Show the GraphQL error if something goes wrong
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  // Display the user's reviews
  return (
    <FlatList
      data={reviews}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReviewsItem review={item} refetch={refetch} />}
    />
  );
};

export default MyReviews;
