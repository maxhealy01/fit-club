import React, { useEffect } from 'react'
import { useContacts } from "../utils/ContactsProvider";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_TRAINERS } from '../utils/queries';

import { UPDATE_CONTACTS } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";

export default function ChatContacts() {
  // const { contacts } = useContacts();
  const { loading, data: contactsData } = useQuery(QUERY_TRAINERS);


  const [state, dispatch] = useStoreContext();

  const { contacts } = state;

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
        <li key={contact._id}>
          {contact.username}
        </li>
      ))}
    </>
  )
}
