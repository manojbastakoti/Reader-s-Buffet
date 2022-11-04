import "../styles/Card.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarRatingComponent from "react-star-rating-component";
import { LinkContainer } from "react-router-bootstrap";

function BuyCard({ book: { _id, title, price, cover, rating } }) {
  return (
    <>
      <LinkContainer to={`/book/buy/${_id}`}>
        <Card className={`overflow-hidden`} id="product">
          <div className="img-cont ">
            <Card.Img
              variant="top"
              src={process.env.REACT_APP_BASE_API + cover}
            />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Rs. {price}</Card.Text>
            <div className="row">
              <div className="col-6">
                <LinkContainer to={`/confirm/${_id}`}>
                  <Button
                    variant="outline-dark"
                    className="w-100"
                    // onClick={(e) => {
                    //   setExchangeModelVisible(true);
                    //   e.stopPropagation();
                    // }}
                  >
                    Buy
                  </Button>
                </LinkContainer>
              </div>
              <div className="col">
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating || 0}
                  editing={false}
                  // onStarClick={this.onStarClick.bind(this)}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </LinkContainer>
    </>
  );
}

export default BuyCard;
