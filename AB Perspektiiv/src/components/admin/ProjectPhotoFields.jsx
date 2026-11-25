import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ProjectPhotoFields({ photos, onChange, onAdd, onRemove }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Pildid</Form.Label>
      {photos.map((photo, index) => (
        <div key={index} className="d-flex align-items-center gap-2 mb-2">
          <Form.Control
            type="text"
            value={photo}
            onChange={(event) => onChange(index, event.target.value)}
            placeholder={`Foto ${index + 1} URL`}
            aria-label={`Foto ${index + 1} URL`}
          />
          {photos.length > 1 && (
            <Button
              type="button"
              variant="outline-secondary"
              onClick={() => onRemove(index)}
              aria-label={`Eemalda foto ${index + 1}`}
            >
              Eemalda
            </Button>
          )}
        </div>
      ))}
      <Button type="button" variant="outline-primary" onClick={onAdd}>
        Lisa pilt
      </Button>
    </Form.Group>
  );
}

export default ProjectPhotoFields;
