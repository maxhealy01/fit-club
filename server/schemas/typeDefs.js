const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Activity {
		_id: ID
		name: String
		type: String
	}
	type Goal {
		_id: ID
		name: String
		metric: String
	}
	type Meetup {
		_id: ID
		name: String
		location: String
		time: String
		duration: String
		equipment: String
		activity: Activity
		participants: [User]
		trainer: User
	}
	type User {
		_id: ID
		username: String
		email: String
		city: String
		friends: [User]
		goals: [Goal]
		meetups: [Meetup]
		activities: [Activity]
		testimonials: [Testimonial]
	}
	type Testimonial {
		_id: ID
		postedBy: User
		text: String
	}
	type Workout {
		name: String
		source: String
		duration: String
		equipment: String
		activity: Activity
		postedBy: User
	}
	type Message {
		message: String
		recipients: [User]

	}
	type Auth {
		token: ID
		user: User
	}

	type Query {
		user: User
		me: User
		activities: [Activity]
		meetups: [Meetup]
		testimonials: [Testimonial]
		users: [User]
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		updateUser(username: String, email: String, password: String): User
		createActivity(name: String!, type: String!): Activity
		postMeetup(
			name: String!
			location: String!
			time: String!
			duration: String!
			equipment: String
			activity: ID
			trainer: ID
		): Meetup
		postTestimonial(text: String!): Testimonial
		createConversation(recipients: [ID], text: String!): User
	}
`;

module.exports = typeDefs;
