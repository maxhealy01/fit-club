const { Schema } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const progressDataSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now
    },
    value: {
      type: Number,
      required: "You must enter your progress data"
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = progressDataSchema;
