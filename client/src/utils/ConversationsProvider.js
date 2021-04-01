import React, { useContext, useState, useEffect, useCallback } from "react";
import { useSocket } from "./SocketProvider";
import { useStoreContext } from "./GlobalState";

const ConversationsContext = React.createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ id, children }) {
  // get conversations from the database
  let [conversations, setConversations] = useStoreContext();
  ////////
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(
    0
  );
  const socket = useSocket();

  function createConversation(recievedBy) {
    setConversations((prevconversations) => {
      return [...prevconversations, { recievedBy, messages: [] }];
    });
  }

  const addMessageToConversation = useCallback(
    ({ recievedBy, text, sentBy }) => {
      setConversations((prevConversations) => {
        let madeChange = false;
        const newMessage = { sentBy, text };
        const newConversations = prevConversations.map((conversation) => {
          if (arrayEquality(conversation.recievedBy, recievedBy)) {
            madeChange = true;
            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            };
          }

          return conversation;
        });

        if (madeChange) {
          return newConversations;
        } else {
          return [...prevConversations, { recievedBy, messages: [newMessage] }];
        }
      });
    },
    [setConversations]
  );

  useEffect(() => {
    if (socket == null) return;

    socket.on("receive-message", addMessageToConversation);

    return () => socket.off("receive-message");
  }, [socket, addMessageToConversation]);

  function sendMessage(recipients, text) {
    socket.emit("send-message", { recipients, text });

    addMessageToConversation({ recipients, text, sender: id });
  }

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      return { id: recipient };
    });

    const messages = conversation.messages.map((message) => {
      const name =  message.sender;
      const fromMe = id === message.sender;
      return { ...message, senderName: name, fromMe };
    });

    const selected = index === selectedConversationIndex;
    return { ...conversation, messages, recipients, selected };
  });

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}

function arrayEquality(a, b) {
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  return a.every((element, index) => {
    return element === b[index];
  });
}
