import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zoynupw",
        "template_akogdbi",
        form.current,
        "PXhCZSpIJP4mL_Cfv"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form className="email-form" ref={form} onSubmit={sendEmail}>
      <Form.Group style={{ width: "20rem", margin: "auto" }} className="mb-3">
        <Form.Control type="text" placeholder="Nimi:" name="from_name" />
      </Form.Group>
      <Form.Group
        style={{ width: "20rem", margin: "auto" }}
        controlId="formBasicEmail"
      >
        <Form.Control
          className="mb-3"
          type="email"
          placeholder="e-Mail:"
          name="from_email"
        />
      </Form.Group>

      <Form.Group
        style={{ width: "20rem", margin: "auto" }}
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Sõnum:"
          name="message"
        />
      </Form.Group>
      <Button variant="dark" type="submit">
        Send
      </Button>
    </Form>
  );
};
