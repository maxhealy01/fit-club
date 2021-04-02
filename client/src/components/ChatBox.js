import React, { useState, useCallback } from "react";
import "../assets/scss/chatbox.scss";
import { useConversations } from "../utils/ConversationsProvider";

const ChatBox = () => {
  const [text, setText] = useState("");
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault()

    sendMessage(
      selectedConversation.recipients.map(r => r.id),
      text
    )
    setText('')
  }

	return (
		<>
    <div className="chat">
      <div className="chat-box">
        <div className="chat-title">
            <h1>USER NAME HERE</h1>
            <h2>USER ID HERE</h2>
            <figure className="avatar">
            <img src="#" /></figure>
        </div>
        <div className="messages">
            <div className="messages-content"></div>
        </div>
        <div className="message-box">
            <textarea type="text" className="message-input" placeholder="Type message..."></textarea>
            <button type="submit" onClick={handleSubmit} className="message-submit">Send</button>
        </div>
      </div>
    </div>
		</>
	);
};

export default ChatBox;

