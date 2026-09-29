import { useEffect, useState } from "react";

import ecosystemImage1 from "../../../../assets/ecosystem/motich-ecosystem-01.png";
import ecosystemImage2 from "../../../../assets/ecosystem/motich-ecosystem-02.png";
import ecosystemImage3 from "../../../../assets/ecosystem/motich-ecosystem-03.png";
import ecosystemImage4 from "../../../../assets/ecosystem/motich-ecosystem-04.png";

import "./Ecosystem.css";

const ecosystemSlides = [
  {
    image: ecosystemImage1,
    alt: "MoticH connected smart property ecosystem",
    caption: "The MoticH Connected Property Ecosystem",
  },
  {
    image: ecosystemImage2,
    alt: "EEMS System Architecture",
    caption: "EEMS System Architecture",
  },
  {
    image: ecosystemImage3,
    alt: "EEMS Energy Usage Management",
    caption: "EEMS Energy Usage Management",
  },
  {
    image: ecosystemImage4,
    alt: "EEMS camera system access",
    caption: "EEMS Camera System Access",
  },
];

function Ecosystem() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || ecosystemSlides.length <= 1) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveSlide(
        (currentSlide) => (currentSlide + 1) % ecosystemSlides.length,
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPreviousSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? ecosystemSlides.length - 1 : currentSlide - 1,
    );
  };

  const showNextSlide = () => {
    setActiveSlide(
      (currentSlide) => (currentSlide + 1) % ecosystemSlides.length,
    );
  };

  return (
    <section className="ecosystem-section">
      <div className="ecosystem-container">
        {/* ========================================
            Section Introduction
            ======================================== */}

        <div className="ecosystem-heading">
          <p className="ecosystem-eyebrow">The MoticH Ecosystem</p>

          <h2 className="ecosystem-title">
            One Platform. <span>Your Entire Property.</span>
          </h2>

          <p className="ecosystem-description">
            MoticH brings your connected systems into one intelligent
            environment, giving you visibility, control, automation, and energy
            insight from a centralized platform.
          </p>
        </div>

        {/* ========================================
            Ecosystem Visualization
            ======================================== */}

        <div className="ecosystem-content">
          <div className="ecosystem-visual">
            <div className="ecosystem-visual-glow" aria-hidden="true" />

            <div className="ecosystem-slider">
              <div
                className="ecosystem-slideshow"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {ecosystemSlides.map((slide, index) => (
                  <img
                    key={slide.image}
                    className={`ecosystem-image ecosystem-slide ${
                      index === activeSlide ? "is-active" : ""
                    }`}
                    src={slide.image}
                    alt={slide.alt}
                    aria-hidden={index !== activeSlide}
                  />
                ))}

                {ecosystemSlides.length > 1 && (
                  <>
                    <button
                      className="ecosystem-slide-arrow ecosystem-slide-arrow-left"
                      type="button"
                      onClick={showPreviousSlide}
                      aria-label="Show previous ecosystem image"
                    >
                      ‹
                    </button>

                    <button
                      className="ecosystem-slide-arrow ecosystem-slide-arrow-right"
                      type="button"
                      onClick={showNextSlide}
                      aria-label="Show next ecosystem image"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              <div className="ecosystem-slide-info">
                <p className="ecosystem-slide-caption">
                  {ecosystemSlides[activeSlide].caption}
                </p>

                {ecosystemSlides.length > 1 && (
                  <div
                    className="ecosystem-slide-dots"
                    aria-label="Ecosystem images"
                  >
                    {ecosystemSlides.map((slide, index) => (
                      <button
                        key={slide.image}
                        className={`ecosystem-slide-dot ${
                          index === activeSlide ? "is-active" : ""
                        }`}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Show ecosystem image ${index + 1}`}
                        aria-current={
                          index === activeSlide ? "true" : undefined
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ========================================
              Connected Systems
              ======================================== */}

          <div className="ecosystem-systems">
            <div className="ecosystem-systems-header">
              <p>Connected Systems</p>

              <span className="ecosystem-status">
                <span className="ecosystem-status-dot" />
                Systems Online
              </span>
            </div>

            <div className="ecosystem-system-list">
              <div className="ecosystem-system">
                <div className="ecosystem-system-info">
                  <span className="ecosystem-system-icon">⚡</span>
                  <span>Energy</span>
                </div>

                <span className="system-state">Connected</span>
              </div>

              <div className="ecosystem-system">
                <div className="ecosystem-system-info">
                  <span className="ecosystem-system-icon">💡</span>
                  <span>Lighting</span>
                </div>

                <span className="system-state">Connected</span>
              </div>

              <div className="ecosystem-system">
                <div className="ecosystem-system-info">
                  <span className="ecosystem-system-icon">❄</span>
                  <span>Climate</span>
                </div>

                <span className="system-state">Connected</span>
              </div>

              <div className="ecosystem-system">
                <div className="ecosystem-system-info">
                  <span className="ecosystem-system-icon">🛡</span>
                  <span>Security</span>
                </div>

                <span className="system-state">Connected</span>
              </div>

              <div className="ecosystem-system">
                <div className="ecosystem-system-info">
                  <span className="ecosystem-system-icon">◉</span>
                  <span>Cameras</span>
                </div>

                <span className="system-state">Connected</span>
              </div>

              <div className="ecosystem-system">
                <div className="ecosystem-system-info">
                  <span className="ecosystem-system-icon">🔒</span>
                  <span>Access</span>
                </div>

                <span className="system-state">Connected</span>
              </div>

              <div className="ecosystem-system">
                <div className="ecosystem-system-info">
                  <span className="ecosystem-system-icon">▣</span>
                  <span>Garage</span>
                </div>

                <span className="system-state">Connected</span>
              </div>

              <div className="ecosystem-system">
                <div className="ecosystem-system-info">
                  <span className="ecosystem-system-icon">💧</span>
                  <span>Water</span>
                </div>

                <span className="system-state">Connected</span>
              </div>

              <div className="ecosystem-system">
                <div className="ecosystem-system-info">
                  <span className="ecosystem-system-icon">⌁</span>
                  <span>Irrigation</span>
                </div>

                <span className="system-state">Connected</span>
              </div>

              <div className="ecosystem-system">
                <div className="ecosystem-system-info">
                  <span className="ecosystem-system-icon">⏻</span>
                  <span>Power</span>
                </div>

                <span className="system-state">Connected</span>
              </div>
            </div>

            <div className="ecosystem-systems-footer">
              <p>
                Everything connected.
                <br />
                <strong>One intelligent platform.</strong>
              </p>

              <a href="/solutions">
                Explore Solutions
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
