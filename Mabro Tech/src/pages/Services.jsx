import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageHero from "../components/home/PageHero";
import styles from "../css/Services.module.css";

const SERVICE_KEYS = [
  { title: "services_painting_title", text: "services_painting_text" },
  { title: "services_walls_title", text: "services_walls_text" },
  { title: "services_interior_title", text: "services_interior_text" },
  { title: "services_smallworks_title", text: "services_smallworks_text" },
];

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

      <PageHero
        title={t("services_title")}
        subtitle={t("services_page_subtitle")}
      />

      <div className={styles.page}>
        <div className={styles.serviceGrid}>
          {SERVICE_KEYS.map(({ title, text }) => (
            <article key={title} className={styles.serviceCard}>
              <h2 className={styles.serviceTitle}>{t(title)}</h2>
              <p className={styles.serviceText}>{t(text)}</p>
            </article>
          ))}
        </div>

        <p className={styles.lead}>{t("services_contact_text")}</p>

        <section className={styles.pricingSection} aria-labelledby="price-list-title">
          <h2 id="price-list-title" className={styles.sectionTitle}>
            {t("services_price_title")}
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.priceTable}>
              <thead>
                <tr>
                  <th>{t("services_table.headers_service")}</th>
                  <th>{t("services_table.headers_unit")}</th>
                  <th>{t("services_table.headers_price_from")}</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.categoryRow}>
                  <td colSpan="3">{t("services_table.cat_prep")}</td>
                </tr>
                <tr>
                  <td>{t("services_table.wallpaper_removal")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>al 3€</td>
                </tr>
                <tr>
                  <td>{t("services_table.wall_priming")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>3€</td>
                </tr>
                <tr>
                  <td>{t("services_table.putty_1coat")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>8€</td>
                </tr>
                <tr>
                  <td>{t("services_table.putty_2coats")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>10€</td>
                </tr>
                <tr>
                  <td>{t("services_table.plastering_mp75")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>al 8€</td>
                </tr>

                <tr className={styles.categoryRow}>
                  <td colSpan="3">{t("services_table.cat_painting")}</td>
                </tr>
                <tr>
                  <td>{t("services_table.paint_1coat")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>4€</td>
                </tr>
                <tr>
                  <td>{t("services_table.paint_2coats")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>6€</td>
                </tr>
                <tr>
                  <td>{t("services_table.wallpapering")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>12€</td>
                </tr>
                <tr>
                  <td>{t("services_table.paintable_wallpaper")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>10€</td>
                </tr>

                <tr className={styles.categoryRow}>
                  <td colSpan="3">{t("services_table.cat_drywall")}</td>
                </tr>
                <tr>
                  <td>{t("services_table.drywall_ceiling")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>20€</td>
                </tr>
                <tr>
                  <td>{t("services_table.drywall_wall")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>18€</td>
                </tr>
                <tr>
                  <td>{t("services_table.drywall_partition")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>15€</td>
                </tr>
                <tr>
                  <td>{t("services_table.jamb_finishing")}</td>
                  <td>{t("services_table.unit_lm")}</td>
                  <td>10€</td>
                </tr>

                <tr className={styles.categoryRow}>
                  <td colSpan="3">{t("services_table.cat_floor")}</td>
                </tr>
                <tr>
                  <td>{t("services_table.parquet_install")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>15€</td>
                </tr>
                <tr>
                  <td>{t("services_table.laminate_install")}</td>
                  <td>{t("services_table.unit_m2")}</td>
                  <td>6€</td>
                </tr>
                <tr>
                  <td>{t("services_table.skirting_install")}</td>
                  <td>{t("services_table.unit_lm")}</td>
                  <td>5€</td>
                </tr>
                <tr>
                  <td>{t("services_table.jamb_finishing")}</td>
                  <td>{t("services_table.unit_lm")}</td>
                  <td>10€</td>
                </tr>
                <tr>
                  <td>{t("services_table.interior_door_install")}</td>
                  <td>{t("services_table.unit_pcs")}</td>
                  <td>30€</td>
                </tr>

                <tr className={styles.categoryRow}>
                  <td colSpan="3">{t("services_table.cat_hourly")}</td>
                </tr>
                <tr>
                  <td>{t("services_table.hourly_rate")}</td>
                  <td>{t("services_table.unit_hour")}</td>
                  <td>30€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.disclaimer}>{t("services_price_disclaimer")}</p>

          <div className={styles.ctaWrap}>
            <Link to="/contacts#contact-form" className={styles.ctaButton}>
              {t("services_send_request")}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
