import React, { useState, useCallback } from "react";
import "../assets/scss/chatbox.scss";
import { useConversations } from "../utils/ConversationsProvider";

const AppChatBox = () => {
  const [text, setText] = useState("");
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((recip) => recip.id),
      text
    );
    setText("");
  }

  return (
    <>
      <div className="chat">
        <div className="chat-title">
          <h1>USER NAME HERE</h1>
          <h2>USER ID HERE</h2>
          <figure className="avatar">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg"
              alt="profile"
            />
          </figure>
        </div>
        <div className="messages">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className="messages-content"
              >
                {message.text}
                <div classnName="messages-content small">
                  {message.fromMe ? "You" : message.senderName}
                </div>
              </div>
            );
          })}
        </div>
        <div className="message-box">
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="message-input"
            placeholder="Type message..."
          ></textarea>
          <button
            type="submit"
            onClick={handleSubmit}
            className="message-submit"
          >
            Send
          </button>
        </div>
      </div>
      <div className="bg"></div>
    </>
  );
};

export default AppChatBox;
