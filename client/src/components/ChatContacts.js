import React, { useEffect } from 'react'
import { useContacts } from "../utils/ContactsProvider";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_TRAINERS } from '../utils/queries';

import { UPDATE_CONTACTS } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";

export default function ChatContacts() {
  // const { contacts } = useContacts();
  const { loading, data: contactsData } = useQuery(QUERY_TRAINERS);
  let contacts = [{name: "casey", id: "123456"}]

  const [state, dispatch] = useStoreContext();

  console.log(contactsData)
  // const { contacts } = state;


  useEffect(() => {
    if (contactsData) {
      dispatch({
        type: UPDATE_CONTACTS,
        contacts: contactsData.contacts
      });
    }
  }, [contactsData])
  return (
    <ul>
      {loading ? <div>Loading...</div> : contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}
        </li>
      ))}
    </ul>
  )
}
