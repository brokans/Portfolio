import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { readCollection } from "../../lib/database";
import { getProjectPhotos } from "../../lib/projectPhotos";

function InteriorCards() {
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
    <div className="interior-projects-container">
      {interiorProjects.map((project) => {
        const [firstPhoto] = getProjectPhotos(project);

        return (
          <div key={project.name} className="extra-card-container">
            <Link
              className="noUnderline"
              to={`/project-page/${encodeURIComponent(project.name)}`}
            >
              <Card className="homePageCard">
                {firstPhoto && <img src={firstPhoto} alt={project.name} />}
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default InteriorCards;
