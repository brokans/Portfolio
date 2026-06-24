import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/home/Footer";
import Email from "../../components/Email";

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

function Services() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>
          Arhitektuuribüroo teenused — projekteerimine ja sisearhitektuur | AB
          Perspektiiv
        </title>
        <meta
          name="description"
          content="AB Perspektiiv arhitektuuribüroo teenused: arhitektuurne ja sisearhitektuurne projekteerimine, 3D visualiseerimine, moodboardid ja konsultatsioonid."
        />
        <link rel="canonical" href="https://abperspektiiv.com/services" />
      </Helmet>
      <div className="services-container">
        <div className="services-img">
          <img src="https://i.postimg.cc/W4zzn64x/Z62-7291.jpg" alt="" />
        </div>
        <div className="services-tekst">
          <h2>{t("servicesPage.title")}</h2>
          <div className="teenused">
            {SERVICE_KEYS.map((key, index) => (
              <div className="service" key={key}>
                <img
                  className="service-icon"
                  src={SERVICE_ICONS[index]}
                  alt={t(`serviceItems.${key}`)}
                />
                <p>{t(`serviceItems.${key}`)}</p>
              </div>
            ))}
            <div className="service">
              <p className="services-info">{t("servicesPage.intro")}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Email />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Services;
