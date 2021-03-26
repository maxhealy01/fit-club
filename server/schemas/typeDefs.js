const { gql } = require("apollo-server-express");

// All of this data was lifted from the shop-shop module.
// The only reason it's here is so that the server could start!
const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
	}
	type Auth {
		token: ID
		user: User
	}

	type Query {
		user: User
		me: User
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		updateUser(firstName: String, email: String, password: String): User
	}
`;

module.exports = typeDefs;
