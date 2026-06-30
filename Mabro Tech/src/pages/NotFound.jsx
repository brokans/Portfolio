import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
      <h1>{t("not_found_title")}</h1>
      <p>
        <Link to="/">{t("not_found_link")}</Link>
      </p>
    </div>
  );
}

export default NotFound;
