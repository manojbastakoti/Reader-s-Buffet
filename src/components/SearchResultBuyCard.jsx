import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "../styles/SearchResultCard.css";
import { LinkContainer } from "react-router-bootstrap";

export default function SearchResultCard({ book }) {
  return (
    <Card className="w-100 img-thumbnail searchResultCard">
      <Row className="g-3 h-100">
        <Col
          xs="4"
          className="h-100 d-flex justify-content-center align-items-center thumbnail-cont"
        >
          <div
            className="cover-blur-bg h-100 w-100"
            style={{
              background: `url(${process.env.REACT_APP_BASE_API}${book.cover})`,
            }}
          ></div>
          <img
            src={process.env.REACT_APP_BASE_API + book.cover}
            alt="book cover"
            className="thumbnail"
          />
        </Col>
        <Col xs="8" className="p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5>{book.title}</h5>
            <h5 className="text-muted">Rs. {book.price}</h5>
          </div>
          <br/>
          <p className="text-muted mb-1">By {book.author}</p>{" "}
          {book.genre.map((genre) => (
            <Badge key={genre._id}>{genre.name}</Badge>
          ))}
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={3}
            editing={false}
            // onStarClick={this.onStarClick.bind(this)}
          />
          <div className="d-flex justify-content-end flex-grow-1 align-items-end">
            <LinkContainer to={`/book/${book._id}`}>
              <Button>View</Button>
            </LinkContainer>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
