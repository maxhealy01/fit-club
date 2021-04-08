import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ id, ...props }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io(
      `${document.location.origin}`,
      { query: { id } } 
    )
    setSocket(newSocket);

    return () => newSocket.close()
  }, [id])

  return (
    <SocketContext.Provider value={socket} {...props} />
  )
}