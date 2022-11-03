import "../styles/Navbar.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { Badge, OverlayTrigger, Popover } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { setExchangeTokenCount } from "../redux/slices/exchangeSlice";
import SearchBox from "./SearchBox";

function Appbar() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { exchangeTokenCount } = useSelector((state) => state.exchange);

  // fetch exchange token count
  useQuery(
    ["exchange-token-count"],
    async () => axios.get("/exchange/token-count"),
    {
      enabled: isAuthenticated,
      onSuccess: (data) => {
        if (data.status === 200) {
          dispatch(setExchangeTokenCount(data.data.count));
        }
      },
    }
  );

  const exchangeTokenPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Exchange Tokens</Popover.Header>
      <Popover.Body>
        {exchangeTokenCount > 0 ? (
          <>
            You have {exchangeTokenCount} exchange tokens. It means you can
            borrow {exchangeTokenCount} books from others.
          </>
        ) : (
          <>You have no exchange tokens.</>
        )}
        <br />
        To increase the token count, you can add more books that you have
        already read.
      </Popover.Body>
    </Popover>
  );

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>Reader's Buffet</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            defaultActiveKey="/"
            className=" my-2 me-auto my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Navbar.Text className="me-3 navLink">Home</Navbar.Text>
            </LinkContainer>
            <NavDropdown
              title="All Books"
              id="navbarScrollingDropdown"
              className="me-3"
            >
              <LinkContainer to="/buy">
                <NavDropdown.Item href="#action3">Buy</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/exchange">
                <NavDropdown.Item href="#action4">Exchange</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/blog">
              <Navbar.Text className="me-3 navLink">Blog</Navbar.Text>
            </LinkContainer>

            {isAuthenticated ? (
              <LinkContainer to="/blog/create-post">
                <Navbar.Text className="me-3 navLink">Write</Navbar.Text>
              </LinkContainer>
            ) : (
              <></>
            )}

            <LinkContainer to="/contact">
              <Navbar.Text className="me-3 navLink">Contact</Navbar.Text>
            </LinkContainer>
          </Nav>

          <SearchBox />

          <div className="d-flex gap-2 ms-4">
            {isAuthenticated ? (
              <>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={exchangeTokenPopover}
                  rootClose
                >
                  <Badge
                    bg="warning"
                    className="text-black d-flex align-items-center gap-2"
                    title="This represents the number of books you can borrow from others."
                  >
                    {exchangeTokenCount || 0} <Icon.PiggyBank size={20} />
                  </Badge>
                </OverlayTrigger>
                <LinkContainer to="/profile">
                  <Button variant="outline-dark" className="navLink">
                    Profile
                  </Button>
                </LinkContainer>

                <Button
                  variant="outline-secondary"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Navbar.Text className="navLink">Login</Navbar.Text>
                </LinkContainer>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Appbar;

// Added comment
