import React from "react";
import "../styles/BlogSidebar.css";
import Image from "react-bootstrap/Image";
import * as Icon from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { setNestedObjectValues } from "formik";
import { Link } from "react-router-dom";

export default function BlogSidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/category");
      setCats(res.data);
    };
    getCats();
  });
  return (
    <div className="blogSidebar d-flex flex-column gap-2 p-4">
      {/* <div className="blogSidebarItem">
        <span className="blogSidebarTitle">ABOUT ME</span>
        <Image src="./assets/profile.jpg" alt="Profile" fluid />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione
          est eum doloribus illum magnam placeat
        </p>
      </div> */}
      <div className="blogSidebarItem">
        <span className="blogSidebarTitle">CATEGORIES</span>
        <ul className="blogSidebarList">
          {cats.map((c) => (
            
            <Link className="link" to={`/blog?cat=${c._id}`}>
            <li className="blogSidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="blogSidebarItem">
        <span className="blogSidebarTitle">FOLLOW US</span>
        <div className="blogSidebarSocial">
          <i className="bi-alarm"></i>
          <Row className="blogSidebarIcons">
            <Nav defaultActiveKey="/">
              <Nav.Link href="/">
                <Icon.Instagram size={16} color="black" />
              </Nav.Link>
              <Nav.Link href="/about" eventKey="link-1">
                <Icon.Facebook size={16} color="black" />
              </Nav.Link>
              <Nav.Link href="/buy" eventKey="link-2">
                <Icon.Twitter size={16} color="black" />
              </Nav.Link>
              <Nav.Link href="/exchange" eventKey="link-3">
                <Icon.Youtube size={16} color="black" />
              </Nav.Link>
            </Nav>
          </Row>
        </div>
      </div>
    </div>
  );
}
