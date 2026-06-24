import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/home/Footer";
import Email from "../../components/Email";
import HomeHero from "../../components/home/HomeHero";

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
    <div className="home-page">
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

      <HomeHero />

      <div id="home-content" className="home-page__content">
        <section className="services" aria-labelledby="home-services-title">
          <h2 id="home-services-title">{t("home.servicesTitle")}</h2>
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

        <section className="home-contact" aria-labelledby="home-contact-title">
          <h2 id="home-contact-title">{t("home.contactTitle")}</h2>
          <Email />
        </section>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
