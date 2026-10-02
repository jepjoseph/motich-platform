import { processContactMessage } from "../services/contactService.js";
import { sendContactEmail } from "../services/emailService.js";
import { validateContactMessage } from "../validators/contactValidator.js";

export async function submitContactMessage(req, res) {
  const validation = validateContactMessage(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      message: "Contact message validation failed.",
      errors: validation.errors,
    });
  }

  try {
    const result = processContactMessage(req.body);

    await sendContactEmail(result.contactMessage, result.department);

    return res.status(200).json({
      message: "Your message was sent successfully.",
    });
  } catch (error) {
    console.error("Contact message processing failed:", error);

    return res.status(500).json({
      message: "We were unable to send your message. Please try again later.",
    });
  }
}
