import React from "react";
import BlogSidebar from "./BlogSidebar";
import BlogPosts from "./BlogPosts";
import BlogHeader from "./BlogHeader";
import "../styles/Blog.css";
import BlogBody from "./BlogBody";
import PostDetailsPage from "./PostDetailsPage";

export default function Blog() {
  return (
    <>
      {/* <BlogHeader/>
      <div className="blogHome">
        <BlogBody/>
        <BlogSidebar />
      </div> */}

      <PostDetailsPage/>
    </>
  );
}
