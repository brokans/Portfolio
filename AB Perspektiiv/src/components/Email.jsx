import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import { sendContactMessage } from "../lib/contactApi";

function Email({ variant = "default" }) {
  const form = useRef();
  const { t } = useTranslation();
  const isContact = variant === "contact";
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const gotcha = String(formData.get("_gotcha") ?? "").trim();

    if (gotcha) {
      return;
    }

    if (!name || !email || !message) {
      toast.error(t("email.errorValidation"));
      return;
    }

    setIsSending(true);

    try {
      await sendContactMessage({ name, email, message });
      form.current.reset();
      toast.success(t("email.success"));
    } catch (error) {
      const code = error?.code;
      if (code === "missing_fields" || code === "invalid_email" || code === "field_too_long") {
        toast.error(t("email.errorValidation"));
      } else if (code === "mail_not_configured") {
        toast.error(t("email.errorNotConfigured"));
      } else {
        toast.error(t("email.errorGeneric"));
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`email-form${isContact ? " email-form--contact" : ""}`}>
      <ToastContainer position="top-center" autoClose={4000} theme="colored" />
      {isContact && (
        <p className="email-form__card-title">{t("contactPage.formCardTitle")}</p>
      )}
      <Form ref={form} className="email-form__form" onSubmit={sendEmail}>
        <Form.Group className="email-form__group visually-hidden" aria-hidden="true">
          <Form.Label htmlFor="contact-gotcha">Leave blank</Form.Label>
          <Form.Control
            tabIndex={-1}
            autoComplete="off"
            id="contact-gotcha"
            type="text"
            name="_gotcha"
          />
        </Form.Group>
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
            name="name"
            required
            disabled={isSending}
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
            name="email"
            required
            disabled={isSending}
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
            required
            disabled={isSending}
          />
        </Form.Group>
        <div className="email-form__actions">
          <Button
            className={isContact ? "email-form__submit" : undefined}
            variant="primary"
            type="submit"
            disabled={isSending}
          >
            {isSending ? t("email.sending") : t("email.send")}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Email;
