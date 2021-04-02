import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
// In order for the {StoreProvider} to be accessible, we need a big old reducer function first
// import { StoreProvider } from "./utils/GlobalState";

// Components/ pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import CoverPage from "./pages/CoverPage";
import Classes from "./pages/Classes";
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

	const pages = ['home', 'Classes', 'Activity', 'Trainers', 'MyProfile', 'Info'];

	const navLinks = pages.map(page => {
		return (
		  <a href={'/' + page}>
			{page}
		  </a>
		)
	  });

	return (
		<ApolloProvider client={client}>
			<Router>
				<Navbar>{navLinks}</Navbar>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/Classes" component={Classes} />
						{/* <Route exact path="/Activity" component={Activity} /> */}
						{/* <Route exact path="/MyProfile" component={MyProfile} /> */}
						{/* <Route exact path="/Info" component={Info} /> */}
						<Route exact path="/Signup" component={Signup} />
	

					</Switch>
				</div>
					<CoverPage />
					{/* <Signup /> */}
					{/* <ChatBox /> */}
			</Router>
		</ApolloProvider>
	);
}

export default App;
