import React from 'react'
import { useContacts } from "../utils/ContactsProvider";

export default function ChatContacts() {
  const { contacts } = useContacts();
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}
        </li>
      ))}
    </ul>
  )
}
