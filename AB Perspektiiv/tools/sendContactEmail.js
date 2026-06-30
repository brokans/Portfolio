import nodemailer from "nodemailer";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function defaultContactTo(env) {
  return env.CONTACT_TO_EMAIL?.trim() || "angeelika.saaron@abperspektiiv.com";
}

function defaultContactFrom(env) {
  return env.CONTACT_FROM_EMAIL?.trim() || "noreply@abperspektiiv.com";
}

function formatFromAddress(email) {
  return email.includes("<") ? email : `AB Perspektiiv <${email}>`;
}

export function validateContactPayload(body) {
  const { name, email, message, _gotcha } = body ?? {};

  if (_gotcha) {
    return { ok: true, silent: true };
  }

  const trimmedName = String(name ?? "").trim();
  const trimmedEmail = String(email ?? "").trim().toLowerCase();
  const trimmedMessage = String(message ?? "").trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return { ok: false, status: 400, error: "missing_fields" };
  }

  if (
    trimmedName.length > 200 ||
    trimmedEmail.length > 254 ||
    trimmedMessage.length > 5000
  ) {
    return { ok: false, status: 400, error: "field_too_long" };
  }

  if (!isValidEmail(trimmedEmail)) {
    return { ok: false, status: 400, error: "invalid_email" };
  }

  return {
    ok: true,
    data: {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    },
  };
}

export function getSmtpConfigFromEnv(env) {
  const host = env.SMTP_HOST?.trim();
  const port = env.SMTP_PORT?.trim();
  const user = env.SMTP_USER?.trim();
  const pass = env.SMTP_PASS?.trim();

  if (!host || !port || !user || !pass) {
    return null;
  }

  return {
    host,
    port,
    user,
    pass,
    contactToEmail: defaultContactTo(env),
    contactFromEmail: defaultContactFrom(env),
  };
}

export function getGmailConfigFromEnv(env) {
  const user = env.GMAIL_USER?.trim();
  const clientId = env.GMAIL_CLIENT_ID?.trim();
  const clientSecret = env.GMAIL_CLIENT_SECRET?.trim();
  const refreshToken = env.GMAIL_REFRESH_TOKEN?.trim();

  if (!user || !clientId || !clientSecret || !refreshToken) {
    return null;
  }

  return {
    user,
    clientId,
    clientSecret,
    refreshToken,
    contactToEmail: defaultContactTo(env),
  };
}

export function getResendConfigFromEnv(env) {
  const apiKey = env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    return null;
  }

  return {
    apiKey,
    contactToEmail: defaultContactTo(env),
    contactFromEmail: defaultContactFrom(env),
  };
}

export function getContactTransportConfig(env) {
  const gmail = getGmailConfigFromEnv(env);
  if (gmail) {
    return { type: "gmail", config: gmail };
  }

  const smtp = getSmtpConfigFromEnv(env);
  if (smtp) {
    return { type: "smtp", config: smtp };
  }

  const resend = getResendConfigFromEnv(env);
  if (resend) {
    return { type: "resend", config: resend };
  }

  return null;
}

function buildEmailContent(name, email, message) {
  return {
    subject: `Kontaktivorm: ${name}`,
    text: `Nimi: ${name}\nE-mail: ${email}\n\n${message}`,
    html: `<p><strong>Nimi:</strong> ${escapeHtml(name)}</p><p><strong>E-mail:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
  };
}

async function sendViaGmail({ name, email, message, gmail }) {
  const content = buildEmailContent(name, email, message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: gmail.user,
      clientId: gmail.clientId,
      clientSecret: gmail.clientSecret,
      refreshToken: gmail.refreshToken,
    },
  });

  await transporter.sendMail({
    from: `"AB Perspektiiv" <${gmail.user}>`,
    to: gmail.contactToEmail,
    replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
    subject: content.subject,
    text: content.text,
    html: content.html,
  });
}

async function sendViaSmtp({ name, email, message, smtp }) {
  const port = Number(smtp.port);
  const content = buildEmailContent(name, email, message);

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port,
    secure: port === 465,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  await transporter.sendMail({
    from: formatFromAddress(smtp.contactFromEmail),
    to: smtp.contactToEmail,
    replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
    subject: content.subject,
    text: content.text,
    html: content.html,
  });
}

async function sendViaResend({ name, email, message, resend }) {
  const content = buildEmailContent(name, email, message);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resend.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: formatFromAddress(resend.contactFromEmail),
      to: [resend.contactToEmail],
      reply_to: email,
      subject: content.subject,
      html: content.html,
      text: content.text,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    const error = new Error(body || "Resend request failed");
    error.code = "resend_failed";
    throw error;
  }
}

export async function deliverContactEmail({ name, email, message, transport }) {
  if (transport.type === "gmail") {
    await sendViaGmail({ name, email, message, gmail: transport.config });
    return;
  }

  if (transport.type === "smtp") {
    await sendViaSmtp({ name, email, message, smtp: transport.config });
    return;
  }

  await sendViaResend({ name, email, message, resend: transport.config });
}
