const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const {
	Activity,
<<<<<<< HEAD
	Meetup,
=======
	FitnessClass,
>>>>>>> yunik-branch
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
		activities: async () => {
			return await Activity.find();
		},
		meetups: async () => {
			return await Meetup.find();
		},
		testimonials: async () => {
			return await Testimonial.find();
		},
		users: async () => {
			return await User.find();
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
		postMeetup: async (parent, args) => {
			const meetup = await Meetup.create(args);

			return meetup;
		},
		postTestimonial: async (parent, { text }, context) => {
			if (context.user) {
				const testimonial = await Testimonial.create({
					postedBy: context.user,
					text,
				});

				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{
						$push: {
							testimonials: {
								text,
								postedBy: context.user.username,
							},
						},
					},
					{ new: true }
				);

				return testimonial;
			}
			throw new AuthenticationError("You need to be logged in!");
		},
	},
};

module.exports = resolvers;
