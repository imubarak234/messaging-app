import React, { useState } from 'react'
import './App.css';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import { ContactsProvider } from '../contexts/contactsProvider';

function App() {
  const [ id, setId ] = useLocalStorage()

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )

  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  )
}

export default App
