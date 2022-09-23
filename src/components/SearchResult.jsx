import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useQuery as useRouteQuery } from "../hooks/useQuery";
import SearchFilter from "./SearchFilter";
import SearchResultCard from "./SearchResultCard";

export default function SearchResult() {
  const navigate = useNavigate();
  const query = useRouteQuery();

  const q = query.get("q");

  const { data, isError, isLoading } = useQuery(
    ["search", q],
    () => {
      return axios.post(`/book/search?q=${q}`);
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );

  const result = data?.data;

  useLayoutEffect(() => {
    if (!q) {
      navigate("/");
    }
  }, []);

  if (!q) return <div>A search query is required.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!result || isError) return <div>Something went wrong!</div>;

  return (
    <Container fluid className="p-3">
      <Row className="g-3 gap-3 m-0 p-0">
        <Col className="border p-3 h-100 position-sticky top-0" xs="3">
          <SearchFilter query={q} />
        </Col>
        <Col className="border p-3 " xs="6">
          {/* <Container className="w-50 mx-auto"> */}
          {/* <Card className="w-100 p-3 h-auto">
            <h4>Search books</h4>
            <SearchBox />
          </Card> */}
          {/* </Container> */}
          <h4>Results for {JSON.stringify(q)}</h4>
          <hr />
          <div className="d-flex flex-column gap-3">
            {result?.length < 1 ? (
              <h5>Nothing was found for the search term {JSON.stringify(q)}</h5>
            ) : (
              <>
                <p>
                  {result.length === 1
                    ? result.length + " result found"
                    : result.length + " results found"}{" "}
                </p>
                {result?.map((book) => (
                  <SearchResultCard key={book._id} book={book} />
                ))}
              </>
            )}
          </div>
        </Col>
        <Col></Col>
      </Row>
      {/* {JSON.stringify(data)} */}
    </Container>
  );
}
