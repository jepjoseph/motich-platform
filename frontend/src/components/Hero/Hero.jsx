import { useEffect, useState } from "react";

import phoneImage from "../../assets/hero/phone.png";
import house1 from "../../assets/hero/house1.png";
import house2 from "../../assets/hero/house2.png";
import house3 from "../../assets/hero/house3.png";
import energyIcon from "../../assets/icons/energy-icon.png";
import securityIcon from "../../assets/icons/security-icon.png";
import smartControlIcon from "../../assets/icons/smart-control-icon.png";
import sustainableIcon from "../../assets/icons/sustainable-icon.png";

import "./Hero.css";

const heroBackgrounds = [house1];

function Hero() {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentBackground((previousBackground) => {
        return (previousBackground + 1) % heroBackgrounds.length;
      });
    }, 6000);

    return () => clearInterval(slideshowInterval);
  }, []);

  return (
    <section className="hero-section">
      {/* ========================================
          Background Slideshow
          ======================================== */}

      <div className="hero-backgrounds" aria-hidden="true">
        {heroBackgrounds.map((background, index) => (
          <div
            key={background}
            className={`hero-background ${
              index === currentBackground ? "hero-background-active" : ""
            }`}
            style={{
              backgroundImage: `url(${background})`,
            }}
          />
        ))}
      </div>

      {/* Purple/dark overlay keeps text readable */}
      <div className="hero-background-overlay" aria-hidden="true" />

      {/* ========================================
          Hero Content
          ======================================== */}

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">Welcome to MoticH</p>

          <h1 className="hero-title">
            Smarter Homes
            <br />
            for a <span className="hero-title-accent">Brighter</span>
            <br />
            Tomorrow
          </h1>

          <p className="hero-description">
            Bring energy, security, automation, and intelligent control together
            in one connected smart-home experience.
          </p>

          <div className="hero-features">
            <div className="hero-feature">
              <img
                className="feature-icon"
                src={energyIcon}
                alt=""
                aria-hidden="true"
              />

              <h2>
                Energy
                <br />
                Management
              </h2>
            </div>

            <div className="hero-feature">
              <img
                className="feature-icon"
                src={securityIcon}
                alt=""
                aria-hidden="true"
              />

              <h2>
                Security
                <br />
                &amp; Safety
              </h2>
            </div>

            <div className="hero-feature">
              <img
                className="feature-icon"
                src={smartControlIcon}
                alt=""
                aria-hidden="true"
              />

              <h2>
                Smart
                <br />
                Control
              </h2>
            </div>

            <div className="hero-feature">
              <img
                className="feature-icon"
                src={sustainableIcon}
                alt=""
                aria-hidden="true"
              />

              <h2>
                Sustainable
                <br />
                Living
              </h2>
            </div>
          </div>

          <div className="hero-actions">
            <a className="hero-primary-button" href="/solutions">
              Explore Our System
              <span aria-hidden="true">→</span>
            </a>

            <button className="hero-video-button" type="button">
              <span className="play-icon" aria-hidden="true">
                ▶
              </span>
              Watch Video
            </button>
          </div>
        </div>

        {/* ========================================
            Phone / Smart-Home Visual
            ======================================== */}

        <div className="hero-visual">
          <div className="visual-glow" aria-hidden="true" />

          <img
            className="hero-phone-image"
            src={phoneImage}
            alt="MoticH smart-home management interface"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
