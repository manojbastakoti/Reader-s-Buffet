import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/Carousel.css'

export default function MyCarousel() {
  return (
    <div><Carousel fade>
    <Carousel.Item text-center>
      <img
        className="d-block w-100"
        src="./assets/Carousel01.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h1>First slide label</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./assets/Carousel02.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h1>Second slide label</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./assets/Carousel03.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h1>Third slide label</h1>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}
