import React, { useEffect, useState } from "react";
import BlogHeader from "./BlogHeader";
import "../styles/Blog.css";
import BlogSidebar from "./BlogSidebar";
import BlogPosts from "./BlogPosts";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/blog"+search);
      setPosts(res.data)
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <BlogHeader />
      <div className="container-fluid">
        <div className="row ">
          <div className="abc col-sm-11 col-md-8 col-lg-9">
            <BlogPosts posts = {posts} />
          </div>
          <div className="def col-sm-8 col-md-4 col-lg-3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
