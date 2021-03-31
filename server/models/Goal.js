const { Schema, model } = require("mongoose");

const goalSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	metric: {
		type: String,
		trim: true,
	},
});

const Goal = model("Goal", goalSchema);

module.exports = Goal;
