import { View, StyleSheet } from "react-native";
import { useMutation } from "@apollo/client/react";
import { useNavigate } from "react-router-native";

import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "../hooks/useSignIn";
import SignUpForm from "./SignUpForm";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.itemsBackground,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: theme.spacing.medium,
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.small,
  },
  buttonText: {
    color: theme.colors.textWhite,
    fontWeight: theme.fontWeights.bold,
    fontSize: 16,
    fontFamily: theme.fonts.main,
  },
});

const SignUp = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const getInputBorderColor = (fieldName, touched, errors) => {
    return touched[fieldName] && errors[fieldName] ? "red" : "black";
  };

  const onSubmit = async ({ username, password }) => {
    try {
      await createUser({
        variables: {
          user: {
            username,
            password,
          },
        },
      });

      await signIn({ username, password });
      navigate("/");
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <SignUpForm
        onSubmit={onSubmit}
        styles={styles}
        getInputBorderColor={getInputBorderColor}
      />
    </View>
  );
};

export default SignUp;
