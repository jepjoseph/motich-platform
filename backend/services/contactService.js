const DEPARTMENTS = {
  contact: {
    key: "contact",
    name: "Contact Team",
    category: "General Inquiry",
  },

  support: {
    key: "support",
    name: "Support Team",
    category: "Technical Support",
  },
};

export function processContactMessage(contactData) {
  const contactMessage = {
    name: contactData.name.trim(),
    email: contactData.email.trim(),
    recipient: contactData.recipient.trim(),
    subject: contactData.subject.trim(),
    message: contactData.message.trim(),
  };

  const department = DEPARTMENTS[contactMessage.recipient];

  return {
    contactMessage,
    department,
  };
}
