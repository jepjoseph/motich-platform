const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function sendContactMessage(contactData) {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(contactData),
  });

  let responseData = null;

  try {
    responseData = await response.json();
  } catch {
    responseData = null;
  }

  if (!response.ok) {
    throw new Error(responseData?.message || "Unable to send your message.");
  }

  return responseData;
}
