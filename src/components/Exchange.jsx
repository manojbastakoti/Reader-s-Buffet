import React from "react";
import axios from "axios";
import BookDetails from "./BookDetails";
import { Button, Container } from "react-bootstrap";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery as useRouteQuery } from "../hooks/useQuery";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Exchange() {
  const query = useRouteQuery();
  const bookId = query.get("bookId");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    async (id) =>
      axios.post("/exchange", {
        bookId: id,
      }),
    {
      enabled: !!bookId,
      onSuccess: (data) => {
        if (data.status === 201) {
          toast.success("Book exchanged successfully.");
          queryClient.invalidateQueries("exchange-token-count");
          navigate("/profile");
        }
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Something went wrong.");
      },
    }
  );

  const handleExchange = () => {
    mutate(bookId);
  };
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
        <Button onClick={handleExchange}>Confirm Exchange</Button>
      </div>
    </Container>
  );
}
