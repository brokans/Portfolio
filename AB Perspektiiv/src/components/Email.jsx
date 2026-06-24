import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

function Email({ variant = "default" }) {
  const form = useRef();
  const { t } = useTranslation();
  const isContact = variant === "contact";

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
