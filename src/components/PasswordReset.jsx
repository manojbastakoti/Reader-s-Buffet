import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

export default function PasswordReset() {
  //  TODO : Implement password reset functionality
  return (
    <Container>
      {/* a password reset form card  using react bootstrap */}
      <Card
        className="mx-auto my-4 p-3"
        style={{ minWidth: "400px", maxWidth: "420px" }}
      >
        <Form>
          <Card.Title>Password Reset</Card.Title>
          <Card.Text className="card-text">
            Enter your email address and we will send you a link to reset your
            password.
          </Card.Text>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
            <Form.Control
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <Form.Text>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
