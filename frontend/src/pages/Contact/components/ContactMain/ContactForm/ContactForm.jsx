import { useState } from "react";

import { sendContactMessage } from "../../../../../services/Contact/contactService";

import "./ContactForm.css";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      recipient: formData.get("recipient"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await sendContactMessage(contactData);

      setSubmitMessage(response.message);
      form.reset();
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-panel">
      <div className="contact-form-heading">
        <p className="contact-form-eyebrow">Send a Message</p>

        <h2>How Can We Help?</h2>

        <p>
          Tell us a little about what you&apos;re looking for and we&apos;ll get
          back to you.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <div className="contact-form-field">
            <label htmlFor="contact-name">Name</label>

            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="contact-email">Email</label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-recipient">Send To</label>

          <select
            id="contact-recipient"
            name="recipient"
            defaultValue=""
            required
            disabled={isSubmitting}
          >
            <option value="" disabled>
              Select a team
            </option>

            <option value="contact">Contact Team — General Inquiries</option>

            <option value="support">Support Team — Technical Support</option>
          </select>
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-subject">Subject</label>

          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="How can we help?"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-message">Message</label>

          <textarea
            id="contact-message"
            name="message"
            rows="6"
            placeholder="Tell us about your project, property, or question..."
            required
            disabled={isSubmitting}
          />
        </div>

        {submitMessage && (
          <p className="contact-form-status contact-form-success" role="status">
            {submitMessage}
          </p>
        )}

        {submitError && (
          <p className="contact-form-status contact-form-error" role="alert">
            {submitError}
          </p>
        )}

        <button
          className="contact-form-submit"
          type="submit"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>

          {!isSubmitting && (
            <span className="contact-form-submit-arrow" aria-hidden="true">
              →
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
