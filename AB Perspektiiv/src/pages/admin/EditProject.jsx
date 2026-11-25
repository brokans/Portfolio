import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { writeCollection } from "../../lib/database";
import {
  applyVisualCreditInput,
  getVisualCreditType,
  getVisualCreditValue,
} from "../../lib/projectVisualCredit";
import { getLegacyPhotoFields, getProjectPhotos } from "../../lib/projectPhotos";
import ProjectPhotoFields from "../../components/admin/ProjectPhotoFields";
import VisualCreditFields from "../../components/admin/VisualCreditFields";

function EditProject({
  project,
  projectIndex,
  projects,
  show,
  onHide,
  onProjectsUpdated,
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [asukoht, setAsukoht] = useState("");
  const [valminud, setValminud] = useState("");
  const [pindala, setPindala] = useState("");
  const [autor, setAutor] = useState("");
  const [photos, setPhotos] = useState([""]);
  const [creditType, setCreditType] = useState("none");
  const [creditValue, setCreditValue] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    if (!show || !project) {
      return;
    }

    setName(project.name || "");
    setCategory(project.category || "");
    setAsukoht(project.asukoht || "");
    setValminud(project.valminud || "");
    setPindala(project.pindala || "");
    setAutor(project.autor || "");
    const projectPhotos = getProjectPhotos(project);
    setPhotos(projectPhotos.length > 0 ? projectPhotos : [""]);
    setCreditType(getVisualCreditType(project));
    setCreditValue(getVisualCreditValue(project));
    setSaveError("");
  }, [project, show]);

  function handleCreditTypeChange(nextType) {
    if (nextType !== creditType) {
      setCreditValue("");
    }
    setCreditType(nextType);
  }

  function handlePhotoChange(photoIndex, value) {
    setPhotos((currentPhotos) =>
      currentPhotos.map((photo, index) =>
        index === photoIndex ? value : photo
      )
    );
  }

  function addPhotoField() {
    setPhotos((currentPhotos) => [...currentPhotos, ""]);
  }

  function removePhotoField(photoIndex) {
    setPhotos((currentPhotos) =>
      currentPhotos.length > 1
        ? currentPhotos.filter((_, index) => index !== photoIndex)
        : currentPhotos
    );
  }

  function edit() {
    const normalizedName = name.trim();
    if (!normalizedName) {
      setSaveError("Palun sisesta projekti nimi.");
      return;
    }

    if (normalizedName[0].toUpperCase() !== normalizedName[0]) {
      setSaveError("Palun sisesta projekti nimi suure algustähega.");
      return;
    }

    const photoUrls = photos.map((photo) => photo.trim()).filter(Boolean);
    const updatedProject = applyVisualCreditInput(
      {
        ...project,
        category,
        name: normalizedName,
        photos: photoUrls,
        ...getLegacyPhotoFields(photoUrls),
        asukoht,
        valminud,
        pindala,
        autor,
      },
      creditType,
      creditValue
    );
    const updatedProjects = projects.map((currentProject, index) =>
      index === projectIndex ? updatedProject : currentProject
    );

    setSaving(true);
    setSaveError("");
    writeCollection("projects", updatedProjects)
      .then(() => {
        onProjectsUpdated(updatedProjects);
        onHide();
      })
      .catch((error) => {
        console.error("Projekti muutmine ebaõnnestus.", error);
        setSaveError("Projekti salvestamine ebaõnnestus. Proovi uuesti.");
      })
      .finally(() => setSaving(false));
  }

  return (
    <Modal show={show && Boolean(project)} onHide={onHide} size="lg" scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Muuda projekti</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Projekti nimi</Form.Label>
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Nimi"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kategooria</Form.Label>
            <Form.Control
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              type="text"
              placeholder="Kategooria"
            />
          </Form.Group>
          <ProjectPhotoFields
            photos={photos}
            onChange={handlePhotoChange}
            onAdd={addPhotoField}
            onRemove={removePhotoField}
          />
          <Form.Group className="mb-3">
            <Form.Label>Asukoht</Form.Label>
            <Form.Control
              value={asukoht}
              onChange={(event) => setAsukoht(event.target.value)}
              type="text"
              placeholder="Asukoht"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Valminud</Form.Label>
            <Form.Control
              value={valminud}
              onChange={(event) => setValminud(event.target.value)}
              type="text"
              placeholder="Valminud"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pindala</Form.Label>
            <Form.Control
              value={pindala}
              onChange={(event) => setPindala(event.target.value)}
              type="text"
              placeholder="Pindala"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Autor</Form.Label>
            <Form.Control
              value={autor}
              onChange={(event) => setAutor(event.target.value)}
              type="text"
              placeholder="Autor"
            />
          </Form.Group>
          <VisualCreditFields
            name="editProjectCreditType"
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
        <Button
          variant="secondary"
          onClick={onHide}
          type="button"
          disabled={isSaving}
        >
          Sule
        </Button>
        <Button
          variant="primary"
          onClick={edit}
          type="button"
          disabled={isSaving}
        >
          {isSaving ? "Salvestan..." : "Salvesta muudatused"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProject;
