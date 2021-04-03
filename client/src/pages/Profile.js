import React from "react";
import "../assets/scss/Profile.scss";

import ChatDashboard from "../components/ChatDashboard";
import { ConversationsProvider } from "../utils/ConversationsProvider";

import { SocketProvider } from "../utils/SocketProvider";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";

function Profile() {
  // const {loading, data} = useQuery(QUERY_ME);  
  // const { id } = data
  // hardcoded _id from database
  const id = "60677866568ec9a131f045ed"
  return (
    <>
     {/* {!loading &&  */}
      <SocketProvider id={id}>
        <ConversationsProvider id={id}>
          <ChatDashboard id={id} />
        </ConversationsProvider>
      </SocketProvider>
     {/* } */}
    </>
  );
}

export default Profile;
