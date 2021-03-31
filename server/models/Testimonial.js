const { Schema, model } = require("mongoose");

const testimonialSchema = new Schema({
	poster: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
});

const Testimonial = model("Testimonial", testimonialSchema);

module.exports = Testimonial;