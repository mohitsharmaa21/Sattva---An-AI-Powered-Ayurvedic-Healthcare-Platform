import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../utils/theme";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
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

        <div className="nav-actions-desktop" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light appearance" : "Dark appearance"}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              color: "var(--primary)",
            }}
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="12" y1="2" x2="12" y2="4"></line>
                <line x1="12" y1="20" x2="12" y2="22"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
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
