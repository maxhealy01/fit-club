//sent_id, received_id, message
const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
	text: {
		type: String,
		required: true,
		trim: true,
	},
	recipients: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: false,
	}
});

const Message = model("Message", messageSchema);

module.exports = Message;
