const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

export async function sendContactMessage({ name, email, message }) {
  const response = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const error = new Error(payload?.error || "send_failed");
    error.code = payload?.error || "send_failed";
    throw error;
  }

  return payload;
}
