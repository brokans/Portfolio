import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import i18n from "../i18n";

const LANGUAGES = [
  { code: "ee", label: "ET", name: "Eesti" },
  { code: "en", label: "EN", name: "English" },
  { code: "fi", label: "FI", name: "Suomi" },
  { code: "lv", label: "LV", name: "Latviešu" },
];

function getNavLinkClass({ isActive }) {
  return isActive ? "nav-link site-nav-link is-active" : "nav-link site-nav-link";
}

function changeLanguage(code) {
  i18n.changeLanguage(code);
  localStorage.setItem("language", code);
}

function Navbars() {
  const { t } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage || i18n.language;

  return (
    <Navbar expand="lg" className="navigation fixed-top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="logo" src="/Must.png" alt="AB Perspektiiv logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="site-nav ms-auto align-items-lg-center">
            <Nav.Item>
              <NavLink to="/arhitektuur" className={getNavLinkClass}>
                {t("nav.architecture")}
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/sisearhitektuur" className={getNavLinkClass}>
                {t("nav.interior")}
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/services" className={getNavLinkClass}>
                {t("nav.services")}
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/contacts" className={getNavLinkClass}>
                {t("nav.contact")}
              </NavLink>
            </Nav.Item>
            <Nav.Item className="site-lang-switcher" role="group" aria-label="Keel">
              {LANGUAGES.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  className={`site-lang-btn${
                    activeLanguage === language.code ? " is-active" : ""
                  }`}
                  onClick={() => changeLanguage(language.code)}
                  aria-pressed={activeLanguage === language.code}
                  aria-label={language.name}
                >
                  {language.label}
                </button>
              ))}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
