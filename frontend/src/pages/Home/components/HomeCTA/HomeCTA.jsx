import "./HomeCTA.css";

function HomeCTA() {
  return (
    <section className="home-cta-section">
      <div className="home-cta-container">
        <div className="home-cta-content">
          <p className="home-cta-eyebrow">
            Ready to Get Started?
          </p>

          <h2 className="home-cta-title">
            Make Your Property <span>Smarter.</span>
          </h2>

          <p className="home-cta-description">
            Discover how MoticH can bring your connected systems
            into one intelligent platform.
          </p>

          <div className="home-cta-actions">
            <a className="home-cta-primary" href="/contact">
              Get Started
              <span aria-hidden="true">→</span>
            </a>

            <a className="home-cta-secondary" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;