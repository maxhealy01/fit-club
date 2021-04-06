const { Schema, model } = require("mongoose");
const ProgressData = require("./ProgressData");

const goalSchema = new Schema({
	// This will be a personal goal selected by the user from a drop-down list.
	goalType: {
		type: String,
		required: true

	},
	// User will select a start date from a date picker tool
	startDate: {
		type: Date,
		required: true
	},
	// User will select an end date from a date picker tool
	endDate: {
		type: Date,
		required: true
	},
	// User will input an end value to reflect their goal
	endValue: {
		type: Number,
		required: true
	},
	progressData: [
		{
			type: Schema.Types.ObjectId,
			ref: "ProgressData",
		}
	]
});

const Goal = model("Goal", goalSchema);

module.exports = Goal;
