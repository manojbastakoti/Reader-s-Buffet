import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ExchangeCard from "./ExchangeCard";
import Loading from "./Loading";

export default function ExchangeSection() {
  const { data, isLoading, isError } = useQuery(["all-books"], async () =>
    axios.get("/book/all")
  );

  const books = data?.data?.data?.books;

  if (isLoading) return <Loading />;
  if (isError) return <div>Something went wrong!</div>;

  return (
    <section className="d-flex flex-column gap-4 p-4 ">
      <h3 className="text-center">Exchange</h3>
      {books?.length === 0 ? (
        <h5 className="text-center">
          Sorry, we don't have any books available for you to exchange
        </h5>
      ) : (
        <div className="d-flex  flex-wrap gap-3 justify-content-around mt px-4">
          {books?.map((book) => (
            <ExchangeCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
}
