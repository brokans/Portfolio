import React from "react";
import Slider from "react-slick";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const settings = {
    dots: true, // Kuvab punktid (navigation dots)
    infinite: true, // Lõputu kerimine
    speed: 500, // Animatsiooni kiirus
    slidesToShow: 1, // Kuvab ühe pildi korraga
    slidesToScroll: 1, // Kerib ühe pildi korraga
    autoplay: true, // Automaatne kerimine
    autoplaySpeed: 3000, // Automaatse kerimise kiirus (ms)
  };
  return (
    <div className="projects_container">
      <div className="main-img-container">
        <img
          className="main-img"
          src="https://i.postimg.cc/GhB5xL5h/IMG-2595.jpg"
          alt=""
        />
      </div>
      <div className="projects">
        <h1>Portfolio</h1>
        <Slider {...settings}>
          <div className="project">
            <img
              src="https://i.postimg.cc/43pwXXrv/1b180091-fc4a-4214-8e42-b9045d563cd9.jpg"
              alt="Project 1"
            />
          </div>
          <div className="project">
            <img
              src="https://i.postimg.cc/P5g2GCFr/2e6fbfc6-0cc1-424c-87c2-26f670b8c388.jpg"
              alt="Project 2"
            />
          </div>
          <div className="project">
            <img
              src="https://i.postimg.cc/G2rK2ZCW/641b8853-d902-47f8-ad57-e8b18795b8d7.jpg"
              alt="Project 3"
            />
          </div>
          <div className="project">
            <img
              src="https://i.postimg.cc/L4xD9C0W/ec1101e4-9829-4382-8ff8-883e4d20e8a0.jpg"
              alt="Project 4"
            />
          </div>
          <div className="project">
            <img
              src="https://i.postimg.cc/nc7s6WRY/89927085-8252-4b37-88e9-112911487726.jpg"
              alt="Project 5"
            />
          </div>
        </Slider>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
