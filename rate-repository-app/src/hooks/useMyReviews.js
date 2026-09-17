import { useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";

export const useMyReviews = () => {
  const { data, loading, error, refetch } = useQuery(ME, {
    variables: {
      includeReviews: true,
    },
  });

  const reviews = data?.me?.reviews?.edges?.map((edge) => edge.node) ?? [];

  return {
    reviews,
    loading,
    error,
    refetch,
  };
};
