import React from 'react'
import Carousel from './Carousel'
import "../styles/Carousel.css"
import ProductCard from './Card'

export default function Homepage() {
  return (
    <>
    <div><Carousel/></div>

    <div className="d-flex flex-wrap gap-3 justify-content-center mt-5">
                <ProductCard title="Harry Potter" price="Rs.450"img="assets/harry.webp"/>


                <ProductCard title="The Kite Runner" price="Rs.460" img="assets/kite.jpg"/>


                <ProductCard title="Alchemist" price="Rs.500" img="assets/alchemist.jpg"/>

                <ProductCard title="Karnali Blues" price="Rs.400" img="assets/karnali.jpg"/>

                <ProductCard title="Seto Dharti" price="Rs.550" img="assets/seto.jpeg"/>
                <ProductCard title="Palpasa Cafe" price="Rs.600" img="assets/palpasa.jpg"/>
                <ProductCard title="Summer Love" price="Rs.400" img="assets/summer.jpg"/>
                <ProductCard title="Pagal Basti" price="Rs.500" img="assets/pagal.jpg"/>
                <ProductCard title="Muglan" price="Rs.400" img="assets/muglan.jpg"/>
                <ProductCard title="Karodau Kasturi" price="Rs.350" img="assets/kasturi.jpg"/>


                </div>



    </>
  )
}
