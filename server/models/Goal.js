const { Schema, model } = require('mongoose');
const progressDataSchema = require('./ProgressData');

const Activity = require('./Activity');
const Meetup = require('./Meetup');
const Testimonial = require('./Testimonial');
const Message = require('./Message');

const goalSchema = new Schema(
	{
		username: {
			type: String,
			required: true
		},
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
