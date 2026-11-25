import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { readCollection, writeCollection } from "../../lib/database";
import { applyVisualCreditInput } from "../../lib/projectVisualCredit";
import { getLegacyPhotoFields } from "../../lib/projectPhotos";
import ProjectPhotoFields from "./ProjectPhotoFields";
import VisualCreditFields from "./VisualCreditFields";
import { Spinner } from "react-bootstrap";

function AddProjectModal({ onProjectsUpdated }) {
  const [projects, setProjects] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const nameRef = useRef();
  const categoryRef = useRef();
  const asukohtRef = useRef();
  const valminudRef = useRef();
  const pindalaRef = useRef();
  const autorRef = useRef();
  const [photos, setPhotos] = useState([""]);
  const [creditType, setCreditType] = useState("none");
  const [creditValue, setCreditValue] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [isSaving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  function handlePhotoChange(index, value) {
    setPhotos((currentPhotos) =>
      currentPhotos.map((photo, photoIndex) =>
        photoIndex === index ? value : photo
      )
    );
  }

  function addPhotoField() {
    setPhotos((currentPhotos) => [...currentPhotos, ""]);
  }

  function removePhotoField(index) {
    setPhotos((currentPhotos) =>
      currentPhotos.length > 1
        ? currentPhotos.filter((_, photoIndex) => photoIndex !== index)
        : currentPhotos
    );
  }

  function handleCreditTypeChange(nextType) {
    if (nextType !== creditType) {
      setCreditValue("");
    }
    setCreditType(nextType);
  }

  useEffect(() => {
    readCollection("projects")
      .then((json) => {
        setProjects(json);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  async function addProject() {
    setSaveError("");
    setSaving(true);
    const photoUrls = photos.map((photo) => photo.trim()).filter(Boolean);
    const project = applyVisualCreditInput(
      {
        name: nameRef.current.value,
        category: categoryRef.current.value,
        photos: photoUrls,
        ...getLegacyPhotoFields(photoUrls),
        asukoht: asukohtRef.current.value,
        valminud: valminudRef.current.value,
        pindala: pindalaRef.current.value,
        autor: autorRef.current.value,
      },
      creditType,
      creditValue
    );
    const updatedProjects = [...projects, project];

    try {
      await writeCollection("projects", updatedProjects);
      setProjects(updatedProjects);
      onProjectsUpdated(updatedProjects);
      setPhotos([""]);
      handleClose();
    } catch (error) {
      console.error("Projekti lisamine ebaõnnestus.", error);
      setSaveError("Projekti salvestamine ebaõnnestus. Proovi uuesti.");
    } finally {
      setSaving(false);
    }
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Lisa Uus Projekt
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lisa Projekt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Projekti nimi</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                autoFocus
                placeholder="Projekti nimi"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Kategooria</Form.Label>
              <Form.Control
                ref={categoryRef}
                type="text"
                placeholder="Arhitektuur või Sisearhitektuur"
              />
            </Form.Group>
            <ProjectPhotoFields
              photos={photos}
              onChange={handlePhotoChange}
              onAdd={addPhotoField}
              onRemove={removePhotoField}
            />
            <Form.Group className="mb-3">
              <Form.Label>Projekti info</Form.Label>
              <Form.Control
                ref={asukohtRef}
                type="text"
                placeholder="Asukoht"
              />
              <Form.Control
                ref={valminudRef}
                type="text"
                placeholder="Valminud"
              />
              <Form.Control
                ref={pindalaRef}
                type="text"
                placeholder="Pindala"
              />
              <Form.Control
                ref={autorRef}
                type="text"
                placeholder="Autor"
              />
            </Form.Group>
            <VisualCreditFields
              name="addProjectCreditType"
              type={creditType}
              value={creditValue}
              onTypeChange={handleCreditTypeChange}
              onValueChange={setCreditValue}
            />
            {saveError && (
              <p className="text-danger" role="alert">
                {saveError}
              </p>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sule
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={addProject}
            disabled={isSaving}
          >
            {isSaving ? "Salvestan..." : "Salvesta"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProjectModal;
