const { Schema, model } = require("mongoose");

const testimonialSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	postedBy: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

const Testimonial = model("Testimonial", testimonialSchema);

module.exports = Testimonial;
