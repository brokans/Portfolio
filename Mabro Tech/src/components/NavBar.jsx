import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/NavBarCustom.css";

function NavBar() {
  const { t, i18n } = useTranslation();
  return (
    <Navbar
      className="navbar custom-navbar"
      expand="lg"
      data-bs-theme="light"
      sticky="top"
      variant="dark"
    >
      <Container fluid className="navbar-inner-container">
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center"
          aria-label="Mabro Tech avaleht"
        >
          <img className="logo" src="/favicon.ico" alt="Mabro Tech logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Item>
              <Nav.Link href="/">{t("nav_home")}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/services">{t("nav_services")}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contacts">{t("nav_contacts")}</Nav.Link>
            </Nav.Item>
            <Nav.Item
              style={{
                marginLeft: 12,
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-language"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    height: "32px",
                    boxShadow: "none",
                    marginTop: "-2px",
                  }}
                >
                  <img
                    src={
                      i18n.language === "et"
                        ? "/flags/et.png"
                        : i18n.language === "en"
                        ? "/flags/en.png"
                        : "/flags/ru.png"
                    }
                    alt={i18n.language}
                    style={{
                      height: "24px",
                      width: "36px",
                      objectFit: "cover",
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginTop: "-6px",
                    }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => i18n.changeLanguage("et")}
                    active={i18n.language === "et"}
                  >
                    <img
                      src="/flags/et.png"
                      alt="Eesti"
                      style={{
                        height: "20px",
                        width: "30px",
                        marginRight: 8,
                        objectFit: "cover",
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    Eesti
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => i18n.changeLanguage("en")}
                    active={i18n.language === "en"}
                  >
                    <img
                      src="/flags/en.png"
                      alt="English"
                      style={{
                        height: "20px",
                        width: "30px",
                        marginRight: 8,
                        objectFit: "cover",
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    English
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => i18n.changeLanguage("ru")}
                    active={i18n.language === "ru"}
                  >
                    <img
                      src="/flags/ru.png"
                      alt="Русский"
                      style={{
                        height: "20px",
                        width: "30px",
                        marginRight: 8,
                        objectFit: "cover",
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    Русский
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
