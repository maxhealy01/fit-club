const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		city: String
		friends: [User]
		meetups: [Meetup]
		activities: [Activity]
		testimonials: [Testimonial]
		messages: [Message]
		isTrainer: Boolean
		goals:[Goal]
	}

	type Activity {
		_id: ID
		name: String
		type: String
	}

	type Meetup {
		_id: ID
		name: String
		location: String
		time: String!
		duration: String
		equipment: String
		activity: Activity
		participants: [User]
		postedBy: User
		trainer: User
	}

	type Testimonial {
		_id: ID
		text: String
		postedBy: ID
	}

	type Workout {
		_id: ID
		name: String!
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

	type Goal {
		_id: ID
		goalType: String
		startDate: String
		endDate: String
		endValue: Int
		createdAt: String
		username: String
		progressData: [ProgressData]
	}

	type ProgressData {
		_id: ID
		date: String
		value: Int
		createdAt: String
	  }

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		me: User
		trainers: [User]
		users: [User]
		user(username: String): User
		activities: [Activity]
		meetups(activity: ID): [Meetup]
		testimonials(postedBy: ID): [Testimonial]
		workouts(activity: ID): [Workout]
		goals (username: String): [Goal]
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		addTrainer(username: String!, email: String!, password: String!): Auth
		updateUser(username: String, email: String, password: String): User
		createActivity(name: String!, type: String!): Activity

		addGoal(goalType: String!, startDate: String, endDate: String!, endValue: Int!): Goal
		addProgressData(goalId: ID!, date: String, value: Int!): Goal

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
		postWorkout(
			name: String!
			source: String
			duration: String
			equipment: String
			activity: ID
		): Workout
		#The following mutations don't create new objects, but instead add existing objects to the User object
		addFriend(friendId: ID!): User
		addMeetup(meetupId: ID!): User
		addActivity(activityId: ID!): User
		createConversation(recipients: [ID], text: String!): User
	}
`;

module.exports = typeDefs;
