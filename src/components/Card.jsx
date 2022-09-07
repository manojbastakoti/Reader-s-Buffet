import "../styles/Card.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarRatingComponent from "react-star-rating-component";

function ProductCard(props) {
  const [rating, setRating] = useState(0);

  const handleClick = (rate) => {
    setRating(rate);
  };
  return (
    <Card className="overflow-hidden" id="product">
      <div className="img-cont ">
        <Card.Img variant="top" src={props.img} />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Rs. {props.price}</Card.Text>
        <div className="row">
          <div className="col-6">
            <Button variant="primary" className="w-100">
              Buy
            </Button>
          </div>
          <div className="col">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={3}
              editing={false}
              // onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

// SPA
