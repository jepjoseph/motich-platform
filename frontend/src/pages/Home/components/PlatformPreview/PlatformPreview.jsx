import { Link } from "react-router-dom";

import platformPreview from "../../../../assets/platform/platform-preview.png";

import "./PlatformPreview.css";

function PlatformPreview() {
  return (
    <section className="platform-preview-section">
      <div className="platform-preview-container">
        <div className="platform-preview-heading">
          <p className="platform-preview-eyebrow">The MoticH Platform</p>

          <h2 className="platform-preview-title">
            Your Property. <span>At Your Fingertips.</span>
          </h2>

          <p className="platform-preview-description">
            Monitor and manage your connected property through one centralized
            experience.
          </p>
        </div>

        <div className="platform-preview-visual">
          <img
            className="platform-preview-image"
            src={platformPreview}
            alt="MoticH property management platform dashboard"
          />
        </div>

        <div className="platform-preview-footer">
          <div className="platform-preview-devices">
            <span>Desktop</span>
            <span aria-hidden="true">•</span>
            <span>Mobile</span>
            <span aria-hidden="true">•</span>
            <span>Connected</span>
          </div>

          <Link className="platform-preview-link" to="/demo">
            Explore the Demo
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PlatformPreview;