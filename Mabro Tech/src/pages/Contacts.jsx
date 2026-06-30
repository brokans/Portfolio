import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PageHero from "../components/home/PageHero";
import { Contact } from "../components/home/Contact";
import styles from "../css/Contacts.module.css";

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

      <PageHero
        title={t("contacts_title")}
        subtitle={t("contacts_page_subtitle")}
      />

      <div className={styles.page}>
        <div className={styles.intro}>
          <p className={styles.introText}>{t("contacts_intro1")}</p>
        </div>

        <div id="contact-form" className={styles.formSection}>
          <Contact title={t("contact_form_title")} variant="card" />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
