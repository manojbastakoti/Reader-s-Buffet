import React from "react";
import "../styles/PostDetailsPage.css";
import BlogSidebar from "./BlogSidebar";
import SinglePost from "./SinglePost";

export default function PostDetailsPage() {
  return (
    <>
      <div className="postDetailsPage">
        <div class="container-fluid">
          <div class="row ">
            <div className="abc col-sm-11 col-md-8 col-lg-9">
              <SinglePost />
            </div>
            <div className="def col-sm-8 col-md-4 col-lg-3">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
