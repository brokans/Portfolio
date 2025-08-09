import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="nav-bar">
        <div>
          <a className="logo-a" href="/">
            <img className="logo" src="/logo.png" alt="" />
          </a>
        </div>
        <div className="nav-buttons">
          <div className="burger-menu" onClick={toggleMenu}>
            <div className={`burger-bar ${isOpen ? "open" : ""}`}></div>
            <div className={`burger-bar ${isOpen ? "open" : ""}`}></div>
            <div className={`burger-bar ${isOpen ? "open" : ""}`}></div>
          </div>
          <div className={`menu-items ${isOpen ? "open" : ""}`}>
            <a className="ahref" href="/services">
              <p className="nav-button">Services</p>
            </a>
            <a className="ahref" href="/projects">
              <p className="nav-button">Portfolio</p>
            </a>
            <a className="ahref" href="/contacts">
              <p className="nav-button">Contacts</p>
            </a>
            <a className="ahref" href="/about">
              <p className="nav-button">About</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
