import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import theme from "./theme";

const SignInForm = ({ styles, formik, getInputBorderColor }) => {
  return (
    <View>
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

export default SignInForm;
