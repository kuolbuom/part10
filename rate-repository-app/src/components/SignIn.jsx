import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";

import * as yup from "yup";

import theme from "./theme";

import Text from "./Text";

import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

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

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log("Sign-in successful:", data);
    } catch (error) {
      console.error("Sign-in error:", error);
    }

    navigate("/");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const getInputBorderColor = (fieldName) => {
    return formik.touched[fieldName] && formik.errors[fieldName]
      ? "red"
      : "black";
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: getInputBorderColor("username"),
          },
        ]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
      />

      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "#d73a4a", marginBottom: theme.spacing.medium }}>
          {formik.errors.username}
        </Text>
      )}

      <TextInput
        style={[
          styles.input,
          {
            borderColor: getInputBorderColor("password"),
          },
        ]}
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />

      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "#d73a4a" }}>{formik.errors.password}</Text>
      )}

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
