import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

// In order for the {StoreProvider} to be accessible, we need a big old reducer function first
import { StoreProvider } from "./utils/GlobalState";
import Auth from "./utils/auth";

// App Styles (Do Not Delete This!!)
import "./assets/scss/app.scss";

// pages
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Workout from "./pages/Workout";
import Profile from "./pages/Profile";
import RegisterForm from "./pages/Register";

// components
import ChatBox from "./components/ChatBox";
import Navbar from "./components/Navbar";
import CoverPage from "./pages/CoverPage";
import Footer from "./components/Footer";

console.log(Auth.loggedIn());

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "http://localhost:3001/graphql",
});

function App() {
  const pages = ["home", "Classes", "Workout", "Profile"];

  const navLinks = pages.map((page) => {
    return <a href={"/" + page}>{page}</a>;
  });

  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Router>
          <Navbar>{navLinks}</Navbar>
          <div>
            <Switch>
              <Route exact path="/Classes" component={Classes} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/Workout" component={Workout} />
              <Route exact path="/Register" component={SignupForm} />
              <Route
                exact
                path="/"
                component={!Auth.loggedIn() ? CoverPage : Home}
              />
              <Route
                exact
                path="/"
                component={!Auth.loggedIn() ? CoverPage : ChatBox}
              />
              <Route
                exact
                path="/"
                component={!Auth.loggedIn() ? CoverPage : Footer}
              />
            </Switch>
          </div>
        </Router>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
