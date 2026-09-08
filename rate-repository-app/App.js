import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloClient";
import { ApolloProvider } from "@apollo/client/react";

const apolloClient = createApolloClient();

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
}
