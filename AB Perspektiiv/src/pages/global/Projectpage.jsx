import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/home/Footer";
import Carousel from "react-bootstrap/Carousel";
import config from "../../data/config.json";
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
  const { name } = useParams();
  const decodedName = decodeURIComponent(name || "");
  const [projects, setProjects] = useState([]);
  const project = projects.find((item) => item.name === decodedName);
  const relatedProjects = projects.filter(
    (item) => item.category === project?.category && item.name !== decodedName
  );

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
  }, []);

  if (!project) {
    return (
      <div className="project-detail-page">
        <p className="project-detail-page__missing">Projekti ei leitud.</p>
        <Link to="/arhitektuur">Tagasi arhitektuuri lehele</Link>
        <Footer />
      </div>
    );
  }

  const photos = PHOTO_KEYS.map((key) => project[key]).filter(Boolean);
  const visualCredit = getVisualCredit(project);

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
          <p className="project-detail__eyebrow">{project.category}</p>
          <h1>{project.name}</h1>
          {project.asukoht && <p>Asukoht: {project.asukoht}</p>}
          {project.valminud && <p>Valminud: {project.valminud}</p>}
          {project.pindala && <p>Pindala: {project.pindala}</p>}
          {project.autor && <p>Autor: {project.autor}</p>}
          {visualCredit && (
            <p>
              {visualCredit.label}: {visualCredit.value}
            </p>
          )}
        </aside>
      </section>

      {relatedProjects.length > 0 && (
        <section className="project-detail-related">
          <h2>Veel projekte</h2>
          <div className="architecture-projects__grid">
            {relatedProjects.map((related, index) => (
              <Link
                key={`${related.name}-${index}`}
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
                  <span className="architecture-project-card__cta">Vaata projekti</span>
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
