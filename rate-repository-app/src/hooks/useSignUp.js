import { useMutation } from "@apollo/client/react";
import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [createUser] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    const result = await createUser({
      variables: {
        user: {
          username,
          password,
        },
      },
    });

    return result;
  };

  return [signUp];
};

export default useSignUp;
