import React from "react";
import "../styles/BlogSidebar.css";
import Image from "react-bootstrap/Image";
import * as Icon from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

export default function BlogSidebar() {
  return (
    <div className="blogSidebar d-flex flex-column gap-2 p-4">
      <div className="blogSidebarItem">
        <span className="blogSidebarTitle">ABOUT ME</span>
        <Image src="./assets/profile.jpg" alt="Profile" fluid />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione
          est eum doloribus illum magnam placeat
        </p>
      </div>
      <div className="blogSidebarItem">
        <span className="blogSidebarTitle">CATEGORIES</span>
        <ul className="blogSidebarList">
          <li className="blogSidebarListItem">Life</li>
          <li className="blogSidebarListItem">Music</li>
          <li className="blogSidebarListItem">Style</li>
          <li className="blogSidebarListItem">Sport</li>
          <li className="blogSidebarListItem">Cinema</li>
          <li className="blogSidebarListItem">Tech</li>
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
