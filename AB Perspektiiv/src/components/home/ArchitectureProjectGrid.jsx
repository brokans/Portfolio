import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProjectPhotos } from "../../lib/projectPhotos";

function ArchitectureProjectGrid({
  projects,
  imageAlt = "Arhitektuuriprojekt",
}) {
  const { t } = useTranslation();

  if (!projects.length) {
    return null;
  }

  return (
    <section
      className="architecture-projects"
      aria-labelledby="architecture-projects-title"
    >
      <h2 id="architecture-projects-title" className="architecture-projects__title">
        {t("project.projects")}
      </h2>
      <div className="architecture-projects__grid">
        {projects.map((project, index) => {
          const [firstPhoto] = getProjectPhotos(project);

          return (
            <Link
              key={`${project.name}-${index}`}
              to={`/project-page/${encodeURIComponent(project.name)}`}
              className="architecture-project-card"
            >
              <div className="architecture-project-card__media">
                {firstPhoto ? (
                  <img
                    src={firstPhoto}
                    alt={project.name || imageAlt}
                    loading="lazy"
                  />
                ) : (
                  <div className="architecture-project-card__placeholder" />
                )}
              </div>
              <div className="architecture-project-card__body">
                <h3 className="architecture-project-card__name">{project.name}</h3>
                <p className="architecture-project-card__meta">
                  {[project.asukoht, project.valminud, project.pindala]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <span className="architecture-project-card__cta">
                  {t("project.viewProject")}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default ArchitectureProjectGrid;
