const { Schema, model } = require("mongoose");
const User = require("./User");

const classSchema = new Schema(
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
		equipment: {
			type: String,
		},
		activity: {
			type: Schema.Types.ObjectId,
			ref: "Activity",
			required: true,
		},
		participants: [User.schema],
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

classSchema.virtual("classCount").get(function () {
	return this.participants.length;
});

const Class = model("Class", classSchema);

module.exports = Class;
