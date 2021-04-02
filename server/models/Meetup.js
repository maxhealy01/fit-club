const { Schema, model } = require("mongoose");
const User = require("./User");

const meetupSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		// For Meetupes, this might be a digital location
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
		equipment: {
			type: String,
		},
		activity: {
			type: Schema.Types.ObjectId,
			ref: "Activity",
		},
		participants: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		// If NO trainer, then this is treated as a meet-up.
		// That is, it's just a bunch of users meeting up.
		trainer: {
			type: Schema.Types.ObjectId,
			ref: "Trainer",
		},
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
	}
);

meetupSchema.virtual("meetupCount").get(function () {
	return this.participants.length;
});

const Meetup = model("Meetup", meetupSchema);

module.exports = Meetup;