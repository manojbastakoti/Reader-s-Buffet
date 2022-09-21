import React from "react";
import Carousel from "./Carousel";
import "../styles/Carousel.css";
import ExchangeCard from "./ExchangeCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";

export default function Homepage() {
  const { data, isLoading, isError } = useQuery(["all-books"], async () =>
    axios.get("/book/all")
  );

  const books = data?.data?.data?.books;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong!</div>;

  return (
    <>
      <div>
        <Carousel />
      </div>

      <div className="d-flex flex-wrap gap-3 justify-content-center mt-5">
        {books?.map((book) => (
          <ExchangeCard key={book._id} book={book} />
        ))}
      </div>
    </>
  );
}
