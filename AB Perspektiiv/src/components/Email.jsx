import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

function Email() {
  const form = useRef();
  const { t } = useTranslation();

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
    <div className="email-form">
      <Form ref={form} className="email-form__form" onSubmit={sendEmail}>
        <Form.Group className="email-form__group mb-3">
          <Form.Control
            type="text"
            placeholder={t("email.name")}
            name="from_name"
          />
        </Form.Group>
        <Form.Group className="email-form__group mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder={t("email.email")}
            name="from_email"
          />
        </Form.Group>
        <Form.Group
          className="email-form__group mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control
            as="textarea"
            placeholder={t("email.message")}
            rows={5}
            name="message"
          />
        </Form.Group>
        <div className="email-form__actions">
          <Button variant="primary" type="submit">
            {t("email.send")}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Email;
