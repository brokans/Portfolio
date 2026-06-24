import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Map from "../../components/Map";
import Button from "react-bootstrap/Button";
import config from "../../data/config.json";
import { normalizeShop } from "../../lib/shopMaps";
import Footer from "../../components/home/Footer";
import Email from "../../components/Email";

export const Contact = () => {
  const { t } = useTranslation();
  const [shops, uShops] = useState([]);
  const formHints = t("contactPage.formHints", { returnObjects: true });
  const hintList = Array.isArray(formHints) ? formHints : [];

  const [coordinaates, setCoordinates] = useState({
    lngLat: [57.7731, 26.0367],
    zoom: 14,
  });

  useEffect(() => {
    fetch(config.shops)
      .then((res) => res.json())
      .then((json) => uShops((json || []).map(normalizeShop)));
  }, []);

  return (
    <div className="contact-page">
      <Helmet>
        <title>Arhitektuuribüroo kontakt — AB Perspektiiv</title>
        <meta
          name="description"
          content="Võta ühendust AB Perspektiiv arhitektuuribürooga: tel +372 517 0440, angeelika.saaron@abperspektiiv.com."
        />
        <link rel="canonical" href="https://abperspektiiv.com/contacts" />
      </Helmet>

      <section className="contact-intro">
        <div className="contact-intro__inner">
          <p className="contact-intro__eyebrow">{t("contactPage.eyebrow")}</p>
          <h1 className="contact-intro__title">{t("contactPage.title")}</h1>
          <p className="contact-intro__text">{t("contactPage.intro")}</p>
        </div>
      </section>

      <section className="contact-team" aria-labelledby="contact-team-title">
        <div className="contact-team__inner">
          <h2 id="contact-team-title" className="contact-section__title">
            {t("contactPage.teamTitle")}
          </h2>
          <div className="contact-team__grid">
            <article className="contact-team-card">
              <div className="contact-team-card__media">
                <img
                  className="contact-team-card__photo"
                  src="https://i.postimg.cc/V6yr4GV5/IMG-0026-Copy.jpg"
                  alt="Angeelika Saaron"
                />
              </div>
              <h3 className="contact-team-card__name">Angeelika Saaron</h3>
              <p className="contact-team-card__role">{t("contactPage.architect")}</p>
              <p className="contact-team-card__link">
                <a href="mailto:angeelika.saaron@abperspektiiv.com">
                  angeelika.saaron@abperspektiiv.com
                </a>
              </p>
              <p className="contact-team-card__link">
                <a href="tel:+3725170440">+372 517 0440</a>
              </p>
            </article>

            <article className="contact-team-card">
              <div className="contact-team-card__media">
                <img
                  className="contact-team-card__photo"
                  src="https://i.postimg.cc/jS5R0qr7/IMG-9879.jpg"
                  alt="Mario Brokans"
                />
              </div>
              <h3 className="contact-team-card__name">Mario Brokans</h3>
              <p className="contact-team-card__role">{t("contactPage.draftsman")}</p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="inquiry"
        className="contact-inquiry"
        aria-labelledby="contact-inquiry-title"
      >
        <div className="contact-inquiry__inner">
          <div className="contact-inquiry__layout">
            <div className="contact-inquiry__content">
              <p className="contact-inquiry__eyebrow">
                {t("contactPage.formEyebrow")}
              </p>
              <h2 id="contact-inquiry-title" className="contact-inquiry__title">
                {t("contactPage.formTitle")}
              </h2>
              <p className="contact-inquiry__text">
                {t("contactPage.formSubtitle")}
              </p>
              <p className="contact-inquiry__note">{t("contactPage.formNote")}</p>
              <ul className="contact-inquiry__hints">
                {hintList.map((hint) => (
                  <li key={hint}>{hint}</li>
                ))}
              </ul>
              <div className="contact-inquiry__direct">
                <p className="contact-inquiry__direct-label">
                  {t("contactPage.formDirect")}
                </p>
                <a href="tel:+3725170440">+372 517 0440</a>
                <a href="mailto:angeelika.saaron@abperspektiiv.com">
                  angeelika.saaron@abperspektiiv.com
                </a>
              </div>
            </div>
            <div className="contact-inquiry__form-card">
              <Email variant="contact" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map" aria-labelledby="contact-map-title">
        <div className="contact-map__inner">
          <h2 id="contact-map-title" className="contact-section__title">
            {t("contactPage.mapTitle")}
          </h2>
          <div className="contact-map__actions">
            {shops.map((shop) => (
              <Button
                key={shop.name}
                onClick={() =>
                  setCoordinates({ lngLat: [shop.lati, shop.long], zoom: 17 })
                }
                className="contact-map__btn"
                variant="outline-dark"
              >
                {shop.name}
              </Button>
            ))}
            <Button
              onClick={() =>
                setCoordinates({ lngLat: [58.8882, 25.523], zoom: 7 })
              }
              className="contact-map__btn"
              variant="outline-dark"
            >
              {t("contactPage.allStudios")}
            </Button>
          </div>
          <div className="contact-map__frame">
            <Map mapCoordinaates={coordinaates} shops={shops} />
          </div>
        </div>
      </section>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
