import React from "react";
import "../styles/BlogBody.css";
import BlogSidebar from "./BlogSidebar";
import BlogPosts from "./BlogPosts";

export default function BlogBody() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row ">
          <div className="abc col-sm-11 col-md-8 col-lg-9">
            <BlogPosts />
           
          </div>
          <div className="def col-sm-8 col-md-4 col-lg-3">
            <BlogSidebar />
          
          </div>
        </div>
      </div>
    </div>
  );
}
