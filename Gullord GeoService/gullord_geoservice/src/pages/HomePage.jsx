import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="homepage_container">
      <div className="main-img-container">
        <img
          className="main-img"
          src="https://i.postimg.cc/BbzwfkX0/IMG-2486.jpg"
          alt=""
        />
      </div>
      <div className="home_main">
        <h1>Land surveying</h1>
        <div className="home_main_content">
          <div className="home_main_img_container">
            <img
              className="home_main_img"
              src="https://field.group/app/uploads/2023/06/Field-reference-network_bueno.jpg"
              alt=""
            />
          </div>
          <div className="home_main_txt">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac
              habitasse platea dictumst quisque sagittis purus sit. Nisi vitae
              suscipit tellus mauris a diam maecenas. Pretium quam vulputate
              dignissim suspendisse in. A diam sollicitudin tempor id eu nisl
              nunc mi ipsum. Dictumst quisque sagittis purus sit amet volutpat.
              Donec pretium vulputate sapien nec sagittis aliquam. Cras
              tincidunt lobortis feugiat vivamus at augue. Malesuada fames ac
              turpis egestas sed tempus. Donec adipiscing tristique risus nec
              feugiat. Potenti nullam ac tortor vitae purus faucibus. Aliquam
              nulla facilisi cras fermentum odio eu feugiat pretium nibh. Proin
              nibh nisl condimentum id venenatis a condimentum vitae. Et netus
              et malesuada fames ac turpis egestas integer. Nunc pulvinar sapien
              et ligula ullamcorper malesuada proin libero nunc. Cras fermentum
              odio eu feugiat pretium nibh ipsum consequat. Velit scelerisque in
              dictum non consectetur a erat. Sagittis id consectetur purus ut
              faucibus pulvinar. Lacinia quis vel eros donec ac. Tristique et
              egestas quis ipsum.
            </p>
          </div>
        </div>
        <h1>Services</h1>
        <div className="services_container_home">
          <div className="services_txt_home">
            <div className="service_home">
              <Link className="link_home" to="/services?topic=land-surveying">
                <img className="home_icon" src="/mapping.png" alt="" />
                <h3>Land Surveying</h3>
              </Link>
            </div>
            <div className="service_home">
              <Link
                className="link_home"
                to="/services?topic=landscape-planning"
              >
                <img className="home_icon" src="/planing.png" alt="" />
                <h3>Landscape Planning</h3>
              </Link>
            </div>
            <div className="service_home">
              <Link className="link_home" to={"/services?topic=digitalization"}>
                <img className="home_icon" src="/settings.png" alt="" />
                <h3>Digitalization of Maps</h3>
              </Link>
            </div>
            <div className="service_home">
              <Link className="link_home" to={"/services?topic=garden-design"}>
                <img className="home_icon" src="/landscape.png" alt="" />
                <h3>Garden Design and Landscape Construction</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
