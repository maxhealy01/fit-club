import React from "react";
import "../assets/scss/Profile.scss";

import ChatDashboard from "../components/ChatDashboard";
import { ConversationsProvider } from "../utils/ConversationsProvider";

import { SocketProvider } from "../utils/SocketProvider";

const id = "testificate"

function Profile() {
  return (
    <>
      <SocketProvider id={id}>
        <ConversationsProvider id={id}>
          <ChatDashboard id={id} />
        </ConversationsProvider>
      </SocketProvider>
    </>
  );
}

export default Profile;
