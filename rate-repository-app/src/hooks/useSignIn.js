import { useMutation, useApolloClient } from "@apollo/client/react";
import { AUTHENTICATE } from "../graphql/mutations";

import AuthStorage from "../utils/authStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const authStorage = new AuthStorage();

  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const data = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });

    // Save accessToken in AsyncStorage
    await authStorage.setAccessToken(data.authenticate.accessToken);

    //Reset Apollo cache
    await apolloClient.resetStore();

    return data;
  };

  return [signIn, result];
};

export default useSignIn;
