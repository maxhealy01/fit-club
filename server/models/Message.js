//sent_id, received_id, message
const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
	message: {
		type: String,
		required: true,
		trim: true,
	},
	sentBy: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	receievdBy: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

const Message = model("Message", messageSchema);

module.exports = Message;
