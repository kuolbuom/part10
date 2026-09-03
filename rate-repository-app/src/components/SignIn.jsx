import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import theme from "./theme";

import Text from "./Text";

const initialValues = {
  username: "",
  password: "",
};

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
    fontFamily: theme.fonts.fontAlt,
  },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log("formik values:", values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
