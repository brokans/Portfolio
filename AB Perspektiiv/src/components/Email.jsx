import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Email({ variant = "default" }) {
  const form = useRef();
  const { t } = useTranslation();
  const isContact = variant === "contact";

  const sendEmail = (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS environment variables are not configured");
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
      })
      .catch(console.error);
  };

  return (
    <div className={`email-form${isContact ? " email-form--contact" : ""}`}>
      {isContact && (
        <p className="email-form__card-title">{t("contactPage.formCardTitle")}</p>
      )}
      <Form ref={form} className="email-form__form" onSubmit={sendEmail}>
        <Form.Group className="email-form__group mb-3">
          {isContact && (
            <Form.Label className="email-form__label" htmlFor="contact-from-name">
              {t("email.name")}
            </Form.Label>
          )}
          <Form.Control
            id={isContact ? "contact-from-name" : undefined}
            type="text"
            placeholder={isContact ? undefined : t("email.name")}
            name="from_name"
          />
        </Form.Group>
        <Form.Group
          className="email-form__group mb-3"
          controlId={isContact ? "contact-from-email" : "formBasicEmail"}
        >
          {isContact && (
            <Form.Label className="email-form__label" htmlFor="contact-from-email">
              {t("email.email")}
            </Form.Label>
          )}
          <Form.Control
            type="email"
            placeholder={isContact ? undefined : t("email.email")}
            name="from_email"
          />
        </Form.Group>
        <Form.Group
          className="email-form__group mb-3"
          controlId={isContact ? "contact-message" : "exampleForm.ControlTextarea1"}
        >
          {isContact && (
            <Form.Label className="email-form__label" htmlFor="contact-message">
              {t("email.message")}
            </Form.Label>
          )}
          <Form.Control
            id={isContact ? "contact-message" : undefined}
            as="textarea"
            placeholder={isContact ? undefined : t("email.message")}
            rows={5}
            name="message"
          />
        </Form.Group>
        <div className="email-form__actions">
          <Button
            className={isContact ? "email-form__submit" : undefined}
            variant="primary"
            type="submit"
          >
            {t("email.send")}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Email;
