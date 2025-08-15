import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "../css/Contacts.module.css";
import { Contact } from "../components/home/Contact";
import { useTranslation } from "react-i18next";

function Contacts() {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Mabro Tech – Kontakt</title>
        <meta
          name="description"
          content="Võta ühendust: Mabro Tech OÜ, Rivi 4-92, Tallinn 11316. Tel +37256778527, e-mail mabrotechy@gmail.com."
        />
        <link rel="canonical" href="https://mabrotech.ee/contacts" />
        <meta property="og:image" content="https://mabrotech.ee/Elutuba.JPG" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://mabrotech.ee/Elutuba.JPG" />
        <meta name="twitter:image:alt" content="Mabro Tech – kontaktid" />
      </Helmet>
      <div className={styles.contactsContainer}>
        <h1>{t("contacts_title")}</h1>
        <hr />
        <p>{t("contacts_intro1")}</p>
        <p>{t("contacts_intro2")}</p>
        <br />
        <p>
          <strong>
            <a href="mailto:mabrotechy@gmail.com" className={styles.emailLink}>
              {t("contacts_company")}
            </a>
          </strong>
        </p>
        <p>
          {t("contacts_email")}{" "}
          <a href="mailto:mabrotechy@gmail.com" className={styles.emailLink}>
            mabrotechy@gmail.com
          </a>
        </p>
        <p>{t("contacts_phone")} +37256778527</p>
        <p>{t("contacts_regcode")} 17278449</p>
        <p>{t("contacts_address")}</p>
      </div>
      <div id="contact-form">
        <Contact />
      </div>
    </div>
  );
}

export default Contacts;
