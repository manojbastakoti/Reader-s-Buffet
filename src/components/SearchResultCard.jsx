import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "../styles/SearchResultCard.css";

export default function SearchResultCard() {
  return (
    <Card className="w-100 img-thumbnail searchResultCard">
      <Row className="g-3 h-100">
        <Col
          xs="4"
          className="h-100 d-flex justify-content-center align-items-center thumbnail-cont"
        >
          <div
            className="cover-blur-bg h-100 w-100"
            style={{ background: `url(/assets/muglan.jpg)` }}
          ></div>
          <img
            src="/assets/muglan.jpg"
            alt="book cover"
            className="thumbnail"
          />
        </Col>
        <Col xs="8" className="p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Karodau Kasturi</h5>
            <h5 className="text-muted">Rs. 599</h5>
          </div>
          <p className="text-muted mb-1">By Manoj Bastakoti</p>{" "}
          <Badge>Action</Badge>{" "}
          <p className="text-muted mb-0">Owned by Abhishek Ram</p>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={3}
            editing={false}
            // onStarClick={this.onStarClick.bind(this)}
          />
          <div className="d-flex justify-content-end flex-grow-1 align-items-end">
            <Button>View</Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
