import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoIosLogIn } from "react-icons/io";

function Topbar() {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Rid-eer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-dark m-2">
            <a href="#">
              <IoIosLogIn />
            </a>
            Login
          </Button>
          <Button variant="outline-dark m-2">
            <a href="#">
              <IoIosLogIn />
            </a>
            Register
          </Button>
          <Button variant="outline-dark m-2">
            <a href="#">
              <IoIosLogIn />
            </a>
            Chart (0)
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
