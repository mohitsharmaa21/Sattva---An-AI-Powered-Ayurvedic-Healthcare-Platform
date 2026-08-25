import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  if (["/consultation", "/ayurveda", "/blogs", "/ai-check", "/dashboard", "/doctor-dashboard", "/history", "/insurance"].some((path) => pathname.startsWith(path))) return null;

  return (
    <div className="navbar-container">
      <header className="navbar-pill">
        <Link to="/" className="navbar-logo">
          SATTVA
        </Link>

        <nav className="nav-links-desktop">
          <Link to="/">Home</Link>
          <Link to="/consultation">Consultation</Link>
          <Link to="/ayurveda">Ayurveda</Link>
          <Link to="/blogs">Blogs</Link>
        </nav>

        <div className="nav-actions-desktop">
          <Link to="/login" className="nav-login-btn">
            Profile / Login
          </Link>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mobile-nav-dropdown"
          >
            <nav className="mobile-nav-links">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link to="/consultation" onClick={() => setMobileOpen(false)}>
                Consultation
              </Link>
              <Link to="/ayurveda" onClick={() => setMobileOpen(false)}>
                Ayurveda
              </Link>
              <Link to="/blogs" onClick={() => setMobileOpen(false)}>
                Blogs
              </Link>
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                style={{ color: "var(--primary)", fontWeight: 600 }}
              >
                Profile / Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
