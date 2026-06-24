import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HERO_IMAGE = "https://i.postimg.cc/L8QSvPQ4/P-1.jpg";

function HomeHero() {
  const { t } = useTranslation();

  return (
    <section className="home-hero" aria-label={t("home.heroEyebrow")}>
      <img
        className="home-hero__image"
        src={HERO_IMAGE}
        alt={t("home.heroImageAlt")}
      />
      <div className="home-hero__overlay" aria-hidden="true" />
      <div className="home-hero__content">
        <p className="home-hero__eyebrow">{t("home.heroEyebrow")}</p>
        <h1 className="home-hero__title">{t("home.heroTitle")}</h1>
        <Link to="/portfolio" className="home-hero__cta">
          {t("home.heroCta")}
        </Link>
      </div>
      <a
        href="#home-content"
        className="home-hero__scroll"
        aria-label={t("home.heroScroll")}
      >
        <span className="home-hero__scroll-icon" aria-hidden="true" />
      </a>
    </section>
  );
}

export default HomeHero;
