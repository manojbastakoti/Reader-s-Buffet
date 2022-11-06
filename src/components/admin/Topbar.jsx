import React from "react";
import "../../styles/Topbar.css";

import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <Link to="/" className="link">

          <span className="logo">Reader's Buffet</span>
          </Link>
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer">
          <Icon.Gear size={20} color="black" />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}