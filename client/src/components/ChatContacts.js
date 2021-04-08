import React, { useEffect, useState } from "react";
import "../assets/scss/chatbox.scss"

import { fromPromise, useQuery } from "@apollo/react-hooks";
import { QUERY_ME, QUERY_TRAINERS } from "../utils/queries";

import { UPDATE_CONTACTS } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import { useConversations } from "../utils/ConversationsProvider";

export default function ChatContacts() {
  const { loading, data: contactsData } = useQuery(QUERY_TRAINERS);
  const { data } = useQuery(QUERY_ME);

  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { createConversation } = useConversations();

  const [state, dispatch] = useStoreContext();

  const { _id } = data?.me || {};
  const { contacts } = state;

  function handleContactClick(contactId) {
    setSelectedContactIds(contactId);

    createConversation([contactId, _id]);
  }

  useEffect(() => {
    if (contactsData) {
      dispatch({
        type: UPDATE_CONTACTS,
        contacts: contactsData.trainers,
      });
    }
  }, [contactsData]);
  return (
    <div className={"chat-contacts"}>
      <p className="chat-contacts-title">
        Talk to our certified trainers:
      </p> 
      {loading ? (
        <div>Loading...</div>
      ) : (
        contacts.map((contact) => (
          <h4
            className={"contact"}
            key={contact._id}
            value={selectedContactIds.includes(contact._id)}
            onClick={() => handleContactClick(contact._id)}
          >
            {contact.username}
          </h4>
        ))
      )}
    </div>
  );
}
