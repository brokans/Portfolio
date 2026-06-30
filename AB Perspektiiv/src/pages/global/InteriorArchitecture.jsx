import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Footer from "../../components/home/Footer";
import ArchitectureBanner from "../../components/home/ArchitectureBanner";
import ArchitectureProjectGrid from "../../components/home/ArchitectureProjectGrid";
import { readCollection } from "../../lib/database";

function Sisearhitektuur() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const interiorProjects = projects.filter(
    (project) => project.category === "Sisearhitektuur"
  );

  useEffect(() => {
    readCollection("projects")
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <div className="architecture-page">
      <Helmet>
        <title>Arhitektuuribüroo — Sisearhitektuur | AB Perspektiiv</title>
        <meta
          name="description"
          content="AB Perspektiiv sisearhitektuursed projektid ja interjöörid."
        />
        <link
          rel="canonical"
          href="https://abperspektiiv.com/sisearhitektuur"
        />
      </Helmet>
      <ArchitectureBanner
        category="Sisearhitektuur"
        imageAlt={t("project.interiorImageAlt")}
      />
      <ArchitectureProjectGrid
        projects={interiorProjects}
        imageAlt={t("project.interiorImageAlt")}
      />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Sisearhitektuur;
