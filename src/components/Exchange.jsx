import React from "react";
import useQuery, { useQuery as useRouteQuery } from "../hooks/useQuery";
import axios from "axios";
import BookDetails from "./BookDetails";
import ExchangeDialog from "./ExchangeDIalog";
import { Card, Container } from "react-bootstrap";

export default function Exchange() {
  return (
    <Container>
      <Card>Exchange</Card>
    </Container>
  );
}
