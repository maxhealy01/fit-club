const { Schema, model } = require('mongoose');
const progressDataSchema = require('./ProgressData');

const goalSchema = new Schema(
	{
		goalType: {
			type: String,
			required: true
		},
		startDate: {
			type: Date,
			required: true
		},
		endDate: {
			type: Date,
			required: true
		},
		endValue: {
			type: Number,
			required: true
		},
		username: {
			type: String,
			required: true
		},
		progressData: [progressDataSchema]
	},
	// set this to use virtual below
	{
		toJSON: {
			getters: true,
		}
	}
);


const Goal = model('Goal', goalSchema);

module.exports = Goal;
