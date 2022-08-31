import "./App.css";
import Navbar from "./components/Navbar";
// import Carousel from "./components/Carousel";
import "./styles/Carousel.css";
// import ProductCard from "./components/Card";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Buy from "./components/Buy";
import Exchange from "./components/Exchange";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Verification from "./components/Verification";
import PasswordReset from "./components/PasswordReset";
import Profile from "./components/Profile";

// import Example from "./components/Example";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/password-reset" element={<PasswordReset />} />

          {/* <Route path="/example" element={<Example/>}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
