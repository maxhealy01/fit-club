import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ id, childern }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io(
      `${document.location}`,
      { query: { id } } 
    )
    setSocket(newSocket);

    return () => newSocket.close()
  }, [id])

  return (
    <SocketContext.Provider value={socket}>
      {childern}
    </SocketContext.Provider>
  )
}