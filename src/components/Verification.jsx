import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

export default function Verification() {
  return (
    <Container>
      <Card className="mx-auto p-3 my-4">
        <Form>
          <Form.Text>
            <h1 className="text-center">Verification</h1>
            <p>
              Please enter the verification code sent to your email address.
            </p>

            <Form.Group controlId="formBasicEmail" className="mb-2">
              <Form.Label>Verification Code</Form.Label>
              <Form.Control
                type="number"
                maxLength={6}
                placeholder="Enter code"
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Verify
            </Button>
            <hr />

            <p>If you did not receive the code, you can resend it.</p>
            {/* resend button */}
            <Button
              variant="outline-secondary"
              size="sm"
              className="w-100"
              type="button"
            >
              Resend
            </Button>
          </Form.Text>
        </Form>
      </Card>
    </Container>
  );
}
