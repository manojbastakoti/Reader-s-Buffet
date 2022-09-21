import React from "react";
import Carousel from "./Carousel";
import "../styles/Carousel.css";
import ProductCard from "./Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
          <ProductCard
            key={book._id}
            title={book.title}
            price={book.price}
            img={process.env.REACT_APP_BASE_API + book.cover}
          />
        ))}
      </div>
    </>
  );
}
