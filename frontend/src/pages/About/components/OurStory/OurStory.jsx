import "./OurStory.css";

function OurStory() {
  return (
    <section className="our-story" id="our-story">
      <div className="our-story-container">
        <div className="our-story-heading">
          <p className="our-story-eyebrow">Our Story</p>

          <h2 className="our-story-title">
            From Energy Control to an
            <span> Intelligent Ecosystem.</span>
          </h2>

          <p className="our-story-description">
            MoticH began with a simple idea: make electrical systems easier to
            monitor and control from one place. That idea led to RCPS, became
            part of the broader EEMS vision, and continues to evolve into the
            connected MoticH platform.
          </p>
        </div>

        <div className="our-story-journey">
          <article className="journey-item">
            <span className="journey-number">01</span>
            <h3>RCPS</h3>
            <p>Remote Control Power Switch</p>
          </article>

          <span className="journey-arrow" aria-hidden="true">
            →
          </span>

          <article className="journey-item">
            <span className="journey-number">02</span>
            <h3>EEMS</h3>
            <p>Electrical Energy Management System</p>
          </article>

          <span className="journey-arrow" aria-hidden="true">
            →
          </span>

          <article className="journey-item">
            <span className="journey-number">03</span>
            <h3>MoticH</h3>
            <p>Centralized intelligent property management</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
