import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";
import theme from "./theme";

import useSignOut from "../hooks/useSignOut";

import { useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
});

const AppBar = () => {
  const { data, error } = useQuery(ME);
  console.log("ME DATA:", data);
  console.log("ME ERROR:", error);
  const signOut = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" to="/" />

        {data?.me ? (
          <AppBarTab text="Sign out" onPress={signOut} />
        ) : (
          <AppBarTab text="Sign in" to="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
