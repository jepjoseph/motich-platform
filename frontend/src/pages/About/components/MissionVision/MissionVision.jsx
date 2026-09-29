import "./MissionVision.css";

function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision-container">
        <div className="mission-vision-heading">
          <p className="mission-vision-eyebrow">Purpose & Direction</p>

          <h2 className="mission-vision-title">
            Smarter Technology.
            <span> Meaningful Impact.</span>
          </h2>
        </div>

        <div className="mission-vision-grid">
          <article className="mission-vision-card">
            <span className="mission-vision-label">Our Mission</span>

            <h3>Empower Better Control</h3>

            <p>
              To develop intelligent technology that helps people and businesses
              centralize control, optimize energy usage, and manage connected
              systems more efficiently.
            </p>
          </article>

          <article className="mission-vision-card">
            <span className="mission-vision-label">Our Vision</span>

            <h3>Build a More Connected Future</h3>

            <p>
              To create smarter, safer, and more sustainable environments where
              energy and connected property systems work together through one
              intelligent platform.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
