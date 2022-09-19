import "../styles/Navbar.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { Badge, OverlayTrigger, Popover } from "react-bootstrap";

function Appbar() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const exchangeTokenPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Exchange Tokens</Popover.Header>
      <Popover.Body>
        {user?.exchangeTokenCount > 0 ? (
          <>
            You have {user?.exchangeTokenCount} exchange tokens. It means you
            can borrow {user?.exchangeTokenCount} books from others.
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
              <Navbar.Text className="me-2">Home</Navbar.Text>
            </LinkContainer>
            <LinkContainer to="/about">
              <Navbar.Text className="me-2">About</Navbar.Text>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Navbar.Text className="me-2">Contact</Navbar.Text>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Navbar.Text>Blog</Navbar.Text>
            </LinkContainer>
            <NavDropdown title="All Books" id="navbarScrollingDropdown">
              <LinkContainer to="/buy">
                <NavDropdown.Item href="#action3">Buy</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/exchange">
                <NavDropdown.Item href="#action4">Exchange</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">
              <Icon.Search size={20} />
            </Button>
          </Form>

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
                    {user?.exchangeTokenCount || 0} <Icon.PiggyBank size={20} />
                  </Badge>
                </OverlayTrigger>
                <LinkContainer to="/profile">
                  <Button variant="outline-dark" className="">
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
                  <Navbar.Text>Login</Navbar.Text>
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
