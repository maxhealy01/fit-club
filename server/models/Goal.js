const { Schema, model } = require("mongoose");

const goalSchema = new Schema({
	// This will be a personal goal typed by the user.
	personalGoal: {
		type: String,
		required: true,
		trim: true,
	},
	// This will be a goal pre-defined by us (weight loss, runtime, etc)
	name: {
		type: String,
		required: true,
		trim: true,
	},
	// The metric will be associated with this pre-defined goal
	metric: {
		type: [String],
		trim: true,
	},
});

const Goal = model("Goal", goalSchema);

module.exports = Goal;
