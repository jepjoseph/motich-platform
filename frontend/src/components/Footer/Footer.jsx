import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* ========================================
            Main Footer
            ======================================== */}

        <div className="footer-main">
          <div className="footer-brand">
            <Link className="footer-logo" to="/">
              MoticH
            </Link>

            <p>Intelligent property management through connected technology.</p>
          </div>

          {/* ========================================
              Navigation
              ======================================== */}

          <div className="footer-navigation">
            <div className="footer-column">
              <h3>Company</h3>

              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-column">
              <h3>Explore</h3>

              <Link to="/solutions">Solutions</Link>
              <Link to="/products">Products</Link>
              <Link to="/demo">Demo</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/blog">Blog</Link>
            </div>

            <div className="footer-column">
              <h3>Connect</h3>

              <span>LinkedIn</span>
              <span>YouTube</span>
            </div>
          </div>
        </div>

        {/* ========================================
            Bottom Footer
            ======================================== */}

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MoticH. All rights reserved.</p>

          <div className="footer-legal">
            <Link to="/privacy">Privacy</Link>

            <span aria-hidden="true">•</span>

            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
