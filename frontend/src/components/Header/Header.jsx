import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a className="brand" href="/" aria-label="MoticH home">
          <span className="brand-name">MoticH</span>
        </a>

        <nav className="main-navigation" aria-label="Main navigation">
          <a className="nav-link active" href="/">
            Home
          </a>

          <a className="nav-link" href="/about">
            About
          </a>

          <a className="nav-link" href="/solutions">
            Solutions
          </a>

          <a className="nav-link" href="/products">
            Products
          </a>

          <a className="nav-link" href="/demo">
            Demo
          </a>

          <a className="nav-link" href="/gallery">
            Gallery
          </a>

          <a className="nav-link" href="/blog">
            Blog
          </a>

          <a className="nav-link" href="/contact">
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="search-button"
            type="button"
            aria-label="Search"
            title="Search"
          >
            <span aria-hidden="true">⌕</span>
          </button>

          <a className="get-started-button" href="/login">
            Get Started
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
