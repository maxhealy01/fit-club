const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const {
	Activity,
	Class,
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
	},
};

module.exports = resolvers;
