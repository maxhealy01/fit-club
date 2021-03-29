const { Schema, model } = require("mongoose");

const activitySchema = newSchema({
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

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
