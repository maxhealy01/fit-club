import React, { useEffect, useState } from 'react'

import { fromPromise, useQuery } from "@apollo/react-hooks";
import { QUERY_TRAINERS } from '../utils/queries';

import { UPDATE_CONTACTS } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import { useConversations } from "../utils/ConversationsProvider";

export default function ChatContacts() {
  const { loading, data: contactsData } = useQuery(QUERY_TRAINERS);

  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { createConversation } = useConversations();

  const [state, dispatch] = useStoreContext();

  const { _id } = state;
  const { contacts } = state;

  function handleContactClick(contactId) {
    setSelectedContactIds(contactId);

    createConversation([contactId, _id])
  }

  useEffect(() => {
    if (contactsData) {
      dispatch({
        type: UPDATE_CONTACTS,
        contacts: contactsData.trainers
      });
    }
  }, [contactsData])
  return (
    <>
      Talk to our certified trainers:
      {loading ? <div>Loading...</div> : contacts.map(contact => (
        <h4
          key={contact._id}
          value={selectedContactIds.includes(contact._id)}
          onClick={()=> handleContactClick(contact._id)}
        >
          {contact.username}
        </h4>
      ))}
    </>
  )
}
