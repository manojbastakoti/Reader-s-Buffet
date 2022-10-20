import React from "react";
import Image from "react-bootstrap/Image";
import "../styles/Post.css";

export default function Post() {
  return (
    <>
      <div className="post">
        <div className="postImg">
          <Image src="./assets/8.jpg" alt="Posts" fluid />
        </div>

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Sample Story Title here</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          reiciendis hic dolorem ipsa sed rerum reprehenderit nostrum quod
          obcaecati ducimus amet molestias adipisci praesentium vel, id earum
          autem. Vel, cupiditate.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          reiciendis hic dolorem ipsa sed rerum reprehenderit nostrum quod
          obcaecati ducimus amet molestias adipisci praesentium vel, id earum
          autem. Vel, cupiditate.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          reiciendis hic dolorem ipsa sed rerum reprehenderit nostrum quod
          obcaecati ducimus amet molestias adipisci praesentium vel, id earum
          autem. Vel, cupiditate.
        </p>
      </div>
    </>
  );
}
