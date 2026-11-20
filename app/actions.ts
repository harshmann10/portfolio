"use server";

type ContactResult = {
  success: boolean;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;

export async function submitContactForm(formData: FormData): Promise<ContactResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("Contact form is missing WEB3FORMS_ACCESS_KEY.");
    return {
      success: false,
      message: "The contact form is temporarily unavailable. Please email me directly.",
    };
  }

  // The honeypot field is hidden from real users, so any value means a bot.
  // Report neutral success so automated submitters learn nothing about the check.
  if (String(formData.get("botcheck") ?? "").trim() !== "") {
    return { success: true };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (
    name.length < 2 ||
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(email) ||
    message.length < 10 ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return {
      success: false,
      message: "Please enter a valid name, email, and a message of at least 10 characters.",
    };
  }

  // Build an allowlisted payload rather than forwarding arbitrary client fields:
  // this stops callers from overriding the access key or injecting Web3Forms options.
  const payload = new FormData();
  payload.append("access_key", accessKey);
  payload.append("name", name);
  payload.append("email", email);
  payload.append("message", message);
  payload.append("subject", "New Submission from Portfolio");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: payload,
      signal: AbortSignal.timeout(10_000),
    });
    const data = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !data.success) {
      return {
        success: false,
        message: data.message || "Your message could not be sent. Please try again later.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Contact form submission error:", err);
    return { success: false, message: "Failed to send message. Please try again later." };
  }
}
