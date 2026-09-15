import { StyleSheet, View, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    paddingTop: 70,
    paddingBottom: 22,
    paddingLeft: 16,
  },
});

const AppBarTab = ({ text, to, onPress }) => {
  if (onPress) {
    return (
      <Pressable onPress={onPress} style={styles.tab}>
        <Text
          color="textWhite"
          fontWeight="bold"
          fontSize="subheading"
          fontFamily="Arial"
        >
          {text}
        </Text>
      </Pressable>
    );
  }

  return (
    <Link to={to} style={styles.tab}>
      <Text
        color="textWhite"
        fontWeight="bold"
        fontSize="subheading"
        fontFamily="Arial"
      >
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
