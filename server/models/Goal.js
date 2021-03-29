const { Schema, model } = require("mongoose");

const goalSchema = newSchema({
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

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
