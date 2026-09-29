import { Link } from "react-router-dom";

import "./AboutCTA.css";

function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="about-cta-container">
        <p className="about-cta-eyebrow">The Journey Continues</p>

        <h2 className="about-cta-title">
          Be Part of What’s
          <span> Next.</span>
        </h2>

        <p className="about-cta-description">
          MoticH is continuously evolving as we build toward smarter,
          more connected, and more efficient property management.
        </p>

        <div className="about-cta-actions">
          <Link className="about-cta-primary" to="/contact">
            Get in Touch
            <span aria-hidden="true">→</span>
          </Link>

          <Link className="about-cta-secondary" to="/solutions">
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;