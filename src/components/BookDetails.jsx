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
export default function BookDetails(props) {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [ratingModal, setRatingModal] = useState(false);
  const query = useRouteQuery();
  let { bookId } = useParams();
  const queryClient = useQueryClient();
  if (!bookId) {
    bookId = query.get("bookId");
  }

  const { data, isLoading, isError } = useQuery(
    [bookId],
    async () => axios.get("/book/" + bookId),
    {
      enabled: !!bookId,
    }
  );

  const wishListMutation = useMutation(
    async (id) => axios.post("/book/add-to-wishlist", { bookId: id }),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          toast.success(data.data.message);
        }
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Something went wrong!");
      },
    }
  );

  const { mutate } = useMutation(
    async (id) => axios.patch("/book/release", { bookId: id }),
    {
      onSuccess: () => {
        if (data.status === 200) {
          toast.success("Book released successfully");
          queryClient.invalidateQueries("exchange-token-count");
        }
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Something went wrong!");
      },
    }
  );

  const addToWishlist = () => {
    setIsAddedToWishlist((prev) => !prev);
    wishListMutation.mutate(bookId);
  };

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
                <Button
                  variant="bg-none shadow-none wishlistButton "
                  onClick={addToWishlist}
                >
                  {isAddedToWishlist ? (
                    <Icon.HeartFill className="text-danger" />
                  ) : (
                    <Icon.Heart className="text-danger" />
                  )}
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
                Genre:
                <b>
                  <i className="genre">{g.name}</i>
                </b>
              </p>
              // <Badge key={g._id}>{g.name}</Badge>
            ))}

            <p className="text-muted">
              Owned by <b>{book?.owner.fullName}</b>
            </p>
            <p>{book?.description}</p>
            <hr />

            {!props.viewOnly && (
              <>
                <div>
                  <h5 className="text-muted">Rating ({book?.ratingsCount})</h5>
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
                        value={book?.rating || 0}
                        editing={false}
                        // onStarClick={this.onStarClick.bind(this)}
                      />{" "}
                    </span>
                    {book?.rating}
                  </p>
                  {!!book?.myRating && (
                    <p className="text-muted">
                      You rated {book?.myRating} stars.
                    </p>
                  )}
                  {!book.isOwnedByMe && (
                    <span
                      role="button"
                      className="text-info "
                      variant="none"
                      onClick={() => setRatingModal(true)}
                    >
                      Rate this book
                    </span>
                  )}
                </div>
                <br />
                <hr />
                <p className="d-flex gap-2">
                  {!book?.isMine && (
                    <>
                      {book?.isHeldByMe ? (
                        <Button
                          variant="danger"
                          onClick={() => mutate(book?._id)}
                        >
                          Release book
                        </Button>
                      ) : (
                        <LinkContainer to={`/exchange?bookId=${book?._id}`}>
                          <Button variant="outline-primary">Get</Button>
                        </LinkContainer>
                      )}
                      {/* <Button variant="outline-success">Buy</Button> */}
                    </>
                  )}
                </p>
              </>
            )}
          </Col>
        </Row>
      </Container>
      {!book.isOwnedByMe && (
        <RatingModal
          show={ratingModal}
          onHide={() => setRatingModal(false)}
          bookId={bookId}
          initialRating={book?.myRating}
        />
      )}
    </>
  );
}

const RatingModal = (props) => {
  const [rating, setRating] = useState(props.initialRating || 1);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    async (payload) => axios.post("/book/rate-book", payload),
    {
      onSuccess: (data, variables) => {
        if (data.status === 200) {
          queryClient.invalidateQueries([props.bookId]);
          toast.success(`You rated ${variables.rating} stars.`);
          props.onHide();
        }
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Something went wrong!");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { rating, bookId: props.bookId };
    mutate(payload);
  };
  return (
    <form onSubmit={handleSubmit}>
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
          <Button type="submit" onClick={handleSubmit}>
            Submit rating
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};
