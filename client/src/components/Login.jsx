import React from "react"
import { useState } from "react"
import { Container, Form } from "react-bootstrap"

const Login = () => {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef}></Form.Control>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default Login;