import React from "react";
import styles from "../css/Services.module.css";
import Styles from "../css/Contact.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.servicesContainer}>
        <h1>{t('services_title')}</h1>
        <hr />
        <h4>{t('services_painting_title')}</h4>
        <p>{t('services_painting_text')}</p>
        <h4>{t('services_walls_title')}</h4>
        <p>{t('services_walls_text')}</p>
        <h4>{t('services_interior_title')}</h4>
        <p>{t('services_interior_text')}</p>
        <h4>{t('services_smallworks_title')}</h4>
        <p>{t('services_smallworks_text')}</p>
        <p>{t('services_contact_text')}</p>
        <div className={styles.buttonContainer}>
          <Link to="/contacts#contact-form" style={{ textDecoration: "none" }}>
            <Button
              variant="secondary"
              type="button"
              className={Styles.submitButton}
            >
              {t('services_send_request')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
