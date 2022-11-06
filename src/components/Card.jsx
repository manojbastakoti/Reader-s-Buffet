// import "../styles/Card.css";
// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import StarRatingComponent from "react-star-rating-component";
// import { LinkContainer } from "react-router-bootstrap";

// function ExchangeCard({ book: { _id, title, price, cover } }) {
//   const [rating, setRating] = useState(0);

//   const handleClick = (rate) => {
//     setRating(rate);
//   };
//   return (
//     <LinkContainer to={`/book/${_id}`}>
//       <Card className="overflow-hidden" id="product">
//         <div className="img-cont ">
//           <Card.Img
//             variant="top"
//             src={process.env.REACT_APP_BASE_API + cover}
//           />
//         </div>
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>Rs. {price}</Card.Text>
//           <div className="row">
//             <div className="col-6">
//               <LinkContainer to={`/exchange?bookId=${_id}`}>
//                 <Button variant="success" className="w-100">
//                   Buy
//                 </Button>
//               </LinkContainer>
//             </div>
//             <div className="col">
//               <StarRatingComponent
//                 name="rate1"
//                 starCount={5}
//                 value={3}
//                 editing={false}
//                 // onStarClick={this.onStarClick.bind(this)}
//               />
//             </div>
//           </div>
//         </Card.Body>
//       </Card>
//     </LinkContainer>
//   );
// }

// export default ExchangeCard;
