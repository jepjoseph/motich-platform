export function getEmailConfig() {
  return {
    resendApiKey: process.env.RESEND_API_KEY,
    destinationEmail: process.env.CONTACT_DESTINATION_EMAIL,
  };
}
