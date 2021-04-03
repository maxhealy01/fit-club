const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
<<<<<<< HEAD
const { User } = require("../models");
=======
const {
  Activity,
  Meetup,
  Goal,
  Message,
  Testimonial,
  User,
  Workout,
} = require("../models");
>>>>>>> 5b8958be4ccc415055d8a1f8a72737b9e3e87ff1

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

<<<<<<< HEAD
			return { token, user };
		},
	},
=======
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
    createConversation: async (recipients, text) => {
      if (context.user) {
        const message = await Message.create({
          recipients,
          text,
        });

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
  },
>>>>>>> 5b8958be4ccc415055d8a1f8a72737b9e3e87ff1
};

module.exports = resolvers;
