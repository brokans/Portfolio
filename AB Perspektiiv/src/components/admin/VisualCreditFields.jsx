import Form from "react-bootstrap/Form";

function VisualCreditFields({
  type,
  value,
  onTypeChange,
  onValueChange,
  name = "visualCreditType",
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Visuaali allikas</Form.Label>
      <div className="d-flex flex-wrap gap-3 mb-2">
        <Form.Check
          inline
          type="radio"
          id={`${name}-photo`}
          name={name}
          label="Pildistatud"
          checked={type === "photo"}
          onChange={() => onTypeChange("photo")}
        />
        <Form.Check
          inline
          type="radio"
          id={`${name}-render`}
          name={name}
          label="Renderdatud"
          checked={type === "render"}
          onChange={() => onTypeChange("render")}
        />
        <Form.Check
          inline
          type="radio"
          id={`${name}-none`}
          name={name}
          label="Puudub"
          checked={type === "none"}
          onChange={() => onTypeChange("none")}
        />
      </div>

      {type === "photo" && (
        <>
          <Form.Label>Fotograaf</Form.Label>
          <Form.Control
            type="text"
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
            placeholder="Nt Lisette Laanoja"
          />
        </>
      )}

      {type === "render" && (
        <>
          <Form.Label>Visuaali programm</Form.Label>
          <Form.Control
            type="text"
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
            placeholder="Nt Blender, Archicad"
          />
        </>
      )}
    </Form.Group>
  );
}

export default VisualCreditFields;
