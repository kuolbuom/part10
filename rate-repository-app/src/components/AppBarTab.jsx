import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    paddingTop: 70,
    paddingBottom: 22,
    paddingLeft: 16,
  },
});

const AppBarTab = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Link to="/" style={styles.tab}>
        <Text
          color="textWhite"
          fontWeight="bold"
          fontSize="subheading"
          fontFamily="Arial"
        >
          Repositories
        </Text>
      </Link>

      <Link to="/signin" style={styles.tab}>
        <Text
          color="textWhite"
          fontWeight="bold"
          fontSize="subheading"
          fontFamily="Arial"
        >
          Sign In
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
