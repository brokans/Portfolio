import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/home/Footer";

const SERVICE_GROUPS = [
  { key: "advisory", services: ["consultation"] },
  { key: "design", services: ["architecturalDesign", "interiorDesign"] },
  { key: "visual", services: ["modeling3d", "moodboard", "businessAnalysis"] },
];

const SERVICE_ICONS = {
  architecturalDesign: "/3d-printer.png",
  interiorDesign: "/interior-design.png",
  modeling3d: "/cube.png",
  moodboard: "/moodboard.png",
  businessAnalysis: "/analytics.png",
  consultation: "/speech-bubble.png",
};

const SERVICE_IMAGES = {
  consultation:
    "https://i.postimg.cc/fT781y2B/angeelika-Fotograaf-Lisette-Laanoja-81.jpg",
  architecturalDesign: "https://i.postimg.cc/L8QSvPQ4/P-1.jpg",
  interiorDesign: "https://i.postimg.cc/B6HcMxgd/0610-mad-3-2.jpg",
  modeling3d: "https://i.postimg.cc/nhDpLrc3/1-3-D-ARHITEKTUUR-1.jpg",
  moodboard: "https://i.postimg.cc/Hnt0CdFz/0710-1-MAG-2-1.jpg",
  businessAnalysis: "https://i.postimg.cc/jd13FjX4/1-RH-1.jpg",
};

const PROCESS_STEP_KEYS = ["consult", "design", "delivery"];

function ServiceOfferingCard({ serviceKey, t }) {
  const bullets = t(`servicesPage.serviceBullets.${serviceKey}`, {
    returnObjects: true,
  });
  const bulletList = Array.isArray(bullets) ? bullets : [];

  return (
    <article className="services-offering-card">
      <div className="services-offering-card__media">
        <img
          src={SERVICE_IMAGES[serviceKey]}
          alt={t(`serviceItems.${serviceKey}`)}
          loading="lazy"
        />
      </div>
      <div className="services-offering-card__body">
        <div className="services-offering-card__header">
          <img
            className="services-offering-card__icon"
            src={SERVICE_ICONS[serviceKey]}
            alt=""
          />
          <h3 className="services-offering-card__title">
            {t(`serviceItems.${serviceKey}`)}
          </h3>
        </div>
        <p className="services-offering-card__description">
          {t(`servicesPage.serviceDescriptions.${serviceKey}`)}
        </p>
        {bulletList.length > 0 && (
          <ul className="services-offering-card__list">
            {bulletList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function Services() {
  const { t } = useTranslation();

  return (
    <div className="services-page">
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

      <section className="services-intro">
        <div className="services-intro__inner">
          <p className="services-intro__eyebrow">{t("servicesPage.eyebrow")}</p>
          <h1 className="services-intro__title">{t("servicesPage.introTitle")}</h1>
          <p className="services-intro__text">{t("servicesPage.intro")}</p>
        </div>
      </section>

      <section
        className="services-offerings"
        aria-labelledby="services-offerings-title"
      >
        <div className="services-offerings__inner">
          <h2 id="services-offerings-title" className="services-section__title">
            {t("servicesPage.offeringsTitle")}
          </h2>

          {SERVICE_GROUPS.map((group) => (
            <div className="services-group" key={group.key}>
              <div className="services-group__header">
                <h3 className="services-group__title">
                  {t(`servicesPage.serviceGroups.${group.key}.title`)}
                </h3>
                <p className="services-group__description">
                  {t(`servicesPage.serviceGroups.${group.key}.description`)}
                </p>
              </div>
              <div className="services-offerings__grid">
                {group.services.map((serviceKey) => (
                  <ServiceOfferingCard
                    key={serviceKey}
                    serviceKey={serviceKey}
                    t={t}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-process" aria-labelledby="services-process-title">
        <div className="services-process__inner">
          <h2 id="services-process-title" className="services-section__title">
            {t("servicesPage.processTitle")}
          </h2>
          <ol className="services-process__steps">
            {PROCESS_STEP_KEYS.map((step, index) => (
              <li className="services-process__step" key={step}>
                <span className="services-process__step-number">{index + 1}</span>
                <p>{t(`servicesPage.processSteps.${step}`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="services-cta" aria-labelledby="services-cta-title">
        <div className="services-cta__inner">
          <h2 id="services-cta-title" className="services-cta__title">
            {t("servicesPage.cta.title")}
          </h2>
          <p className="services-cta__description">
            {t("servicesPage.cta.description")}
          </p>
          <div className="services-cta__actions">
            <Link
              to="/contacts#inquiry"
              className="services-cta__btn services-cta__btn--primary"
            >
              {t("servicesPage.cta.quote")}
            </Link>
            <Link
              to="/contacts"
              className="services-cta__btn services-cta__btn--secondary"
            >
              {t("servicesPage.cta.contact")}
            </Link>
            <a href="tel:+3725170440" className="services-cta__phone">
              {t("servicesPage.cta.phone")}
            </a>
          </div>
        </div>
      </section>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Services;
