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
  description: {
    type: String,
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
