import { Resend } from "resend";

import { getEmailConfig } from "../config/emailConfig.js";

export async function sendContactEmail(contactMessage, department) {
  const emailConfig = getEmailConfig();

  if (!emailConfig.resendApiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!emailConfig.destinationEmail) {
    throw new Error("CONTACT_DESTINATION_EMAIL is not configured.");
  }

  const resend = new Resend(emailConfig.resendApiKey);

  const { data, error } = await resend.emails.send({
    from: "MoticH Website <contact@motich.com>",

    to: [emailConfig.destinationEmail],

    replyTo: contactMessage.email,

    subject: `[${department.name}] ${contactMessage.subject}`,

    text: [
      `New message from the MoticH website`,
      ``,
      `Department: ${department.name}`,
      `Category: ${department.category}`,
      `Name: ${contactMessage.name}`,
      `Email: ${contactMessage.email}`,
      ``,
      `Message:`,
      contactMessage.message,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message || "Unable to send contact email.");
  }

  return {
    id: data?.id,
  };
}
