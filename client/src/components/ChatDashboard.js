import React from 'react'
import ChatBox from "./ChatBox";
import ChatContacts from "./ChatContacts"
import { useConversations } from "../utils/ConversationsProvider";

export default function ChatDashboard({ id }) {
  const { selectedConversation } = useConversations();

  return (
    <div>
      <ChatContacts id={id} />
      {selectedConversation && <ChatBox />}
    </div>
  )
}
