import React from "react";
import { useContacts } from "../contexts/contactsProvider";
import { ListGroup } from "react-bootstrap";

const Contacts = () => {
  
  const { contacts } = useContacts();

  return (
    <ListGroup variant="flush">
      { contacts.map((contact, index) => (
        <ListGroup.Item key={contact.id}>
          {contact.name}
        </ListGroup.Item>
      )) }
    </ListGroup>
  )
}

export default Contacts;