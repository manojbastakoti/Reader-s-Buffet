import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import '../styles/Login.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import * as Icon from 'react-bootstrap-icons';


export default function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);}

  return (<>

    <div>
      <Row>

        <Col xs={10} md={8} lg={4} className="login-container ">
              <h1>Reader's Buffet</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="m-3" controlId="formBasicEmail">

              <Form.Control required type="text" placeholder="Enter username or email" />
              <Form.Control.Feedback type="invalid">
              Please enter your Username or email address
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicPassword">

              <Form.Control required type="password" placeholder="Password" />
              <Form.Control.Feedback type="invalid">
              Please enter your password.
            </Form.Control.Feedback>
            </Form.Group>
            <div className="d-grid m-3">
              <Button variant="primary" type="submit">
                Login
              </Button></div>

            <Nav.Link href="/login" eventKey="link-1"> Forgot password?</Nav.Link>
          </Form>
          <hr />

          <h5>OR</h5>

          <div className="d-grid m-3">
            <Button variant="primary" ><Icon.Google size={20} /> Continue with google</Button>{' '}
          </div>
          <hr />

          <Row>Don't have an account? <Nav.Link href="/register" eventKey="link-1">Sign up</Nav.Link></Row>
        </Col>
      </Row>

    </div>




  </>
  )
}
