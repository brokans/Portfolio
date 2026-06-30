import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../../css/Contact.module.css";
import { useTranslation } from "react-i18next";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact({ title, variant = "default" }) {
  const { t } = useTranslation();
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const isCard = variant === "card";

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);
    setError(false);

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError(true);
      return;
    }

    setIsSending(true);

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
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className={`${styles.wrapper} ${isCard ? styles.wrapperCard : ""}`}>
      {title ? <h2 className={styles.formTitle}>{title}</h2> : null}

      {sent ? (
        <div className={styles.alertSuccess} role="status">
          {t("contact_sent_message")}
        </div>
      ) : null}
      {error ? (
        <div className={styles.alertError} role="alert">
          {t("contact_error_message")}
        </div>
      ) : null}

      <Form
        className={styles.emailForm}
        ref={form}
        onSubmit={sendEmail}
        noValidate
      >
        <Form.Group className={styles.formGroup} controlId="contact-from-name">
          <Form.Label className={styles.label}>
            {t("contact_name_label")}
          </Form.Label>
          <Form.Control
            className={styles.formControl}
            type="text"
            name="from_name"
            required
            disabled={isSending}
          />
        </Form.Group>

        <Form.Group className={styles.formGroup} controlId="contact-from-email">
          <Form.Label className={styles.label}>
            {t("contact_email_label")}
          </Form.Label>
          <Form.Control
            className={styles.formControl}
            type="email"
            name="from_email"
            required
            disabled={isSending}
          />
        </Form.Group>

        <Form.Group className={styles.formGroup} controlId="contact-message">
          <Form.Label className={styles.label}>
            {t("contact_message_label")}
          </Form.Label>
          <Form.Control
            className={styles.formControl}
            as="textarea"
            rows={5}
            name="message"
            required
            disabled={isSending}
          />
        </Form.Group>

        <div className={styles.actions}>
          <Button
            type="submit"
            className={styles.submitButton}
            disabled={isSending}
          >
            {isSending ? t("contact_sending") : t("contact_send_button")}
          </Button>
        </div>
      </Form>
    </div>
  );
}
