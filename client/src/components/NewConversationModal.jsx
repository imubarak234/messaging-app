import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useContacts } from "../contexts/contactsProvider";
import { useConversations } from "../contexts/conversationProvider";

const NewConversationModal = ({ closeModal }) => {

  const [ selectedContactIds, setSelectedContactIds ] = useState([]);

  const handleCheckboxChange = (contactId) => {

    setSelectedContactIds(prevSelectedContactIds => {
      if(prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter(id => id !== contactId);
      } else {
        return [ ...prevSelectedContactIds, contactId ]
      }
    })
  }

  const { contacts } = useContacts();
  const { createConversations } = useConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    createConversations(selectedContactIds);
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {contacts.map(contact => ((
              <Form.Group controlId={contact.id} key={contact.id} className="mb-2 p-1">
                <Form.Check
                  type="checkbox" 
                  value={selectedContactIds.includes(contact.id)}
                  label={contact.name}
                  onChange={() => handleCheckboxChange(contact.id)}
                />
              </Form.Group>
            )))}
            <Button type="submit" className="mt-2">Create</Button>
          </Form>
        </Modal.Body>
    </>
  )
};

export default NewConversationModal;