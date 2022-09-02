import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function AddBook() {
  return (
    <Container className="py-3">
      <Card className="w-50 p-3 mx-auto h-auto">
        <h2 className="text-center"> Add book</h2>
        <hr />
        <Form className="w-100 mx-auto">
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter book title" />
            <Form.Text className="text-muted">
              Enter the title of the book here.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter price here" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Enter author name here" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="genre">
            <Form.Label>Select a genre</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select a genre</option>
              <option value="ACTION">Action</option>
              <option value="DRAMA">Drama</option>
              <option value="COMEDY">Comedy</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="pubDate">
            <Form.Label>Published Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter book's published date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cover">
            <Form.Label>Cover image</Form.Label>
            <Form.Control
              type="file"
              accept="image/jpg, image/jpeg, image/png"
            />
            <Form.Text className="text-muted">
              Upload book's cover image
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              placeholder="Enter description about the book here"
            />
          </Form.Group>
          <LinkContainer to="/">
            <Button variant="secondary">Cancel</Button>
          </LinkContainer>
          <Button variant="primary" type="submit" className="ms-2">
            Add book
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
