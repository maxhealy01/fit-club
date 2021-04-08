import React, { useState, useCallback } from "react";
import { useConversations } from "../utils/ConversationsProvider";
import "../assets/scss/chatbox.scss";

import { TOGGLE_CHAT } from "../utils/actions"
import { useStoreContext } from "../utils/GlobalState";

export default function OpenConversation() {
  const [text, setText] = useState("");

  const [ state, dispatch ] = useStoreContext();

  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText("");
  }

  function toggleChat() {
    dispatch({ type: TOGGLE_CHAT });
  }

  return (
    <div className={"chat"}>
      <div className="chat-box">
        <div className="chat-title" value={true} onClick={toggleChat}>
          <h1>{selectedConversation.recipients[0].name}</h1>
          <h2>Click Here to toggle chat</h2>
          <figure className="avatar">
            <img src="#" />
          </figure>
        </div>
        {!state.chatOpen && 
        <>
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
                  <p className={`message ${!message.fromMe ? ", message-personal" : ""}`}>
                  {message.fromMe ? "You: " : message.senderName}
                  {message.text}
                  </p>
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
        </>
        }
      </div>
    </div>
  );
}
