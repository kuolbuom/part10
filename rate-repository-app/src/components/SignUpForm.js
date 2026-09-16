import { Formik } from "formik";
import { View, TextInput, Pressable, Text } from "react-native";
import * as yup from "yup";
import theme from "./theme";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be at least 5 characters")
    .max(30, "Username must be at most 30 characters"),

  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password must be at most 50 characters"),

  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
});

const SignUpForm = ({ onSubmit, styles, getInputBorderColor }) => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: getInputBorderColor("username", touched, errors),
              },
            ]}
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
          />

          {touched.username && errors.username && (
            <Text
              style={{ color: "#d73a4a", marginBottom: theme.spacing.medium }}
            >
              {errors.username}
            </Text>
          )}

          <TextInput
            style={[
              styles.input,
              {
                borderColor: getInputBorderColor("password", touched, errors),
              },
            ]}
            placeholder="Password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />

          {touched.password && errors.password && (
            <Text
              style={{ color: "#d73a4a", marginBottom: theme.spacing.medium }}
            >
              {errors.password}
            </Text>
          )}

          <TextInput
            style={[
              styles.input,
              {
                borderColor: getInputBorderColor(
                  "passwordConfirmation",
                  touched,
                  errors,
                ),
              },
            ]}
            placeholder="Password confirmation"
            secureTextEntry
            value={values.passwordConfirmation}
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
          />

          {touched.passwordConfirmation && errors.passwordConfirmation && (
            <Text
              style={{ color: "#d73a4a", marginBottom: theme.spacing.medium }}
            >
              {errors.passwordConfirmation}
            </Text>
          )}

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
