const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const {
	Activity,
	Meetup,
	Goal,
	Message,
	Testimonial,
	User,
	Workout,
} = require("../models");

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({}).select("-__v -password");

				return userData;
			}
			throw new AuthenticationError("Not logged in");
		},
		users: async () => {
			return User.find()
				.select("-__v -password")
				.populate("friends")
				.populate("meetups")
				.populate("activities")
				.populate("testimonials");
		},
		user: async (parent, { username }) => {
			return User.findOne({ username })
				.select("-__v -password")
				.populate("friends")
				.populate("meetups")
				.populate("activities")
				.populate("testimonials");
		},
		activities: async () => {
			return Activity.find();
		},
		meetups: async (parent, { id }) => {
			const params = id ? { id } : {};
			return Meetup.find(params);
		},
		testimonials: async () => {
			return Testimonial.find();
		},
		workouts: async () => {
			return Workout.find();
		},
	},
	Mutation: {
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			const token = signToken(user);

			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}
			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			return { token, user };
		},
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		createActivity: async (parent, args) => {
			const activity = await Activity.create(args);

			return activity;
		},
		postMeetup: async (parent, args, context) => {
			console.log(args);
			if (context.user) {
				const meetup = await Meetup.create({
					...args,
					postedBy: context.user._id,
				});
				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $push: { meetups: meetup } },
					{ new: true }
				);

				return meetup;
			}

			throw new AuthenticationError("You need to be logged in!");
		},
		postTestimonial: async (parent, args, context) => {
			if (context.user) {
				const testimonial = await Testimonial.create({
					postedBy: context.user._id,
					...args,
				});
				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $push: { testimonials: testimonial } },
					{ new: true }
				);

				return testimonial;
			}

			throw new AuthenticationError("You need to be logged in!");
		},
		postWorkout: async (parent, args, context) => {
			if (context.user) {
				const workout = await Workout.create({
					postedBy: context.user._id,
					...args,
				});

				return workout;
			}

			throw new AuthenticationError("You need to be logged in!");
		},
		addFriend: async (parent, { friendId }, context) => {
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $addToSet: { friends: friendId } },
					{ new: true }
				).populate("friends");

				return updatedUser;
			}

			throw new AuthenticationError("You need to be logged in!");
		},
	},
};
// addUser: async (parent, args) => {
// 	const user = await User.create(args);
// 	const token = signToken(user);

// 	return { token, user };
// },
module.exports = resolvers;
