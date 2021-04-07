import React, { useState, useCallback } from "react";
import { useConversations } from "../utils/ConversationsProvider";
import "../assets/scss/chatbox.scss";

export default function OpenConversation() {
  const [text, setText] = useState("");

  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText("");
  }

  return (
    <div className={"chat"}>
      <div className="chat-box">
        <div className="chat-title">
          <h1>USERNAME</h1>
          <h2>USER ID HERE</h2>
          <figure className="avatar">
            <img src="#" />
          </figure>
        </div>
        <div className="messages">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <div
                key={index}
                className={`messages-content, ${
                  message.fromMe && "messages-from-me"
                }`}
              >
                {message.fromMe ? "You: " : message.senderName}
                {message.text}
              </div>
            );
          })}
        </div>
        <div className={"message-box"}>
          <textarea
            className={"message-input"}
            placeholder={"Type message..."}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className={"message-submit"}
            onClick={handleSubmit}
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
