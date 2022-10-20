import React from "react";
import "../styles/BlogPosts.css";
import Post from "./Post";

export default function BlogPosts() {
  return (
    <>
      <div className="blogPosts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
