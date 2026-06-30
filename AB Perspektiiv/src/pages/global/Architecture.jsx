import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Footer from "../../components/home/Footer";
import ArchitectureBanner from "../../components/home/ArchitectureBanner";
import ArchitectureProjectGrid from "../../components/home/ArchitectureProjectGrid";
import { readCollection } from "../../lib/database";

function Architecture() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const architectureProjects = projects.filter(
    (project) => project.category === "Arhitektuur"
  );

  useEffect(() => {
    readCollection("projects")
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <div className="architecture-page">
      <Helmet>
        <title>
          Arhitektuuribüroo — Arhitektuuriprojektid | AB Perspektiiv
        </title>
        <meta
          name="description"
          content="AB Perspektiiv arhitektuuribüroo arhitektuuri projektid ja teostused."
        />
        <link rel="canonical" href="https://abperspektiiv.com/arhitektuur" />
      </Helmet>
      <ArchitectureBanner imageAlt={t("project.architectureImageAlt")} />
      <ArchitectureProjectGrid
        projects={architectureProjects}
        imageAlt={t("project.architectureImageAlt")}
      />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Architecture;
