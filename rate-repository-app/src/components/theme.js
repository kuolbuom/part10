import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    appBarBackground: "#24292e",
    textWhite: "#ffffff",
    mainBackground: "#e1e4e8",
    itemsBackground: "white",
    languageBackground: "#0366d6",
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },

  fontSizes: {
    body: 14,
    subheading: 25,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
    fontAlt: "Arial",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
