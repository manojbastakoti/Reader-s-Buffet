import React from 'react'
import Carousel from './Carousel'
import "../styles/Carousel.css"

export default function Homepage() {
  return (
    <>
    <div><Carousel/></div>
    <div className="container"><h1 style= {{color:'red'}}>Put your cards here</h1> </div>
    </>
  )
}
