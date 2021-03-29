const { Schema, model } = require("mongoose");

const testimonialSchema = newSchema({
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

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
