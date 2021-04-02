import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

// In order for the {StoreProvider} to be accessible, we need a big old reducer function first
import { StoreProvider } from "./utils/GlobalState";

import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import CoverPage from "./pages/CoverPage";
// import Login from "./pages/Login";

// import socket.io provider
import { SocketProvider } from "./utils/SocketProvider";
// create test id for chat server, eventually snag username from storeProvider
const id = "testificate";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Router> */}
        <>
          <StoreProvider>

          </StoreProvider>
        </>
      {/* </Router> */}
    </ApolloProvider>
  );
}

export default App;
