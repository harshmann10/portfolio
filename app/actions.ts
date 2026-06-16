"use server";

export async function submitContactForm(formData: FormData) {
  formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY!);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Contact form submission error:", err);
    return { success: false, message: "Failed to send message." };
  }
}
