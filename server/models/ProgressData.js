const { Schema } = require("mongoose");

const progressDataSchema = new Schema(
	{
		date: {
			type: Date,
			required: true

		},
		value: {
			type: Number
		}
	},
	{
		toJSON: {
		getters: true
		}
	}
);

module.exports = progressDataSchema;