import React from "react";
import "../assets/scss/Profile.scss";

import ChatDashboard from "../components/ChatDashboard";
import { ConversationsProvider } from "../utils/ConversationsProvider";

import { SocketProvider } from "../utils/SocketProvider";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import { ContactsProvider } from "../utils/ContactsProvider";

function Profile() {
  const {loading, data} = useQuery(QUERY_ME);
  const { _id } = data?.me || {};
  // hardcoded _id from database
  return (
    <>
    profile
      {!loading && 
      <SocketProvider id={_id}>
        <ContactsProvider>
          <ConversationsProvider id={_id}>
            <ChatDashboard id={_id} />
          </ConversationsProvider>
        </ContactsProvider>
      </SocketProvider>
      }
    </>
  );
}

export default Profile;
