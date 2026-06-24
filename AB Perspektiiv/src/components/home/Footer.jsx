import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="container site-footer__content">
        <div className="row g-4">
          <div className="col-md-3 col-lg-5 col-xl-3 mx-auto">
            <h6 className="site-footer__heading">{t("footer.companyName")}</h6>
            <p className="site-footer__text">{t("footer.tagline")}</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
            <h6 className="site-footer__heading">{t("footer.usefulLinks")}</h6>
            <p className="site-footer__text">
              <a
                href="https://www.instagram.com/perspektiiv_ab?igsh=eXo5M3JqMzRya2Vo&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__link"
              >
                Instagram
              </a>
            </p>
            <p className="site-footer__text">
              <a
                href="https://www.facebook.com/profile.php?id=61569858399297"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__link"
              >
                Facebook
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto">
            <h6 className="site-footer__heading">{t("footer.contact")}</h6>
            <p className="site-footer__text">Narva maantee 4, Tallinn</p>
            <p className="site-footer__text">angeelika.saaron@abperspektiiv.com</p>
            <p className="site-footer__text">+372 5170440</p>
          </div>
        </div>
      </div>

      <div className="site-footer__copyright">{t("footer.copyright")}</div>
    </footer>
  );
}

export default Footer;
