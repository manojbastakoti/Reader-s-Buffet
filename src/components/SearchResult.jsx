import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useQuery as useRouteQuery } from "../hooks/useQuery";

export default function SearchResult() {
  const query = useRouteQuery();
  const q = query.get("q");

  const { data } = useQuery(["search", q], () => {
    return axios.get(`/book/search?q=${q}`);
  });

  return <div>{JSON.stringify(data)}</div>;
}
