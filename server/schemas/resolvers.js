const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const {
	Activity,
	Meetup,
	Goal,
	Message,
	Testimonial,
	User,
	ClassList,
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
		// The following three queries are set up to take optional parameters, filtering by activity or user.
		meetups: async (parent, { activity }) => {
			const params = activity ? { activity } : {};
			return Meetup.find(params);
		},
		testimonials: async (parent, { postedBy }) => {
			const params = postedBy ? { postedBy } : {};
			return Testimonial.find(params);
		},
		workouts: async (parent, { activity }) => {
			const params = activity ? { activity } : {};
			return Workout.find(params);
		},
		trainers: async (parent, args, context) => {
			// if (context.user) {
			return await User.find({ isTrainer: true });
			// }
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
		addTrainer: async (parent, args) => {
			trainer = { ...args, isTrainer: true };
			const user = await User.create(trainer);

			const token = signToken(user);

			return { token, user };
		},
		createConversation: async (recipients, text, context) => {
			if (context.user) {
				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{
						$push: {
							messages: {
								recipients,
								text,
							},
						},
					},
					{ new: true }
				);
			}
		},
		createActivity: async (parent, args) => {
			const activity = await Activity.create(args);

			return activity;
		},
		// not yet working
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
		// Not yet working
		addMeetup: async (parent, { meetupId }, context) => {
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $addToSet: { meetups: meetupId } },
					{ new: true }
				).populate("meetups");

				return updatedUser;
			}

			throw new AuthenticationError("You need to be logged in!");
		},
		addActivity: async (parent, { activityId }, context) => {
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $addToSet: { activities: activityId } },
					{ new: true }
				);

				return updatedUser;
			}

			throw new AuthenticationError("You need to be logged in!");
		},
		addGoal: async (parent, args, context) => {
			if (context.user) {
				const goal = await Goal.create(args);

				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $addToSet: { goals: goal._id } },
					{ new: true }
				).populate("goals");

				return updatedUser;
			}
			throw new AuthenticationError("You need to be logged in!");
		},
	},
};

module.exports = resolvers;
