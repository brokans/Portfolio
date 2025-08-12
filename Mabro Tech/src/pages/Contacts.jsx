import React from "react";
import styles from "../css/Contacts.module.css";
import { Contact } from "../components/home/Contact";
import { useTranslation } from "react-i18next";

function Contacts() {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.contactsContainer}>
        <h1>{t('contacts_title')}</h1>
        <hr />
        <p>{t('contacts_intro1')}</p>
        <p>{t('contacts_intro2')}</p>
        <br />
        <p>
          <strong>
            <a href="mailto:mabrotechy@gmail.com" className={styles.emailLink}>
              {t('contacts_company')}
            </a>
          </strong>
        </p>
        <p>
          {t('contacts_email')} <a href="mailto:mabrotechy@gmail.com" className={styles.emailLink}>mabrotechy@gmail.com</a>
        </p>
        <p>{t('contacts_phone')} +37256778527</p>
        <p>{t('contacts_regcode')} 17278449</p>
        <p>{t('contacts_address')}</p>
      </div>
      <div id="contact-form">
        <Contact />
      </div>
    </div>
  );
}

export default Contacts;
