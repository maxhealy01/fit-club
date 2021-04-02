const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const Goal = require("./Goal");
const Activity = require("./Activity");
const FitnessClass = require("./FitnessClass");

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, "Must use a valid email address"],
		},
		password: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			trim: true,
		},
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
		goals: [Goal.schema],
		classes: [FitnessClass.schema],
		activities: [Activity.schema],
		isTrainer: {
			type: Boolean,
		},
	},
	// set this to use virtual below
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
	}
);

// hash user password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

userSchema.virtual("friendCount").get(function () {
	return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;
