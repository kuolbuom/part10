import { StyleSheet } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemsBackground,
    paddingTop: theme.spacing.large,
    paddingBottom: theme.spacing.large,
    marginBottom: theme.spacing.small,
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
});

export default styles;
