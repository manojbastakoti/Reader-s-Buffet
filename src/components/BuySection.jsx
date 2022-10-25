import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import BuyCard from "./BuyCard";
import Loading from "./Loading";

export default function BuySection() {
  const { data, isLoading, isError } = useQuery(["all-buyBooks"], async () =>
    axios.get("/book/buy/all")
  );

  const books = data?.data?.data?.buybooks;

  if (isLoading) return <Loading />;
  if (isError) return <div>Something went wrong!</div>;

  return (
    <section className="d-flex flex-column gap-4 p-4 ">
      <h3 className="text-center">Buy</h3>
      {books?.length === 0 ? (
        <h5 className="text-center">
          Sorry, we don't have any books right now...
        </h5>
      ) : (
        <div className="d-flex  flex-wrap gap-3  mt px-4">
          {books?.map((book) => (
            <BuyCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
}
