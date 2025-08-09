import React from "react";
import Footer from "../components/Footer";
function Contacts() {
  return (
    <div className="contacts_container">
      <div className="main-img-container">
        <img
          className="main-img"
          src="https://i.postimg.cc/B6MVMX3t/IMG-2347.jpg"
          alt=""
        />
      </div>
      <div className="contacts">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p>
            <strong>EMAIL:</strong>
          </p>
          <p>
            <a href="mailto:sinuemail@gmail.com">sinuemail@gmail.com</a>
          </p>
          <p>
            <strong>ADDRESS:</strong>
          </p>
          <p>1234 Street Name, City, Country</p>
          <p>
            <strong>PHONE:</strong>
          </p>
          <p>+372 5555 5555</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
