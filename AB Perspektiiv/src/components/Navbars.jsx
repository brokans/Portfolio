import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function getNavLinkClass({ isActive }) {
  return isActive ? "nav-link site-nav-link is-active" : "nav-link site-nav-link";
}

function Navbars() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navigation fixed-top"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="logo" src="/Must.png" alt="AB Perspektiiv logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="site-nav ms-auto">
            <Nav.Item>
              <NavLink to="/arhitektuur" className={getNavLinkClass}>
                Arhitektuur
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/sisearhitektuur" className={getNavLinkClass}>
                Sisearhitektuur
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/services" className={getNavLinkClass}>
                Teenused
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/contacts" className={getNavLinkClass}>
                Kontaktid
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
