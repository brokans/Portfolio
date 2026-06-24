import React, { useRef, useState } from "react";
import { useEffect } from "react";
import config from "../../data/config.json";
import { writeCollection } from "../../lib/database";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryInputRef = useRef();
  // const categorySelectRef = useRef();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSelectedCategoryIndex(null);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(config.categories)
      .then((res) => res.json())
      .then((json) => setCategories(json || []));
  }, []);

  function addCategory() {
    const newCategoryName = categoryInputRef.current.value;
    if (newCategoryName.trim() !== "") {
      const newCategory = { name: newCategoryName };
      const updatedCategories = [...categories, newCategory];

      writeCollection("categories", updatedCategories)
        .then(() => {
          setCategories(updatedCategories);
          handleClose();
        })
        .catch((error) => {
          console.error("Error adding category:", error);
        });
    }
  }

  function deleteCategory(index) {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
    writeCollection("categories", updatedCategories);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Halda Kategooriaid
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Halda Kategooriaid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control ref={categoryInputRef} type="text" autoFocus />
              <Form.Label>Kategooria</Form.Label>
              <br />
              {categories.map((category, index) => (
                <div>
                  {category.name}
                  <button onClick={() => deleteCategory(index)}>x</button>
                </div>
              ))}

              <br />
              <br />
            </Form.Group>
            <button onClick={() => deleteCategory(selectedCategoryIndex)}>
              Kustuta
            </button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {" "}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              addCategory();
            }}
          >
            Kinnita
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MaintainCategories;
