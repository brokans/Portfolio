import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import Carousel from "react-bootstrap/Carousel";
import Footer from "../../components/home/Footer";
import Email from "../../components/Email";
import config from "../../data/config.json";

import "../../App.css";

function HomePage() {
  const [projects, setProjects] = useState([]);
  // const found = projects.filter(
  //   (project) => project.category === "Sisearhitektuur"
  // );

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Arhitektuuribüroo AB Perspektiiv — Arhitektuur ja sisearhitektuur
        </title>
        <meta
          name="description"
          content="Arhitektuuribüroo Valgamaal: arhitektuur, sisearhitektuur, projekteerimine, 3D‑visualiseerimine ja konsultatsioonid."
        />
        <link rel="canonical" href="https://abperspektiiv.com/" />
        <meta
          property="og:title"
          content="Arhitektuuribüroo AB Perspektiiv — Arhitektuur ja sisearhitektuur"
        />
        <meta
          property="og:description"
          content="Arhitektuuribüroo – projekteerimine, sisearhitektuur, 3D visualiseerimine ja konsultatsioonid."
        />
        <meta
          property="og:image"
          content="https://abperspektiiv.com/Angeelika1.JPG"
        />
        <meta property="og:url" content="https://abperspektiiv.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className="homePage-img-container">
        <img
          src="https://i.postimg.cc/vmnj2xX0/angeelika-Fotograaf-Lisette-Laanoja-91.jpg"
          alt="AB Perspektiiv arhitektuuri ja sisearhitektuuri projekt"
          className="homePageImg"
        />
        <h1>
          Arhitektuuribüroo AB Perspektiiv — Meie loome teekonna eesmärkideni!
        </h1>{" "}
        <br /> <br />
        <hr />
        <section className="services">
          <h2>TEENUSED</h2>
          <div className="teenused">
            <div className="teenuste-container">
              <div className="teenus">
                <img
                  className="avalehe-ikoonid"
                  src="./3d-printer.png"
                  alt="Arhitektuurne projekteerimine"
                />
                <p>Arhitektuurne projekteerimine</p>
              </div>
              <div className="teenus">
                <img
                  className="avalehe-ikoonid"
                  src="./interior-design.png"
                  alt="Sisearhitektuurne projekteerimine"
                />
                <p>Sisearhitektuurne projekteerimine</p>
              </div>
              <div className="teenus">
                <img
                  className="avalehe-ikoonid"
                  src="./cube.png"
                  alt="3D visualiseerimine ja mudeldamine"
                />
                <p>3D visualiseerimine ja mudeldamine</p>
              </div>
            </div>
            <div className="teenuste-container">
              <div className="teenus">
                <img
                  className="avalehe-ikoonid"
                  src="./moodboard.png"
                  alt="Meeleolutahvlite loomine"
                />
                <p>Mood boardide loomine</p>
              </div>
              <div className="teenus">
                <img
                  className="avalehe-ikoonid"
                  src="./analytics.png"
                  alt="Arhitektuurne analüüs"
                />
                <p>Arhitektuurne analüüs äriideedele</p>
              </div>
              <div className="teenus">
                <img
                  className="avalehe-ikoonid"
                  src="./speech-bubble.png"
                  alt=""
                />
                <p>Konsultatsioon</p>
              </div>
            </div>
          </div>
        </section>
        <h2>Võta ühendust!</h2> <br /> <br />
        <Email />
        <br /> <br />
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
