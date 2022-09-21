import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useQuery as useRouteQuery } from "../hooks/useQuery";
import SearchBox from "./SearchBox";
import SearchResultCard from "./SearchResultCard";

export default function SearchResult() {
  const query = useRouteQuery();
  const q = query.get("q");

  const { data } = useQuery(["search", q], () => {
    return axios.get(`/book/search?q=${q}`);
  });

  const result = data?.data;

  return (
    <Container fluid className="p-3">
      <Container className="w-50 mx-auto">
        <Card className="w-100 p-3 h-auto">
          <h4>Search books</h4>
          <SearchBox />
        </Card>
      </Container>
      <Row className="g-3 gap-3 m-0 p-0">
        <Col className="border p-3 " xs="3">
          <h4>Filters</h4>
        </Col>
        <Col className="border p-3 " xs="6">
          <h4>Results</h4>
          <hr />
          {result?.map((book) => (
            <SearchResultCard key={book._id} book={book} />
          ))}
        </Col>
        <Col></Col>
      </Row>
      {/* {JSON.stringify(data)} */}
    </Container>
  );
}
