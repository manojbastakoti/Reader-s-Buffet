import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";

export default function MyCarousel() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="text-center">
          <img
            className="d-block w-100"
            src="./assets/Carousel01.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>"A good bookshop is not just about selling books from shelves, but reaching out into the world and making a difference."</h1>
            <p>~David Almond</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/Carousel02.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>“You can never get a cup of tea large enough or a book long enough to suit me.” </h1>
            <p>~C.S. Lewis</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/Carousel03.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>If there is a book that you want to read, but it hasn’t been written yet, you must be the one to write it.</h1>
            <p>
              ~Toni Morrison
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
