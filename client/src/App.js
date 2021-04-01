import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
// In order for the {StoreProvider} to be accessible, we need a big old reducer function first
// import { StoreProvider } from "./utils/GlobalState";

// Components/ pages
import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import CoverPage from "./pages/CoverPage";
import Signup from "./pages/Signup";

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
			<Router>
				<Navbar />
				<div>
					<Switch>
						{/* <Route exact path="/" component={Home} /> */}
						{/* <Route exact path="/Classes" component={Classes} /> */}
						{/* <Route exact path="/MyProfile" component={MyProfile} /> */}
						{/* <Route exact path="/MyProfile" component={MyProfile} /> */}
						{/* <Route exact path="/signup" component={Signup} /> */}
						
						{/* <Route exact path="/profile" component={Profile} /> */}
					</Switch>
				</div>
					<Route exact path="/ChatBox" component={ChatBox} />
					<CoverPage />
					<Signup />
			</Router>
		</ApolloProvider>
	);
}

export default App;
