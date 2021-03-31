const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	source: {
		type: String,
		trim: true,
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
	poster: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
