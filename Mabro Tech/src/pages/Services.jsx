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
        <hr />
        <h2>{t("services_price_title")}</h2>
        <div
          style={{ overflowX: "auto", marginTop: "16px", marginBottom: "24px" }}
        >
          <table
            className={styles.priceTable}
            border="1"
            cellPadding="8"
            cellSpacing="0"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <thead style={{ backgroundColor: "#f2f2f2" }}>
              <tr>
                <th>{t("services_table.headers_service")}</th>
                <th>{t("services_table.headers_unit")}</th>
                <th>{t("services_table.headers_price_from")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3">
                  <strong>Ettevalmistustööd</strong>
                </td>
              </tr>
              <tr>
                <td>Tapeedi eemaldamine</td>
                <td>m²</td>
                <td>al 3€</td>
              </tr>
              <tr>
                <td>Seinte kruntimine / nakke kiht</td>
                <td>m²</td>
                <td>3€</td>
              </tr>
              <tr>
                <td>Pahteldamine (1 kiht), lihvimine, kruntimine</td>
                <td>m²</td>
                <td>8€</td>
              </tr>
              <tr>
                <td>Pahteldamine (2 kihti), lihvimine, kruntimine</td>
                <td>m²</td>
                <td>10€</td>
              </tr>
              <tr>
                <td>Krohvimine (MP-75) / seinte tasandamine</td>
                <td>m²</td>
                <td>al 8€</td>
              </tr>

              <tr>
                <td colSpan="3">
                  <strong>Värvimine / viimistlus</strong>
                </td>
              </tr>
              <tr>
                <td>Värvimine (1 kiht)</td>
                <td>m²</td>
                <td>4€</td>
              </tr>
              <tr>
                <td>Värvimine (2 kihti)</td>
                <td>m²</td>
                <td>6€</td>
              </tr>
              <tr>
                <td>Tapeetimine</td>
                <td>m²</td>
                <td>12€</td>
              </tr>
              <tr>
                <td>Ülevärvitav tapeet + värvimine (2 kihti)</td>
                <td>m²</td>
                <td>10€</td>
              </tr>

              <tr>
                <td colSpan="3">
                  <strong>Kipsitööd</strong>
                </td>
              </tr>
              <tr>
                <td>Kipslae ehitus</td>
                <td>m²</td>
                <td>20€</td>
              </tr>
              <tr>
                <td>Kipsseinte ehitamine</td>
                <td>m²</td>
                <td>18€</td>
              </tr>
              <tr>
                <td>Kipskatteseina ehitamine</td>
                <td>m²</td>
                <td>15€</td>
              </tr>
              <tr>
                <td>Akna- ja uksepaled</td>
                <td>jm</td>
                <td>10€</td>
              </tr>

              <tr>
                <td colSpan="3">
                  <strong>Põrandad ja lisatööd</strong>
                </td>
              </tr>
              <tr>
                <td>Parketi paigaldus</td>
                <td>m²</td>
                <td>15€</td>
              </tr>
              <tr>
                <td>Laminaadi paigaldus</td>
                <td>m²</td>
                <td>6€</td>
              </tr>
              <tr>
                <td>Liistude paigaldus</td>
                <td>jm</td>
                <td>5€</td>
              </tr>
              <tr>
                <td>Aknapaled / uksepalede viimistlus</td>
                <td>jm</td>
                <td>10€</td>
              </tr>
              <tr>
                <td>Siseukse paigaldus</td>
                <td>tk</td>
                <td>30€</td>
              </tr>

              <tr>
                <td colSpan="3">
                  <strong>Tunnitasu</strong>
                </td>
              </tr>
              <tr>
                <td>Töömehe tunnitasu</td>
                <td>tund</td>
                <td>30€</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <p>{t("services_price_disclaimer")}</p>

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
