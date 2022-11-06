import "./App.css";
import Navbar from "./components/Navbar";
// import Carousel from "./components/Carousel";
import "./styles/Carousel.css";
// import ProductCard from "./components/Card";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AddBook from "./components/AddBook";
import { useQueryClient } from "@tanstack/react-query";
import BookDetails from "./components/BookDetails";
import SearchResult from "./components/SearchResult";
import PostDetailsPage from "./components/PostDetailsPage";
import AddPost from "./components/AddPost";
import AddBuyBook from "./components/AddBuyBook";
import BuyBookDetails from "./components/BuyBookDetails";
import Confirm from "./components/Confirm";
import socket from "./utils/Socket";

function App() {
  const queryClient = useQueryClient();
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.connected);
    });

    return () => {
      socket.off("connect");
    };
  }, []);
  useEffect(() => {
    queryClient.invalidateQueries(["current-user", 1]);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/book/buy/:bookId" element={<BuyBookDetails />} />

          <Route path="/search" element={<SearchResult />} />
          <Route path="blog/:postId" element={<PostDetailsPage />} />
          <Route path="blog/create-post" element={<AddPost />} />
          <Route path="/add-buy-book" element={<AddBuyBook />} />
          <Route path="/confirm/:bookId" element={<Confirm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
