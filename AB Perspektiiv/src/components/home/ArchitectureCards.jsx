import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { readCollection } from "../../lib/database";

function ArchitectureCards() {
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
    <div className="interior-projects-container">
      {architectureProjects.map((project) => (
        <div key={project.name} className="extra-card-container">
          <Link
            className="noUnderline"
            to={`/project-page/${encodeURIComponent(project.name)}`}
          >
            <Card className="homePageCard">
              <img src={project.photoOne} alt={project.name} />
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArchitectureCards;
