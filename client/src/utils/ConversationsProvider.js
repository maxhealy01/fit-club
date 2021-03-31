import React, { useContext, useState, useEffect, useCallback } from "react";
import { useSocket } from "./SocketProvider";

const conversationsContext = React.createContext();

export function useConversations() {
  return useContext(conversationsContext);
};

export function onversationsProvider({ id, children }) {
  // get conversations from the database
  let [conversations, setconversations]
  ////////
  const [selectedConversationsIndex, setSelectedConversationsIndex] = useState(0);
  const socket = useSocket();

  function createconversations(recievedBy) {
    setconversations(prevconversations => {
      return [...prevconversations, { recievedBy, messages: [] }]
    })
  }

  const addMessageToConversation = useCallback(({ recievedBy, text, sentBy }) => {
    setConversations(prevConversations => {
      let madeChange = false
      const newMessage = { sentBy, text }
      const newConversations = prevConversations.map(conversation => {
        if (arrayEquality(conversation.recievedBy, recievedBy)) {
          madeChange = true
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage]
          }
        }

        return conversation
      })

      if (madeChange) {
        return newConversations
      } else {
        return [
          ...prevConversations,
          { recievedBy, messages: [newMessage] }
        ]
      }
    })
  }, [setConversations])

  useEffect(() => {
    if (socket == null) return

    socket.on("recieve-message", addMessageToConversation);

    function sendMessage(sentBy)
  }, [socket, addMessageToConversation])

  

}