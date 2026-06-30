import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../../css/Contact.module.css";
import { useTranslation } from "react-i18next";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);
    setError(false);

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        form.current.reset();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <>
      {sent && (
        <div
          style={{
            color: "green",
            marginBottom: "16px",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          {t("contact_sent_message")}
        </div>
      )}
      {error && (
        <div
          style={{
            color: "#b00020",
            marginBottom: "16px",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          {t("contact_error_message")}
        </div>
      )}
      <Form className={`${styles.emailForm} mb-3`} ref={form} onSubmit={sendEmail}>
        <Form.Group className={`${styles.formGroup} mb-3`}>
          <Form.Control
            className={styles.formControl}
            type="text"
            placeholder={t("contact_name_placeholder")}
            name="from_name"
            required
          />
        </Form.Group>
        <Form.Group
          className={`${styles.formGroup} mb-3`}
          controlId="formBasicEmail"
        >
          <Form.Control
            className={styles.formControl}
            type="email"
            placeholder={t("contact_email_placeholder")}
            name="from_email"
            required
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
            placeholder={t("contact_message_placeholder")}
            name="message"
            required
          />
        </Form.Group>
        <Button
          variant="secondary"
          type="submit"
          className={styles.submitButton}
        >
          {t("contact_send_button")}
        </Button>
      </Form>
    </>
  );
};
