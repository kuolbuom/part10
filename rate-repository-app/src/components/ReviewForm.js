import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client/react";
import { useNavigate } from "react-router-native";

import { CREATE_REVIEW } from "../graphql/mutations";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.itemsBackground,
  },
  label: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    marginBottom: theme.spacing.small,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 4,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
  inputError: {
    borderColor: "#d73a4a",
  },
  error: {
    color: "#d73a4a",
    marginTop: -theme.spacing.small,
    marginBottom: theme.spacing.small,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: theme.spacing.medium,
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.textWhite,
    fontWeight: theme.fontWeights.bold,
    fontSize: 16,
  },
});

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner username is required"),

  repositoryName: yup.string().required("Repository name is required"),

  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "Rating must be at least 0")
    .max(100, "Rating must be at most 100"),

  text: yup.string(),
});

const ReviewForm = () => {
  const [createReview] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await createReview({
        variables: {
          review: {
            repositoryName: values.repositoryName,
            ownerName: values.ownerName,
            rating: Number(values.rating),
            text: values.text,
          },
        },
      });

      const repositoryId = response.data.createReview.repositoryId;

      navigate(`/repository/${repositoryId}`);
    } catch (error) {
      console.log("Create review error:", error);
    }
  };

  return (
    <Formik
      initialValues={{
        ownerName: "",
        repositoryName: "",
        rating: "",
        text: "",
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
        <View style={styles.container}>
          <Text style={styles.label}>Repository owner name</Text>

          <TextInput
            style={[
              styles.input,
              touched.ownerName && errors.ownerName && styles.inputError,
            ]}
            placeholder="jaredpalmer"
            value={values.ownerName}
            onChangeText={handleChange("ownerName")}
            onBlur={handleBlur("ownerName")}
          />

          {touched.ownerName && errors.ownerName && (
            <Text style={styles.error}>{errors.ownerName}</Text>
          )}

          <Text style={styles.label}>Repository name</Text>

          <TextInput
            style={[
              styles.input,
              touched.repositoryName &&
                errors.repositoryName &&
                styles.inputError,
            ]}
            placeholder="formik"
            value={values.repositoryName}
            onChangeText={handleChange("repositoryName")}
            onBlur={handleBlur("repositoryName")}
          />

          {touched.repositoryName && errors.repositoryName && (
            <Text style={styles.error}>{errors.repositoryName}</Text>
          )}

          <Text style={styles.label}>Rating</Text>

          <TextInput
            style={[
              styles.input,
              touched.rating && errors.rating && styles.inputError,
            ]}
            placeholder="0-100"
            value={values.rating}
            onChangeText={handleChange("rating")}
            onBlur={handleBlur("rating")}
            keyboardType="numeric"
          />

          {touched.rating && errors.rating && (
            <Text style={styles.error}>{errors.rating}</Text>
          )}

          <Text style={styles.label}>Review</Text>

          <TextInput
            style={[styles.input, { minHeight: 100, textAlignVertical: "top" }]}
            value={values.text}
            onChangeText={handleChange("text")}
            onBlur={handleBlur("text")}
            multiline
          />

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Create review</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default ReviewForm;
