import React from "react";
import "../styles/BlogPosts.css";
import Post from "./Post";

export default function BlogPosts({ posts }) {

  console.log(posts)
  return (
    <>
      <div className="blogPosts">
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </>
  );
}
