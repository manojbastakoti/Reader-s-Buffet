import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { setUser } from "../redux/slices/authSlice";
import ProductCard from "./Card";

export default function Profile() {
  const dispatch = useDispatch();

  const getUser = () => axios.get("/user/current-user");
  const getBooks = () => axios.get("/book/all");

  const [userResult, bookResult] = useQueries({
    queries: [
      {
        queryKey: ["current-user", 1],
        queryFn: getUser,
        onSuccess: (data) => {
          if (data.status === 200) {
            dispatch(setUser(data.data.data));
          }
        },
        onError: (error) => {
          console.log(error);
        },
      },
      {
        queryKey: ["my-books", 2],
        queryFn: getBooks,
        onSuccess: (data) => {
          if (data.status === 200) {
            // dispatch(setUser(data.data.data));
          }
        },
        onError: (error) => {
          console.log(error);
        },
      },
    ],
  });

  // const {
  //   data: { userData },
  //   isLoading: isUserLoading,
  //   isError: isUserError,
  // } = userResult;

  // const {
  //   data: { books },
  //   isLoading: isBookLoading,
  //   isError: isBookError,
  // } = bookResult;

  console.log(bookResult);

  if (userResult.isLoading || bookResult.isLoading)
    return <div>Loading...</div>;
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

            <h4 className="text-center">
              {userResult.data.data.data.fullName}
            </h4>
            <h6 className="text-center">
              {userResult.data.data.data.username}
            </h6>
            <p>{userResult.data.data.data.email}</p>
            <p>{userResult.data.data.data.phone}</p>
          </Card>
        </Col>
        <Col xs={9}>
          <Card className="shadow-sm p-3 w-100 h-auto">
            <div className="d-flex justify-content-between  align-items-center mb-3">
              <h4>My Books</h4>
              <LinkContainer to="/add-book">
                <Button variant="primary">Add Book</Button>
              </LinkContainer>
            </div>
            <h6>
              Books listed here are visible and available to anyone for
              exchange.
            </h6>
            <Card className="p-2 w-100 h-auto d-flex  flex-row gap-2 flex-wrap">
              {bookResult?.data?.data?.data?.books.length !== 0 ? (
                bookResult?.data?.data?.data?.books.map((book) => (
                  <ProductCard
                    key={book._id}
                    book={book}
                    title={book.title}
                    price={book.price}
                    img={process.env.REACT_APP_BASE_API + book.cover}
                  />
                ))
              ) : (
                <div>
                  <span className="text-center">
                    You don't have any books listed. <br />
                    <LinkContainer to="/add-book">
                      <b role="button" className="text-primary ">
                        Click here{" "}
                      </b>
                    </LinkContainer>
                    to add books.
                  </span>
                </div>
              )}
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
