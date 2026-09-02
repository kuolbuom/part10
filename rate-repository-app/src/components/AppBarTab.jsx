import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    paddingTop: 30,
    paddingBottom: 16,
  },
});

const AppBarTab = () => {
  return (
    <Pressable style={styles.tab}>
      <Text
        color="textWhite"
        fontWeight="bold"
        fontSize="subheading"
        fontFamily="Arial"
      >
        Repositories
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
