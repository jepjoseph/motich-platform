import { Link, NavLink } from "react-router-dom";

import motichLogo from "../../assets/logo/motich-logo.png";

import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link className="brand" to="/" aria-label="MoticH home">
          <img src={motichLogo} alt="" className="brand-logo" />
          <span className="brand-name">MoticH</span>
        </Link>

        <nav className="main-navigation" aria-label="Main navigation">
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/"
            end
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/team"
          >
            Team
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/solutions"
          >
            Solutions
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/products"
          >
            Products
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/demo"
          >
            Demo
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/gallery"
          >
            Gallery
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/blog"
          >
            Blog
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            to="/contact"
          >
            Contact
          </NavLink>
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

          <Link className="get-started-button" to="/login">
            Get Started
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
