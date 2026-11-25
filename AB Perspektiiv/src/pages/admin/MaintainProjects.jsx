import { useEffect, useRef, useState } from "react";
import { readCollection, writeCollection } from "../../lib/database";
import { Button, Modal, Spinner } from "react-bootstrap";
import AddProjectModal from "../../components/admin/AddProjectModal";
import EditProject from "./EditProject";

function MaintainProjects() {
  const [projects, setProjects] = useState([]);
  const [dbProjects, setDbProjects] = useState([]);
  const [editingProjectIndex, setEditingProjectIndex] = useState(null);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [isDeleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

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

  async function deleteProject() {
    if (!projectToDelete) {
      return;
    }

    const updatedProjects = dbProjects.filter(
      (dbProject) => dbProject !== projectToDelete
    );

    setDeleting(true);
    setDeleteError("");
    try {
      await writeCollection("projects", updatedProjects);
      updateProjectLists(updatedProjects);
      setProjectToDelete(null);
    } catch (error) {
      console.error("Projekti kustutamine ebaõnnestus.", error);
      setDeleteError("Projekti kustutamine ebaõnnestus. Proovi uuesti.");
    } finally {
      setDeleting(false);
    }
  }

  function closeDeleteModal() {
    if (!isDeleting) {
      setProjectToDelete(null);
      setDeleteError("");
    }
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
              onClick={() => {
                setDeleteError("");
                setProjectToDelete(project);
              }}
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
      <Modal
        show={Boolean(projectToDelete)}
        onHide={closeDeleteModal}
        centered
      >
        <Modal.Header closeButton={!isDeleting}>
          <Modal.Title>Kustuta projekt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Kas soovid kindlasti kustutada projekti{" "}
            <strong>{projectToDelete?.name}</strong>?
          </p>
          {deleteError && (
            <p className="text-danger" role="alert">
              {deleteError}
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={closeDeleteModal}
            disabled={isDeleting}
          >
            Tühista
          </Button>
          <Button
            variant="danger"
            onClick={deleteProject}
            disabled={isDeleting}
          >
            {isDeleting ? "Kustutan..." : "Kustuta projekt"}
          </Button>
        </Modal.Footer>
      </Modal>
      <br /> <br />
    </div>
  );
}

export default MaintainProjects;
