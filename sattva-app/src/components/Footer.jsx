import { Link, useLocation } from "react-router-dom";
import sattvaLogo from "../assets/sattva-logo.png";

export default function Footer() {
  const { pathname } = useLocation();
  if (["/consultation", "/ayurveda", "/blogs", "/ai-check", "/dashboard", "/doctor-dashboard", "/history", "/insurance"].some((path) => pathname.startsWith(path))) return null;
  return (
    <footer
      className="footer-premium"
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "80px",
        marginTop: "80px",
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        <div
          className="footer-premium-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* LEFT: Branding */}
          <div
            className="footer-brand-col"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src={sattvaLogo}
                alt="Sattva Logo"
                style={{ width: "48px", height: "48px", objectFit: "contain" }}
              />
              <h3
                className="footer-logo"
                style={{
                  fontSize: "22px",
                  color: "var(--primary)",
                  margin: 0,
                  fontWeight: 800,
                  letterSpacing: "1px",
                }}
              >
                SATTVA
              </h3>
            </div>
            <p
              className="footer-tagline"
              style={{
                color: "var(--muted)",
                fontStyle: "italic",
                fontSize: "14px",
                margin: 0,
              }}
            >
              Clarity Before Care
            </p>
            <p
              className="footer-desc"
              style={{
                color: "var(--text)",
                fontSize: "14px",
                lineHeight: 1.6,
                maxWidth: "340px",
                margin: 0,
              }}
            >
              Healthcare shouldn't feel overwhelming. From first symptom to full
              clarity — your gentle companion through every health question.
            </p>
          </div>

          {/* MIDDLE: Platform */}
          <div
            className="footer-links-col"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div
              className="footer-col-title"
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--muted)",
                marginBottom: "8px",
                fontWeight: 700,
              }}
            >
              Platform
            </div>
            <Link
              to="/features"
              style={{
                color: "var(--text)",
                fontSize: "14px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
            >
              Features
            </Link>
            <Link
              to="/how-it-works"
              style={{
                color: "var(--text)",
                fontSize: "14px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
            >
              How it works
            </Link>
          </div>

          {/* RIGHT: Company */}
          <div
            className="footer-links-col"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div
              className="footer-col-title"
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--muted)",
                marginBottom: "8px",
                fontWeight: 700,
              }}
            >
              Company
            </div>
            <Link
              to="/about"
              style={{
                color: "var(--text)",
                fontSize: "14px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
            >
              About
            </Link>
            <Link
              to="/vision"
              style={{
                color: "var(--text)",
                fontSize: "14px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
            >
              Vision
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px dashed var(--border)",
            marginTop: "60px",
            paddingTop: "32px",
            paddingBottom: "40px",
            fontSize: "13px",
            color: "var(--muted)",
          }}
        >
          <p style={{ margin: 0 }}>&copy; 2026 Sattva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
