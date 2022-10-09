import React from "react";
import { useQuery as useRouteQuery } from "../hooks/useQuery";
import axios from "axios";
import BookDetails from "./BookDetails";
import { Button, Modal } from "react-bootstrap";
import { isCancelledError, useQuery } from "@tanstack/react-query";
import Loading from "./Loading";

export default function ExchangeDialog(props) {
  const { bookId, ...restProps } = props;
  console.log("bookId", bookId);
  const { data, isLoading, isError } = useQuery(
    ["book", bookId],
    async () => axios.get("/book/" + bookId),
    {
      enabled: props.show && !!bookId,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  const bookData = data?.data?.data;

  if (isLoading) return <Loading />;
  if (isError) return <div>Something went wrong!</div>;

  return (
    <Modal
      {...restProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
