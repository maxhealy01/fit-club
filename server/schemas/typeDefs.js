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
		time: String!
		duration: String
		equipment: String
		activity: Activity
		participants: [User]
		postedBy: User
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
		messages: [Message]
		isTrainer: Boolean
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

  type Query {
    user: User
    me: User
    activities: [Activity]
    meetups: [Meetup]
    testimonials: [Testimonial]
    users: [User]
  }

<<<<<<< HEAD
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
=======
	type Query {
		me: User
		trainers: [User]
		users: [User]
		user(username: String): User
		activities: [Activity]
		meetups(activity: ID): [Meetup]
		testimonials: [Testimonial]
		workouts: [Workout]
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		addTrainer(username: String!, email: String!, password: String!): Auth
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
		postWorkout(
			name: String!
			source: String
			duration: String
			equipment: String
			activity: ID
		): Workout
		# The following mutations don't create new objects, but instead add existing objects to the User object
		addFriend(friendId: ID!): User
		createConversation(recipients: [ID], text: String!): User
	}
>>>>>>> develop
`;

module.exports = typeDefs;
