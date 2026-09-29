import { Link } from "react-router-dom";

import "./WhatWeBuild.css";

function WhatWeBuild() {
  return (
    <section className="what-we-build">
      <div className="what-we-build-container">
        <div className="what-we-build-content">
          <p className="what-we-build-eyebrow">What We’re Building</p>

          <h2 className="what-we-build-title">
            One Platform.
            <span> Connected Possibilities.</span>
          </h2>

          <p className="what-we-build-description">
            MoticH is evolving beyond energy management into a centralized
            platform for connected property systems, bringing monitoring,
            control, automation, and intelligent management together.
          </p>

          <Link className="what-we-build-link" to="/solutions">
            Explore Our Solutions
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="what-we-build-systems">
          <span>Energy</span>
          <span>Security</span>
          <span>Lighting</span>
          <span>Climate</span>
          <span>Access</span>
          <span>Cameras</span>
          <span>Water</span>
          <span>Automation</span>
        </div>
      </div>
    </section>
  );
}

export default WhatWeBuild;
