const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Activity {
		_id: ID
		name: String!
		type: String!
	}
	type Goal {
		_id: ID
		name: String!
		metric: String!
	}
	type Class {
		_id: ID
		name: String!
		location: String
		time: Date!
		duration: String!
		equipment: String
		activity: Activity!
		participants: [User]!
		trainer: User
	}
	type User {
		_id: ID
		username: String
		email: String
		city: String
		friends: [User]
		goals: [Goal]
		classes: [Class]
		activities: [Activity]
	}
	type Testimonial {
		postedBy: User!
		text: String!
	}
	type Workout {
		name: String!
		source: String
		duration: String!
		equipment: String
		activity: Activity
		postedBy: User!
	}
	type Message {
		message: String!
		sentBy: User!
		receivedBy: User!
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
		updateUser(username: String, email: String, password: String): User
	}
`;

module.exports = typeDefs;
