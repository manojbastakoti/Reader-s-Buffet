import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { setUser } from "../redux/slices/authSlice";
import ProductCard from "./Card";
import { fetchCurrentUser } from "../utils/fetchCurrentUser";
import Loading from "./Loading";

export default function Profile() {
  const dispatch = useDispatch();

  const getBooks = () => axios.get("/book/mine");
  const getExchangedBooks = () => axios.get("/book/exchanged");

  const [userResult, bookResult, exchangedBookResult] = useQueries({
    queries: [
      {
        queryKey: ["current-user", 1],
        queryFn: fetchCurrentUser,
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
      {
        queryKey: ["my-exchanged-books", 3],
        queryFn: getExchangedBooks,
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

  if (userResult.isLoading || bookResult.isLoading) return <Loading />;

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
        <Col xs={9} className="d-flex flex-column gap-3">
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
          <Card className="shadow-sm p-3 w-100 h-auto">
            <div className="d-flex justify-content-between  align-items-center mb-3">
              <h4>Exchanged Books</h4>
              <LinkContainer to="/add-book">
                <Button variant="primary">Add Book</Button>
              </LinkContainer>
            </div>
            <h6>You have obtained these books in exchange for your books.</h6>
            <Card className="p-2 w-100 h-auto d-flex  flex-row gap-2 flex-wrap">
              {exchangedBookResult?.data?.data?.data?.books.length !== 0 ? (
                exchangedBookResult?.data?.data?.data?.books.map((book) => (
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
                    You don't have any exchanged books. <br />
                    <LinkContainer to="/add-book">
                      <b role="button" className="text-primary ">
                        Click here{" "}
                      </b>
                    </LinkContainer>
                    to obtain books in exchange for your books.
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
