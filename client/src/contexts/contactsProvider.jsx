import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContactsContext = React.createContext();


export const useContacts = () => {
  return useContext(ContactsContext);
};

export const ContactsProvider = ({ children }) => {

  const [ contacts, setContacts ] = useLocalStorage("contacts", []);

  const createContact = (id, name) => {
    setContacts(prevContacts => {
      return [ ...prevContacts, { id, name } ]
    });
  };

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  )
}

