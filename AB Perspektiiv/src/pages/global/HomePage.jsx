import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/home/Footer";
import Email from "../../components/Email";

import "../../App.css";

const SERVICE_KEYS = [
  "architecturalDesign",
  "interiorDesign",
  "modeling3d",
  "moodboard",
  "businessAnalysis",
  "consultation",
];

const SERVICE_ICONS = [
  "/3d-printer.png",
  "/interior-design.png",
  "/cube.png",
  "/moodboard.png",
  "/analytics.png",
  "/speech-bubble.png",
];

function HomePage() {
  const { t } = useTranslation();

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
        <h1>{t("home.hero")}</h1>
        <br /> <br />
        <hr />
        <section className="services">
          <h2>{t("home.servicesTitle")}</h2>
          <div className="teenused">
            <div className="teenuste-container">
              {SERVICE_KEYS.slice(0, 3).map((key, index) => (
                <div className="teenus" key={key}>
                  <img
                    className="avalehe-ikoonid"
                    src={SERVICE_ICONS[index]}
                    alt={t(`serviceItems.${key}`)}
                  />
                  <p>{t(`serviceItems.${key}`)}</p>
                </div>
              ))}
            </div>
            <div className="teenuste-container">
              {SERVICE_KEYS.slice(3).map((key, index) => (
                <div className="teenus" key={key}>
                  <img
                    className="avalehe-ikoonid"
                    src={SERVICE_ICONS[index + 3]}
                    alt={t(`serviceItems.${key}`)}
                  />
                  <p>{t(`serviceItems.${key}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <h2>{t("home.contactTitle")}</h2> <br /> <br />
        <Email />
        <br /> <br />
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
