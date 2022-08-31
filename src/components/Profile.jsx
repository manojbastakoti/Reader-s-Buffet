import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import ProductCard from "./Card";

export default function Profile() {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery(
    ["current-user"],
    () => axios.get("/user/current-user"),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          dispatch(setUser(data.data.data));
        }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  return (
    <Container fluid>
      <Row className="p-3 g-3">
        <Col xs={3}>
          <Card className="shadow-sm p-3 w-100">
            <Image
              roundedCircle
              src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
              className="w-50 mx-auto"
            />

            <h4 className="text-center">{data.data.data.fullName}</h4>
            <h6 className="text-center">{data.data.data.username}</h6>
            <p>{data.data.data.email}</p>
            <p>{data.data.data.phone}</p>
          </Card>
        </Col>
        <Col xs={9}>
          <Card className="shadow-sm p-3 w-100 h-auto">
            <div className="d-flex justify-content-between  align-items-center mb-3">
              <h4>My Books</h4>
              <Button variant="primary">Add Book</Button>
            </div>
            <h6>
              Books listed here are visible and available to anyone for
              exchange.
            </h6>
            <Card className="p-2 w-100 h-auto d-flex  flex-row gap-2 flex-wrap">
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />{" "}
              <ProductCard
                title="Harry Potter"
                price="Rs.450"
                img="assets/harry.webp"
              />
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
