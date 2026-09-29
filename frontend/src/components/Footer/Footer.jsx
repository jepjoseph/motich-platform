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
            <a className="footer-logo" href="/">
              MoticH
            </a>

            <p>Intelligent property management through connected technology.</p>
          </div>

          {/* ========================================
              Navigation
              ======================================== */}

          <div className="footer-navigation">
            <div className="footer-column">
              <h3>Company</h3>

              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>

            <div className="footer-column">
              <h3>Explore</h3>

              <a href="/solutions">Solutions</a>
              <a href="/products">Products</a>
              <a href="/demo">Demo</a>
              <a href="/gallery">Gallery</a>
              <a href="/blog">Blog</a>
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
            <a href="/privacy">Privacy</a>

            <span aria-hidden="true">•</span>

            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
