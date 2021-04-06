const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
	name: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	}
});

const Activity = model('Activity', activitySchema);

module.exports = Activity;