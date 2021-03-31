import React, { useContext, useState, useEffect, useCallback } from "react";
import { useSocket } from "./SocketProvider";

const ChatContext = React.createContext();

export function useConversations() {
  return useContext(ChatContext);
};

export function ChatProvider({ id, children }) {
  // get id from context
  ////////
  
  const 
}