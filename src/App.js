import "./App.css";
import Navbar from "./components/Navbar";
// import Carousel from "./components/Carousel";
import "./styles/Carousel.css"
// import ProductCard from "./components/Card";
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Buy from "./components/Buy";
import Exchange from "./components/Exchange";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab,faCheckSquare,faCoffee)


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/buy" element={<Buy/>}/>
        <Route path="/exchange" element={<Exchange/>}/>
        <Route path="/contact" element={<Contact/>}/>


      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
