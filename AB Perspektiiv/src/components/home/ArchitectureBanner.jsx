import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import { readCollection } from "../../lib/database";
import { getVisualCredit } from "../../lib/projectVisualCredit";

function InfoRow({ label, value }) {
  return (
    <p className="architecture-banner-card__row">
      <span className="architecture-banner-card__label">{label}</span>
      <span className="architecture-banner-card__value">{value || "—"}</span>
    </p>
  );
}

function VisualCreditRow({ project }) {
  const credit = getVisualCredit(project);

  if (!credit) {
    return null;
  }

  return <InfoRow label={credit.label} value={credit.value} />;
}

function ArchitectureBanner({
  category = "Arhitektuur",
  imageAlt = "Arhitektuuriprojekt",
}) {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    readCollection("projects")
      .then(setProjects)
      .catch(console.error);
  }, []);

  const bannerProjects = projects.filter(
    (project) => project.category === category
  );
  const activeProject = bannerProjects[activeIndex];

  if (bannerProjects.length === 0) {
    return null;
  }

  return (
    <section className="architecture-banner homePageImgContainer">
      <Carousel
        fade
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        interval={5000}
        pause="hover"
      >
        {bannerProjects.map((project, index) => (
          <Carousel.Item key={`${project.name}-${index}`}>
            {project.photoOne && (
              <img src={project.photoOne} alt={project.name || imageAlt} />
            )}
          </Carousel.Item>
        ))}
      </Carousel>

      {activeProject && (
        <article className="architecture-banner-card" aria-live="polite">
          <h2 className="architecture-banner-card__title">
            {activeProject.name}
          </h2>
          <div className="architecture-banner-card__body">
            <InfoRow label={t("project.location")} value={activeProject.asukoht} />
            <InfoRow label={t("project.completed")} value={activeProject.valminud} />
            <InfoRow label={t("project.area")} value={activeProject.pindala} />
            <VisualCreditRow project={activeProject} />
          </div>
        </article>
      )}
    </section>
  );
}

export default ArchitectureBanner;
