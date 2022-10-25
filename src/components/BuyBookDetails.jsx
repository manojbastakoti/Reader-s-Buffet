import React from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useQuery as useRouteQuery } from "../hooks/useQuery";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import "../styles/BookDetails.css";
import { LinkContainer } from "react-router-bootstrap";
import Loading from "./Loading";
import { toast } from "react-toastify";
import StarRatingComponent from "react-star-rating-component";
import { useState } from "react";
export default function BuyBookDetails(props) {
  const [ratingModal, setRatingModal] = useState(false);
  const query = useRouteQuery();
  let { bookId } = useParams();
  const queryClient = useQueryClient();
  if (!bookId) {
    bookId = query.get("bookId");
  }

  const { data, isLoading, isError } = useQuery(
    [bookId],
    async () => axios.get("/book/buy/" + bookId),
    {
      enabled: !!bookId,
    }
  );

  const book = data?.data?.data;

  if (isLoading) return <Loading />;
  if (isError || !book) return <div>Something went wrong!</div>;
  return (
    <>
      <Container fluid className="my-4">
        <Row>
          <Col
            xs={4}
            className={
              "border d-flex justify-content-center align-items-center p-3"
            }
          >
            <Image
              src={process.env.REACT_APP_BASE_API + book?.cover}
              className="img-fluid w-75 rounded shadow"
            />
          </Col>
          <Col className="border p-3">
            <h5 className="text-muted">About the book</h5>
            <hr />
            <Row>
              <Col className="p-0">
                <h2>{book?.title} </h2>
              </Col>
              <Col className="d-flex gap-2 justify-content-end">
                <Button variant="bg-none shadow-none wishlistButton ">
                  <Icon.Heart />
                  {/* <Icon.HeartFill /> */}
                  <br />
                  Wishlist
                </Button>
              </Col>
            </Row>
            <small className="text-muted">By {book?.author}</small>
            <h4>Rs. {book?.price}</h4>
            <p>Published on {book?.publishedDate}</p>
            {book?.genre?.map((g) => (
              <p>
                Genre :
                <b>
                  <i className="genre">{g.name}</i>
                </b>
              </p>
              // <Badge key={g._id}>{g.name}</Badge>
            ))}

            <p>{book?.description}</p>
            <hr />

            {!props.viewOnly && (
              <>
                <div>
                  <h5 className="text-muted">Rating</h5>
                  <p
                    className="d-flex align-items-center gap-2 mb-0"
                    style={{ fontSize: "20px" }}
                  >
                    <span
                      style={{ fontSize: "25px" }}
                      className="d-flex align-items-center"
                    >
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={3.9}
                        editing={false}
                        // onStarClick={this.onStarClick.bind(this)}
                      />{" "}
                    </span>
                    3.9
                  </p>
                  <span
                    role="button"
                    className="text-info "
                    variant="none"
                    onClick={() => setRatingModal(true)}
                  >
                    Rate this book
                  </span>
                </div>
                <br />
                <hr />
                <p className="d-flex gap-2">
                  <Button variant="outline-success">
                    Buy
                  </Button>
                </p>
              </>
            )}
          </Col>
        </Row>
      </Container>
      <RatingModal show={ratingModal} onHide={() => setRatingModal(false)} />
    </>
  );
}

const RatingModal = (props) => {
  const [rating, setRating] = useState(1);
  return (
    <form>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Rate this book
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Select a rating and click submit to rate this book. Your rating will
            be anonymous.
          </p>
          <span
            style={{ fontSize: "55px" }}
            className="d-flex align-items-center justify-content-center"
          >
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              editing={true}
              onStarClick={(value) => setRating(value)}
            />{" "}
          </span>
          <p className="text-center">You are rating {rating} stars.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger" type="button">
            Close
          </Button>
          <Button type="submit">Submit rating</Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};
