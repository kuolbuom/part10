import { StyleSheet } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemsBackground,
    paddingTop: theme.spacing.large,
    paddingBottom: theme.spacing.large,
    marginBottom: theme.spacing.small,
  },
  githubButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: theme.spacing.medium,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: theme.spacing.medium,
    marginTop: theme.spacing.medium,
  },
  githubButtonText: {
    color: theme.colors.textWhite,
    fontWeight: theme.fontWeights.bold,
    fontSize: 16,
    fontFamily: theme.fonts.main,
  },
  repositoryInfo: {
    flexDirection: "row",
    paddingHorizontal: theme.spacing.medium,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: theme.spacing.large,
  },

  details: {
    flex: 1,
  },

  fullName: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
    marginBottom: 12,
  },

  description: {
    fontSize: 18,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.medium,
  },

  languageContainer: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.languageBackground,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  language: {
    color: theme.colors.textWhite,
    fontSize: 16,
  },

  statistics: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 32,
    paddingHorizontal: theme.spacing.medium,
  },

  statistic: {
    alignItems: "center",
    flex: 1,
  },

  statisticValue: {
    fontSize: 20,
    fontWeight: theme.fontWeights.bold,
    color: "#24292f",
    marginBottom: 8,
  },

  statisticLabel: {
    fontSize: 18,
    color: "#687078",
  },

  //my-reviews and reviews styles
  reviewContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: theme.spacing.medium,
    paddingTop: theme.spacing.large,
    paddingBottom: theme.spacing.large,
    backgroundColor: theme.colors.itemsBackground,
    borderBottomWidth: 8,
    borderBottomColor: theme.colors.mainBackground,
  },

  ratingCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "#0366d6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.medium,
  },

  ratingText: {
    fontSize: 32,
    color: "#0366d6",
    fontWeight: "bold",
  },

  reviewContent: {
    flex: 1,
  },

  username: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#24292e",
    marginBottom: 3,
  },

  date: {
    fontSize: 21,
    color: "#24292e",
    marginBottom: 15,
  },

  reviewText: {
    fontSize: 21,
    lineHeight: 28,
    color: "#24292e",
  },
});

export default styles;
