import React, { useState } from 'react'
import './App.css';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import { ContactsProvider } from '../contexts/contactsProvider';
import { ConversationsProvider } from '../contexts/conversationProvider';

function App() {
  const [ id, setId ] = useLocalStorage()

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider >
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  )
}

export default App
