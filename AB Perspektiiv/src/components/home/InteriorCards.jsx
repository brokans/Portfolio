import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { readCollection } from "../../lib/database";

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
      {interiorProjects.map((project) => (
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

export default InteriorCards;
