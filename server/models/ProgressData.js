const { Schema, model } = require("mongoose");

const progressDataSchema = new Schema({
	date: {
		type: Date,
		required: true

	},
	value: {
		type: Number
	}
});

const ProgressData = model("ProgressData", progressDataSchema);

module.exports = ProgressData;