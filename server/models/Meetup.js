const { Schema, model } = require('mongoose');
const User = require('./User');

const meetupSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		// For classes, this might be a digital location
		// For meetups, probably a physical location
		location: {
			type: String,
			trim: true,
			required: true,
		},
		time: {
			type: String,
			required: true,
		},
		duration: {
			type: String,
			trim: true,
			required: true,
		},
<<<<<<< HEAD
		equipment: {
			type: String,
		},
		activity: {
			type: Schema.Types.ObjectId,
			ref: 'Activity',
			required: true,
		},
		participants: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
=======
		// equipment: {
		// 	type: String,
		// },
		// activity: {
		// 	type: Schema.Types.ObjectId,
		// 	ref: "Activity",
		// 	required: true,
		// },
		// participants: [
		// 	{
		// 		type: Schema.Types.ObjectId,
		// 		ref: "User",
		// 	},
		// ],
>>>>>>> 145cf7e6a5e0f7e515aa5fc8fd6d744ece281384
		postedBy: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		// If NO trainer, then this is treated as a meet-up.
		// That is, it's just a bunch of users meeting up.
<<<<<<< HEAD
		trainer: {
			type: Schema.Types.ObjectId,
			ref: 'Trainer',
		},
=======
		// trainer: {
		// 	type: Schema.Types.ObjectId,
		// 	ref: "Trainer",
		// },
>>>>>>> 145cf7e6a5e0f7e515aa5fc8fd6d744ece281384
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
	}
);

meetupSchema.virtual('meetupCount').get(function () {
	return this.participants.length;
});

const Meetup = model('Meetup', meetupSchema);

module.exports = Meetup;
