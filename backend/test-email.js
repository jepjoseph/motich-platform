import dotenv from "dotenv";

import { sendContactEmail } from "./services/emailService.js";

dotenv.config();

const contactMessage = {
  name: "Jean Joseph",
  email: "jean@example.com",
  recipient: "support",
  subject: "MoticH Resend Test",
  message: "This is a test message from the MoticH backend email service.",
};

const department = {
  key: "support",
  name: "Support Team",
  category: "Technical Support",
};

try {
  const result = await sendContactEmail(contactMessage, department);

  console.log("Email sent successfully.");
  console.log("Resend email ID:", result.id);
} catch (error) {
  console.error("Email sending failed.");
  console.error(error);
}
