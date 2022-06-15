import '../styles/Navbar.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function Appbar(){
    return <Navbar bg="light" expand="lg" sticky='top'>
    <Container fluid>
      <LinkContainer to="/">
        <Navbar.Brand>Reader's Buffet</Navbar.Brand>
        </LinkContainer>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
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
            <NavDropdown.Item href="#action4">
              Exchange
            </NavDropdown.Item>
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
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}
export default Appbar