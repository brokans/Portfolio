import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

function Services() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const topic = queryParams.get("topic");

  useEffect(() => {
    if (topic) {
      const element = document.getElementById(topic);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [topic]);

  return (
    <div className="services_container">
      <div className="main-img-container">
        <img
          className="main-img"
          src="https://i.postimg.cc/7ZjDntVj/IMG-2379.jpg"
          alt=""
        />
      </div>
      <div className="intro-text">
        <h3>
          we are a full-service design / build studio specializing in urban
          gardens & outdoor spaces for residential & commercial clients
        </h3>
      </div>
      <hr />
      <div>
        <br />
        <h1>Services</h1>
        <div className="services">
          <div className="service" id="digitalization">
            <div className="service-img">
              <img src="https://i.postimg.cc/mg9XHm6d/IMG-0329.jpg" alt="" />
            </div>
            <div className="service-txt">
              <h3>Digitalization of Maps</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac
                habitasse platea dictumst quisque sagittis purus sit. Nisi vitae
                suscipit tellus mauris a diam maecenas. Pretium quam vulputate
                dignissim suspendisse in. A diam sollicitudin tempor id eu nisl
                nunc mi ipsum. Dictumst quisque sagittis purus sit amet
                volutpat.
              </p>
            </div>
          </div>
          <hr />
          <div className="service" id="land-surveying">
            <div className="service-img">
              <img
                src="https://i.postimg.cc/NMspZBGV/Maam-tmine-main.jpg"
                alt=""
              />
            </div>
            <div className="service-txt">
              <h3>Land Surveying</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac
                habitasse platea dictumst quisque sagittis purus sit. Nisi vitae
                suscipit tellus mauris a diam maecenas. Pretium quam vulputate
                dignissim suspendisse in. A diam sollicitudin tempor id eu nisl
                nunc mi ipsum. Dictumst quisque sagittis purus sit amet
                volutpat.
              </p>
            </div>
          </div>
          <hr />
          <div className="service" id="landscape-planning">
            <div className="service-img">
              <img src="https://i.postimg.cc/Z5PPm2Qh/IMG-0328.jpg" alt="" />
            </div>
            <div className="service-txt">
              <h3>Landscape Planning</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac
                habitasse platea dictumst quisque sagittis purus sit. Nisi vitae
                suscipit tellus mauris a diam maecenas. Pretium quam vulputate
                dignissim suspendisse in. A diam sollicitudin tempor id eu nisl
                nunc mi ipsum. Dictumst quisque sagittis purus sit amet
                volutpat.
              </p>
            </div>
          </div>
          <hr />
          <div className="service" id="garden-design">
            <div className="service-img">
              <img
                src="https://i.postimg.cc/nc7s6WRY/89927085-8252-4b37-88e9-112911487726.jpg"
                alt=""
              />
            </div>
            <div className="service-txt">
              <h3>Garden Design and Landscape Construction</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac
                habitasse platea dictumst quisque sagittis purus sit. Nisi vitae
                suscipit tellus mauris a diam maecenas. Pretium quam vulputate
                dignissim suspendisse in. A diam sollicitudin tempor id eu nisl
                nunc mi ipsum. Dictumst quisque sagittis purus sit amet
                volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
