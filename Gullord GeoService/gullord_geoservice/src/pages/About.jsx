import React from "react";
import Footer from "../components/Footer";
function About() {
  return (
    <div className="about_container">
      <div className="about">
        <h1>About Us</h1>
        <p>
          Welcome to our Land Surveying Company! We specialize in providing
          accurate and reliable surveying services to meet your needs. With
          years of experience and a commitment to excellence, we help our
          clients make informed decisions by delivering precise measurements and
          detailed reports.
        </p>
        <p>
          Our team of skilled professionals uses the latest technology and
          industry practices to ensure the highest quality of service. Whether
          you need boundary surveys, topographic mapping, or construction
          staking, we are here to assist you every step of the way.
        </p>
        <p>
          Thank you for choosing us as your trusted partner in land surveying.
          We look forward to working with you!
        </p>
      </div>
      <div className="about_img_container">
        <img className="about_img" src="./töömees.jpg" alt="" />
        <img className="about_img" src="https://i.postimg.cc/hPzMkCgS/IMG-0553.jpg" alt="" />
        <img className="about_img" src="https://i.postimg.cc/13DBtff2/IMG-0555.jpg" alt="" />
        <img className="about_img" src="https://i.postimg.cc/dtbnw8tG/IMG-0552.jpg" alt="" />
        <img className="about_img" src="https://i.postimg.cc/fbKvcp7v/IMG-0556.jpg" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default About;
