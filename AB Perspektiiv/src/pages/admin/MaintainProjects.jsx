import { useEffect, useRef, useState } from "react";
import { readCollection, writeCollection } from "../../lib/database";
import { Button, Spinner } from "react-bootstrap";
import AddProjectModal from "../../components/admin/AddProjectModal";
import EditProject from "./EditProject";

function MaintainProjects() {
  const [projects, setProjects] = useState([]);
  const [dbProjects, setDbProjects] = useState([]);
  const [editingProjectIndex, setEditingProjectIndex] = useState(null);

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

  function updateProjectLists(updatedProjects) {
    setDbProjects(updatedProjects);
    const searchTerm = searchedRef.current
      ? searchedRef.current.value.toLowerCase()
      : "";
    setProjects(
      updatedProjects.filter((project) =>
        project.name.toLowerCase().includes(searchTerm)
      )
    );
  }

  function deleteProject(project) {
    const updatedProjects = dbProjects.filter(
      (dbProject) => dbProject !== project
    );
    updateProjectLists(updatedProjects);
    writeCollection("projects", updatedProjects).catch(console.error);
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
      <AddProjectModal onProjectsUpdated={updateProjectLists} />
      {projects.map((project) => {
        const projectIndex = dbProjects.indexOf(project);

        return (
          <div key={projectIndex} className="manage_project">
            <br />
            {project.name} <br />
            {project.category} <br />
            {project.autor} <br />
            {project.fotograaf} <br />
            {project.asukoht} <br />
            {project.pindala} <br />
            {project.valminud} <br />
            {projectIndex}
            <br /> <br />
            <Button
              onClick={() => setEditingProjectIndex(projectIndex)}
              disabled={projectIndex === -1}
            >
              Muuda
            </Button>
            <Button
              onClick={() => deleteProject(project)}
              variant="dark"
              type="button"
            >
              X
            </Button>
            <br /> <br />
          </div>
        );
      })}
      <EditProject
        show={editingProjectIndex !== null}
        projectIndex={editingProjectIndex}
        project={
          editingProjectIndex === null
            ? null
            : dbProjects[editingProjectIndex]
        }
        projects={dbProjects}
        onHide={() => setEditingProjectIndex(null)}
        onProjectsUpdated={updateProjectLists}
      />
      <br /> <br />
    </div>
  );
}

export default MaintainProjects;
