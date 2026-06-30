import { useTranslation } from "react-i18next";
import styles from "../../css/Footer.module.css";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.block}>
            <h2 className={styles.heading}>{t("contacts_company")}</h2>
            <p className={styles.text}>{t("contacts_address")}</p>
            <p className={styles.text}>
              {t("contacts_regcode")} 17278449
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.heading}>{t("footer_contact_heading")}</h2>
            <p className={styles.text}>
              {t("contacts_email")}{" "}
              <a href="mailto:mabrotechy@gmail.com" className={styles.link}>
                mabrotechy@gmail.com
              </a>
            </p>
            <p className={styles.text}>
              {t("contacts_phone")}{" "}
              <a href="tel:+37256778527" className={styles.link}>
                +37256778527
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p className={styles.copyrightText}>
          © {year} mabrotech.ee · {t("footer_rights")}
        </p>
        <p className={styles.copyrightNote}>{t("footer_trademarks")}</p>
      </div>
    </footer>
  );
}

export default Footer;
