import React from 'react'
import ChatBox from "./ChatBox";
import ChatContacts from "./ChatContacts"
import { useConversations } from "../utils/ConversationsProvider";

export default function ChatDashboard({ id }) {
  const { selectedConversation } = useConversations();

  return (
    <div>
      chat dashboard
      <ChatContacts id={id} />
      {selectedConversation && <ChatBox />}
    </div>
  )
}
