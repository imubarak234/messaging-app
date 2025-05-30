import React, { useRef } from "react"
import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

const Login = ({ onIdSubmit }) => {

  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  }

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  return (
    <Container className="align-items-center d-flex" style={{ height: "100vh" }}>
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="m-2">Login</Button>
        <Button onClick={createNewId} variant="secondary">Create a New ID</Button>
      </Form>
    </Container>
  )
}

export default Login;