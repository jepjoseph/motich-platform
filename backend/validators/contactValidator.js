const ALLOWED_RECIPIENTS = ["contact", "support"];

const FIELD_LIMITS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
};

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

export function validateContactMessage(data) {
  const errors = {};

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return {
      isValid: false,
      errors: {
        request: "Request body must be a valid JSON object.",
      },
    };
  }

  const { name, email, recipient, subject, message } = data;

  // Name
  if (!isNonEmptyString(name)) {
    errors.name = "Name is required and must be text.";
  } else if (name.trim().length > FIELD_LIMITS.name) {
    errors.name = `Name must not exceed ${FIELD_LIMITS.name} characters.`;
  }

  // Email
  if (!isNonEmptyString(email)) {
    errors.email = "Email is required and must be text.";
  } else if (email.trim().length > FIELD_LIMITS.email) {
    errors.email = `Email must not exceed ${FIELD_LIMITS.email} characters.`;
  } else if (!isValidEmail(email.trim())) {
    errors.email = "Email must be a valid email address.";
  }

  // Recipient
  if (!isNonEmptyString(recipient)) {
    errors.recipient = "Recipient is required.";
  } else if (!ALLOWED_RECIPIENTS.includes(recipient.trim())) {
    errors.recipient = "Invalid recipient.";
  }

  // Subject
  if (!isNonEmptyString(subject)) {
    errors.subject = "Subject is required and must be text.";
  } else if (subject.trim().length > FIELD_LIMITS.subject) {
    errors.subject = `Subject must not exceed ${FIELD_LIMITS.subject} characters.`;
  }

  // Message
  if (!isNonEmptyString(message)) {
    errors.message = "Message is required and must be text.";
  } else if (message.trim().length > FIELD_LIMITS.message) {
    errors.message = `Message must not exceed ${FIELD_LIMITS.message} characters.`;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
