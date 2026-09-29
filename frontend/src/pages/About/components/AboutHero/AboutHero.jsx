import "./AboutHero.css";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-background" aria-hidden="true">
        <div className="about-hero-glow about-hero-glow-left" />
        <div className="about-hero-glow about-hero-glow-right" />
        <div className="about-hero-grid" />
      </div>

      <div className="about-hero-container">
        <p className="about-hero-eyebrow">About MoticH</p>

        <h1 className="about-hero-title">
          Building a Smarter, More
          <span> Connected Future.</span>
        </h1>

        <p className="about-hero-description">
          MoticH is a technology startup developing intelligent solutions that
          bring energy management, connected systems, automation, monitoring,
          and control into one centralized platform.
        </p>

        <a className="about-hero-link" href="#our-story">
          Explore Our Story
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

export default AboutHero;
