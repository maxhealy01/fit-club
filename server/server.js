const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");


const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// create server for app and socket.io to communicate on
const chatServer = require("http").createServer(app);
// import socket.io
const io = require("socket.io")(chatServer, {
	cors: {
		origin: 5000,
	},
});

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
// app.use("/images", express.static(path.join(__dirname, "../client/images")));

// configure chatServer message broadcasts
io.on("connection", socket => {
	// get unique ID for user
	const id = socket.handshake.query.id

	// join with id
	socket.join(id);

	// handler for sending messages to other users
	socket.on("send-message", ({ recipients, text }) => {
		// loop through recipients to send the message
		recipients.forEach((recipient) => {
			// remove sender from recipients, as they send the message and should not recieve it
			const newRecipients = recipients.filter(recip => recip !== recipient)
			// push the senders ID onto new Recipients
			newRecipients.push(id);
			// broadcast message to current user in the forEach loop
			socket.broadcast.to(recipient).emit("recieve-message", {
				recipients: newRecipients, sender: id, text
			})
		})
	})
})

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
		console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
	});
});
