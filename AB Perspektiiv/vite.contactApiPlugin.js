import {
  deliverContactEmail,
  getContactTransportConfig,
  validateContactPayload,
} from "./tools/sendContactEmail.js";

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        reject(new Error("invalid_json"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

export function contactApiDevPlugin(env) {
  const transport = getContactTransportConfig(env);

  if (transport) {
    console.info(
      `[contact-api] Using ${transport.type} transport for /api/contact`
    );
  }

  return {
    name: "contact-api-dev",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.end("");
          return;
        }

        if (req.method !== "POST") {
          sendJson(res, 405, { error: "method_not_allowed" });
          return;
        }

        if (!transport) {
          console.error(
            "[contact-api] No mail transport configured. Add GMAIL_* or SMTP_* or RESEND_API_KEY to .env"
          );
          sendJson(res, 503, { error: "mail_not_configured" });
          return;
        }

        try {
          const body = await readJsonBody(req);
          const validation = validateContactPayload(body);

          if (!validation.ok) {
            sendJson(res, validation.status, { error: validation.error });
            return;
          }

          if (validation.silent) {
            sendJson(res, 200, { ok: true });
            return;
          }

          const { name, email, message } = validation.data;

          await deliverContactEmail({
            name,
            email,
            message,
            transport,
          });

          sendJson(res, 200, { ok: true });
        } catch (error) {
          console.error("[contact-api] send failed:", error);
          const code = error?.code || "send_failed";
          sendJson(res, 500, { error: code });
        }
      });
    },
  };
}
