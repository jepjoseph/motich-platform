import "./ContactHero.css";

function ContactHero() {
  return (
    <section className="contact-hero">
      <div
        className="contact-hero-glow contact-hero-glow-left"
        aria-hidden="true"
      />
      <div
        className="contact-hero-glow contact-hero-glow-right"
        aria-hidden="true"
      />

      <div className="contact-hero-container">
        <p className="contact-hero-eyebrow">Contact MoticH</p>

        <h1>Let&apos;s Talk About Your Property.</h1>

        <p className="contact-hero-description">
          Have questions about MoticH, EEMS, integrations, or your
          connected-property needs? We&apos;re here to help.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;
