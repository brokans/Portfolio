import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/home/Footer";
import ArchitectureBanner from "../../components/home/ArchitectureBanner";
import ArchitectureProjectGrid from "../../components/home/ArchitectureProjectGrid";
import config from "../../data/config.json";

function Arhitektuur() {
  const [projects, setProjects] = useState([]);
  const architectureProjects = projects.filter(
    (project) => project.category === "Arhitektuur"
  );

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
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
      <ArchitectureBanner />
      <ArchitectureProjectGrid projects={architectureProjects} />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Arhitektuur;
