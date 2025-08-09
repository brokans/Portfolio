import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg" data-bs-theme="light" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img className="logo" src="/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#tests">Meist</Nav.Link>
            <Nav.Link href="#contacts">Kontaktid</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
