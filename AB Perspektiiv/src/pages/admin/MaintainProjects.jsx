import React, { useEffect, useRef, useState } from "react";
import { readCollection, writeCollection } from "../../lib/database";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddProjectModal from "../../components/admin/AddProjectModal";

function MaintainProjects(props) {
  const [projects, setProjects] = useState([]);
  const [dbProjects, setDbProjects] = useState([]);

  const searchedRef = useRef();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    readCollection("projects")
      .then((json) => {
        setProjects(json);
        setDbProjects(json);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  function deleteProject(index) {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    setDbProjects(updatedProjects);
    writeCollection("projects", updatedProjects);
  }

  function searchFromProducts() {
    const result = dbProjects.filter((project) =>
      project.name
        .toLowerCase()
        .includes(searchedRef.current.value.toLowerCase())
    );
    setProjects(result);
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div>
      <br />
      <p>Otsi projekti:</p>
      <input
        onChange={searchFromProducts}
        ref={searchedRef}
        type="text"
        placeholder="Projekti nimi"
      />{" "}
      <br />
      <AddProjectModal />
      {projects.map((project, index) => (
        <div key={index} className="manage_project">
          <br />
          {project.name} <br />
          {project.category} <br />
          {project.autor} <br />
          {project.fotograaf} <br />
          {project.asukoht} <br />
          {project.pindala} <br />
          {project.valminud} <br />
          {index}
          <br /> <br />
          <Button
            as={Link}
            to={"/admin/maintain-projects/edit-project/" + index}
          >
            Muuda
          </Button>
          <Button
            onClick={() => deleteProject(index)}
            variant="dark "
            type="submit"
          >
            X
          </Button>
          <br /> <br />
        </div>
      ))}
      <br /> <br />
    </div>
  );
}

export default MaintainProjects;
