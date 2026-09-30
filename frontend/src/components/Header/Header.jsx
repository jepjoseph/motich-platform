import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import motichLogo from "../../assets/logo/motich-logo.png";

import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  /*
   * Prevent the page behind the mobile menu
   * from scrolling while the menu is open.
   */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /*
   * Allow the Escape key to close the menu.
   */
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand */}
        <Link
          className="brand"
          to="/"
          aria-label="MoticH home"
          onClick={closeMenu}
        >
          <img src={motichLogo} alt="" className="brand-logo" />

          <span className="brand-name">MoticH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="main-navigation desktop-navigation"
          aria-label="Main navigation"
        >
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

        {/* Desktop Actions */}
        <div className="header-actions desktop-actions">
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

        {/* Mobile Hamburger Button */}
        <button
          className={`menu-button${isMenuOpen ? " open" : ""}`}
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
        >
          <span className="menu-button-line" />
          <span className="menu-button-line" />
          <span className="menu-button-line" />
        </button>
      </div>

      {/* Mobile Backdrop */}
      <button
        className={`mobile-menu-backdrop${isMenuOpen ? " open" : ""}`}
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenu}
      />

      {/* Mobile Side Menu */}
      <aside
        id="mobile-navigation"
        className={`mobile-menu${isMenuOpen ? " open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-header">
          <Link
            className="mobile-menu-brand"
            to="/"
            onClick={closeMenu}
            aria-label="MoticH home"
          >
            <img src={motichLogo} alt="" className="mobile-menu-logo" />

            <span>MoticH</span>
          </Link>

          <button
            className="mobile-menu-close"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="mobile-navigation" aria-label="Mobile navigation">
          <NavLink
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? " active" : ""}`
            }
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? " active" : ""}`
            }
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? " active" : ""}`
            }
            to="/team"
            onClick={closeMenu}
          >
            Team
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? " active" : ""}`
            }
            to="/solutions"
            onClick={closeMenu}
          >
            Solutions
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? " active" : ""}`
            }
            to="/products"
            onClick={closeMenu}
          >
            Products
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? " active" : ""}`
            }
            to="/demo"
            onClick={closeMenu}
          >
            Demo
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? " active" : ""}`
            }
            to="/gallery"
            onClick={closeMenu}
          >
            Gallery
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? " active" : ""}`
            }
            to="/blog"
            onClick={closeMenu}
          >
            Blog
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? " active" : ""}`
            }
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>

        <div className="mobile-menu-actions">
          <button className="mobile-search-button" type="button">
            <span aria-hidden="true">⌕</span>
            Search
          </button>

          <Link
            className="mobile-get-started-button"
            to="/login"
            onClick={closeMenu}
          >
            Get Started
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </aside>
    </header>
  );
}

export default Header;
