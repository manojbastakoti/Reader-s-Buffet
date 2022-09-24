import React from "react";
import axios from "axios";
import BookDetails from "./BookDetails";
import { Button, Container } from "react-bootstrap";

export default function Exchange() {
  return (
    <Container className="w-50 border   my-4 p-3">
      <h2 className="text-center">Exchange</h2>
      <hr />
      <h5>You are about to perform an exchange.</h5>
      <p>
        Please confirm the order. It will cost you <b>1 Exchange Token </b>
        to get this book.
      </p>
      <div className="border p-3">
        <h5>Book Details</h5>
        <BookDetails viewOnly />
      </div>
      <div className="border p-3 d-flex justify-content-end gap-3">
        <Button variant="danger">Cancel</Button>
        <Button>Confirm Exchange</Button>
      </div>
    </Container>
  );
}
