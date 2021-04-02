const { Schema, model } = require("mongoose");

const activitySchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	type: {
		type: String,
		required: true,
		trim: true,
	},
});

const Activity = model("Activity", activitySchema);

module.exports = Activity;
