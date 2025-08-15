import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "../css/Services.module.css";
import Styles from "../css/Contact.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Mabro Tech – Teenused: maalritööd, vaheseinad, ripplaed</title>
        <meta
          name="description"
          content="Maalritööd, vaheseinad, ripplaed, siseviimistlus ja väiketööd Tallinnas ja Harjumaal. Küsi pakkumist!"
        />
        <link rel="canonical" href="https://mabrotech.ee/services" />
        <meta property="og:image" content="https://mabrotech.ee/Elutuba.JPG" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://mabrotech.ee/Elutuba.JPG" />
        <meta name="twitter:image:alt" content="Mabro Tech – teenused" />
      </Helmet>
      <div className={styles.servicesContainer}>
        <h1>{t("services_title")}</h1>
        <hr />
        <h4>{t("services_painting_title")}</h4>
        <p>{t("services_painting_text")}</p>
        <h4>{t("services_walls_title")}</h4>
        <p>{t("services_walls_text")}</p>
        <h4>{t("services_interior_title")}</h4>
        <p>{t("services_interior_text")}</p>
        <h4>{t("services_smallworks_title")}</h4>
        <p>{t("services_smallworks_text")}</p>
        <p>{t("services_contact_text")}</p>
        <div className={styles.buttonContainer}>
          <Link to="/contacts#contact-form" style={{ textDecoration: "none" }}>
            <Button
              variant="secondary"
              type="button"
              className={Styles.submitButton}
            >
              {t("services_send_request")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
