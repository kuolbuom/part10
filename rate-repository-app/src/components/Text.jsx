import { Text as NativeText, StyleSheet } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },

  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },

  colorPrimary: {
    color: theme.colors.primary,
  },

  colorTextWhite: {
    color: theme.colors.textWhite,
  },

  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },

  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },

  fontFamilyArial: {
    fontFamily: theme.fonts.fontAlt,
  },
});

const Text = ({ color, fontSize, fontWeight, style, fontFamily, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "textWhite" && styles.colorTextWhite,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    fontFamily === "Arial" && styles.fontFamilyArial,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
