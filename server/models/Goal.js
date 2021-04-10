const { Schema, model } = require('mongoose');
const progressDataSchema = require('./ProgressData');
// const dateFormat = require('../utils/dateFormat');

const goalSchema = new Schema(
  {
    goalType: {
      type: String,
      required: 'You need to select a goal type!'
    },
    startDate: {
      type: Date,
      default: Date.now
    },
    endDate: {
      type: Date,
      required: 'You need to select a goal date!'
    },
    endValue: {
      type: Number,
      required: 'You need to enter your goal!'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    progressData: [progressDataSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

// thoughtSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

const Goal = model('Goal', goalSchema);

module.exports = Goal;
