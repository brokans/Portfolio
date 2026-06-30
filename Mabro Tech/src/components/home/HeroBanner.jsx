import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../../css/HeroBanner.module.css";

function HeroBanner() {
  const { t } = useTranslation();

  const highlights = [
    t("hero_highlight_painting"),
    t("hero_highlight_interior"),
    t("hero_highlight_renovation"),
  ];

  return (
    <section className={styles.hero} aria-label={t("hero_title")}>
      <div className={styles.heroMedia} aria-hidden="true">
        <img
          src="/Elutuba.JPG"
          alt=""
          className={styles.heroImage}
          fetchPriority="high"
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{t("hero_eyebrow")}</p>
          <h1 className={styles.title}>{t("hero_title")}</h1>
          <p className={styles.subtitle}>{t("hero_subtitle")}</p>

          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Link to="/contacts#contact-form" className={styles.primaryBtn}>
              {t("hero_cta_primary")}
            </Link>
            <Link to="/services" className={styles.secondaryBtn}>
              {t("hero_cta_secondary")}
            </Link>
          </div>
        </div>
      </div>

      <a href="#projects" className={styles.scrollHint} aria-label={t("hero_scroll")}>
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}

export default HeroBanner;
