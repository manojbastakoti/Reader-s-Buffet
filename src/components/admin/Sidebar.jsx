import "../../styles/Sidebar.css";
import * as Icon from "react-bootstrap-icons";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (

    // <div className="sidebar">sidebar</div>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin/home" className="link">
              <li className="sidebarListItem ">
                <Icon.HouseDoor
                  size={20}
                  color="black"
                  className="sidebarIcon"
                />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/admin/users" className="link">
              <li className="sidebarListItem ">
                <Icon.People size={20} color="black" className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/admin/books" className="link">
              <li className="sidebarListItem">
                <Icon.Book size={20} color="black" className="sidebarIcon" />
                Books
              </li>
            </Link>
            <Link to="/admin/posts" className="link">
              <li className="sidebarListItem">
                <Icon.PencilSquare
                  size={20}
                  color="black"
                  className="sidebarIcon"
                />
                Blogs
              </li>
            </Link>
            <Link to="/admin/feedbacks" className="link">
              <li className="sidebarListItem">
                <Icon.ChatRightQuote
                  size={20}
                  color="black"
                  className="sidebarIcon"
                />
                Feedbacks
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
