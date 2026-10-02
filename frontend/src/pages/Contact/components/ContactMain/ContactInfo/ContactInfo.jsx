import "./ContactInfo.css";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info-heading">
        <p className="contact-info-eyebrow">Get in Touch</p>

        <h2>Contact Information</h2>

        <p>
          Reach out to the MoticH team for general questions, product
          information, or technical support.
        </p>
      </div>

      <div className="contact-info-list">
        <a className="contact-info-card" href="mailto:contact@motich.com">
          <div className="contact-info-icon" aria-hidden="true">
            @
          </div>

          <div className="contact-info-content">
            <span className="contact-info-label">General Inquiries</span>
            <strong>contact@motich.com</strong>
            <span className="contact-info-description">
              Questions about MoticH, products, services, and partnerships.
            </span>
          </div>
        </a>

        <a className="contact-info-card" href="mailto:support@motich.com">
          <div className="contact-info-icon" aria-hidden="true">
            ?
          </div>

          <div className="contact-info-content">
            <span className="contact-info-label">Technical Support</span>
            <strong>support@motich.com</strong>
            <span className="contact-info-description">
              Get help with your MoticH products, platform, or connected
              systems.
            </span>
          </div>
        </a>

        <a className="contact-info-card" href="tel:+19547957778">
          <div className="contact-info-icon" aria-hidden="true">
            #
          </div>

          <div className="contact-info-content">
            <span className="contact-info-label">Phone</span>
            <strong>(954) 795-7778</strong>
            <span className="contact-info-description">
              Speak directly with the MoticH team.
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
