import React from "react";
import { Badge, Button, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function BookDetails() {
  const { bookId } = useParams();

  const { data, isLoading, isError } = useQuery(
    [bookId],
    async () => axios.get("/book/" + bookId),
    {
      enabled: !!bookId,
    }
  );

  const book = data?.data?.data;

  if (isError || !book) return <div>Something went wrong!</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <Container fluid className="my-4">
      <Row>
        <Col
          xs={4}
          className={
            "border d-flex justify-content-center align-items-center p-3"
          }
        >
          <Image src={process.env.REACT_APP_BASE_API + book?.cover} />
        </Col>
        <Col className="border p-3">
          <h5 className="text-muted">About the book</h5>
          <hr />
          <Row>
            <Col className="p-0">
              <h2>{book?.title} </h2>
            </Col>
            <Col className="d-flex gap-2 justify-content-end">
              <Button>Get</Button>
              <Button variant="outline-success">Buy</Button>
            </Col>
          </Row>
          <small className="text-muted">By {book?.author}</small>
          <h4>Rs. {book?.price}</h4>
          <p>Published on {book?.publishedDate}</p>
          <Badge>Action</Badge>

          <p className="text-muted">
            Owned by <b>Manoj Bastakoti</b>
          </p>
          <p>{book?.description}</p>
        </Col>
      </Row>
      <h1>Exchange</h1>
    </Container>
  );
}
