import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar
      className="navbar"
      expand="lg"
      data-bs-theme="light"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img className="logo" src="/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/">Avaleht</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">Meist</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contacts">Kontaktid</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
