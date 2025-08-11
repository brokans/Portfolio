import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../../css/Contact.module.css";

export const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);
    emailjs
      .sendForm(
        "service_9cw7bxi",
        "template_akogdbi",
        form.current,
        "PXhCZSpIJP4mL_Cfv"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setSent(true);
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {sent && (
        <div style={{ color: 'green', marginBottom: '16px', textAlign: 'center', fontWeight: 500 }}>
          Sõnum on saadetud!
        </div>
      )}
      <Form className={`${styles.emailForm} mb-3`} ref={form} onSubmit={sendEmail}>
      <Form.Group className={`${styles.formGroup} mb-3`}>
        <Form.Control 
          className={styles.formControl}
          type="text" 
          placeholder="Nimi:" 
          name="from_name" 
        />
      </Form.Group>
      <Form.Group
        className={`${styles.formGroup} mb-3`}
        controlId="formBasicEmail"
      >
        <Form.Control
          className={styles.formControl}
          type="email"
          placeholder="e-Mail:"
          name="from_email"
        />
      </Form.Group>

      <Form.Group
        className={`${styles.formGroup} mb-3`}
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Control
          className={styles.formControl}
          as="textarea"
          rows={3}
          placeholder="Sõnum:"
          name="message"
        />
      </Form.Group>
      <Button 
        variant="secondary" 
        type="submit"
        className={styles.submitButton}
      >
        Saada
      </Button>
      </Form>
    </>
  );
};
