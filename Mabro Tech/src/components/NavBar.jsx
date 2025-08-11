import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/NavBarCustom.css";

function NavBar() {
  return (
    <Navbar
      className="navbar custom-navbar"
      expand="lg"
      data-bs-theme="light"
      sticky="top"
      variant="dark"
    >
      <Container fluid className="navbar-inner-container">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img className="logo" src="/logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/">Avaleht</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/services">Teenused</Nav.Link>
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
