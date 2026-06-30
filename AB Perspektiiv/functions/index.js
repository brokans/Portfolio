import { onRequest } from "firebase-functions/v2/https";
import { defineString } from "firebase-functions/params";
import {
  deliverContactEmail,
  getContactTransportConfig,
  validateContactPayload,
} from "../tools/sendContactEmail.js";

const gmailUser = defineString("GMAIL_USER", { default: "" });
const gmailClientId = defineString("GMAIL_CLIENT_ID", { default: "" });
const gmailClientSecret = defineString("GMAIL_CLIENT_SECRET", { default: "" });
const gmailRefreshToken = defineString("GMAIL_REFRESH_TOKEN", { default: "" });
const smtpHost = defineString("SMTP_HOST", { default: "" });
const smtpPort = defineString("SMTP_PORT", { default: "" });
const smtpUser = defineString("SMTP_USER", { default: "" });
const smtpPass = defineString("SMTP_PASS", { default: "" });
const resendApiKey = defineString("RESEND_API_KEY", { default: "" });

const contactToEmail = defineString("CONTACT_TO_EMAIL", {
  default: "angeelika.saaron@abperspektiiv.com",
});
const contactFromEmail = defineString("CONTACT_FROM_EMAIL", {
  default: "noreply@abperspektiiv.com",
});

const ALLOWED_ORIGINS = new Set([
  "http://localhost:3000",
  "http://localhost:5173",
  "https://abperspektiiv.com",
  "https://www.abperspektiiv.com",
  "https://line-stuudio.web.app",
  "https://line-stuudio.firebaseapp.com",
]);

function applyCors(req, res) {
  const origin = req.get("Origin");
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  }
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
}

function getRuntimeTransportConfig() {
  return getContactTransportConfig({
    GMAIL_USER: gmailUser.value(),
    GMAIL_CLIENT_ID: gmailClientId.value(),
    GMAIL_CLIENT_SECRET: gmailClientSecret.value(),
    GMAIL_REFRESH_TOKEN: gmailRefreshToken.value(),
    SMTP_HOST: smtpHost.value(),
    SMTP_PORT: smtpPort.value(),
    SMTP_USER: smtpUser.value(),
    SMTP_PASS: smtpPass.value(),
    RESEND_API_KEY: resendApiKey.value(),
    CONTACT_TO_EMAIL: contactToEmail.value(),
    CONTACT_FROM_EMAIL: contactFromEmail.value(),
  });
}

export const sendContactEmailHandler = onRequest(
  {
    region: "europe-west1",
    maxInstances: 10,
  },
  async (req, res) => {
    applyCors(req, res);

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ error: "method_not_allowed" });
      return;
    }

    const transport = getRuntimeTransportConfig();
    if (!transport) {
      res.status(503).json({ error: "mail_not_configured" });
      return;
    }

    try {
      const validation = validateContactPayload(req.body ?? {});

      if (!validation.ok) {
        res.status(validation.status).json({ error: validation.error });
        return;
      }

      if (validation.silent) {
        res.status(200).json({ ok: true });
        return;
      }

      const { name, email, message } = validation.data;

      await deliverContactEmail({
        name,
        email,
        message,
        transport,
      });

      res.status(200).json({ ok: true });
    } catch (error) {
      console.error("sendContactEmail failed", error);
      res.status(500).json({ error: error?.code || "send_failed" });
    }
  }
);

export { sendContactEmailHandler as sendContactEmail };
