import React from "react";
import Image from 'react-bootstrap/Image'
import "../styles/BlogHeader.css";

export default function BlogHeader() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Stories and Posts</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <Image className="headerImg" src="./assets/draft2.jpg" alt='Header' fluid/>
      </div>
    </>
  );
}
