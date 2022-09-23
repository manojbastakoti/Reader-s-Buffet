import React from "react";
import Carousel from "./Carousel";
import "../styles/Carousel.css";
import ExchangeCard from "./ExchangeCard";
import ProductCard from "./Card";
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

      <section className="d-flex flex-column gap-4 p-4 ">
        <h3 className="text-center">Exchange</h3>
        <div className="d-flex  flex-wrap gap-3  mt px-4">
          {books?.map((book) => (
            <ExchangeCard key={book._id} book={book} />
          ))}
        </div>
      </section>
      <section className="d-flex flex-column gap-4 p-4 border mt-5 ">
        <h3 className="text-center">Buy</h3>
        <div className="d-flex  flex-wrap gap-3   px-4">
          {books?.map((book) => (
            <ProductCard key={book._id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
}
