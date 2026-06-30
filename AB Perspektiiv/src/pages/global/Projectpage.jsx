import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../components/home/Footer";
import Carousel from "react-bootstrap/Carousel";
import { readCollection } from "../../lib/database";
import { getVisualCredit } from "../../lib/projectVisualCredit";

const PHOTO_KEYS = [
  "photoOne",
  "photoTwo",
  "photoThree",
  "photoFour",
  "photoFive",
  "photoSix",
  "photoSeven",
  "photoEight",
  "photoNine",
  "photoTen",
  "photoEleven",
];

function ProjectPage() {
  const { t } = useTranslation();
  const { name } = useParams();
  const decodedName = decodeURIComponent(name || "");
  const [projects, setProjects] = useState([]);
  const project = projects.find((item) => item.name === decodedName);
  const relatedProjects = projects.filter(
    (item) => item.category === project?.category && item.name !== decodedName
  );

  useEffect(() => {
    readCollection("projects")
      .then(setProjects)
      .catch(console.error);
  }, []);

  if (!project) {
    return (
      <div className="project-detail-page">
        <p className="project-detail-page__missing">{t("project.notFound")}</p>
        <Link to="/arhitektuur">{t("project.backToArchitecture")}</Link>
        <Footer />
      </div>
    );
  }

  const photos = PHOTO_KEYS.map((key) => project[key]).filter(Boolean);
  const visualCredit = getVisualCredit(project);
  const categoryLabel = t(`categories.${project.category}`, {
    defaultValue: project.category,
  });

  return (
    <div className="project-detail-page">
      <Helmet>
        <title>{`${project.name} | AB Perspektiiv`}</title>
        <meta
          name="description"
          content={`${project.name} — ${project.asukoht || "AB Perspektiiv arhitektuuriprojekt"}.`}
        />
      </Helmet>

      <section className="project-detail">
        <div className="project-detail__gallery">
          {photos.length > 0 ? (
            <Carousel fade interval={4000} pause="hover">
              {photos.map((photo, index) => (
                <Carousel.Item key={`${photo}-${index}`}>
                  <img src={photo} alt={`${project.name} ${index + 1}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <div className="project-detail__gallery-placeholder" />
          )}
        </div>

        <aside className="project-detail__info">
          <p className="project-detail__eyebrow">{categoryLabel}</p>
          <h1>{project.name}</h1>
          {project.asukoht && (
            <p>{t("project.locationValue", { value: project.asukoht })}</p>
          )}
          {project.valminud && (
            <p>{t("project.completedValue", { value: project.valminud })}</p>
          )}
          {project.pindala && (
            <p>{t("project.areaValue", { value: project.pindala })}</p>
          )}
          {project.autor && (
            <p>{t("project.authorValue", { value: project.autor })}</p>
          )}
          {visualCredit && (
            <p>
              {visualCredit.label}: {visualCredit.value}
            </p>
          )}
        </aside>
      </section>

      {relatedProjects.length > 0 && (
        <section className="project-detail-related">
          <h2>{t("project.moreProjects")}</h2>
          <div className="architecture-projects__grid">
            {relatedProjects.map((related) => (
              <Link
                key={related.name}
                to={`/project-page/${encodeURIComponent(related.name)}`}
                className="architecture-project-card"
              >
                <div className="architecture-project-card__media">
                  {related.photoOne && (
                    <img src={related.photoOne} alt={related.name} loading="lazy" />
                  )}
                </div>
                <div className="architecture-project-card__body">
                  <h3 className="architecture-project-card__name">{related.name}</h3>
                  <span className="architecture-project-card__cta">
                    {t("project.viewProject")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default ProjectPage;
