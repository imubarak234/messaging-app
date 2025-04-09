import React, { useState } from 'react'
import './App.css';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [ id, setId ] = useLocalStorage()

  return (
    id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
  )
}

export default App
