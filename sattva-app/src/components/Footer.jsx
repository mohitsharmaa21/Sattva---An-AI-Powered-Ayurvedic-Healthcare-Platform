import { Link, useLocation } from "react-router-dom";
import sattvaLogo from "../assets/sattva-logo.png";

export default function Footer() {
  const { pathname } = useLocation();

  // Hide footer on full-screen dashboard app shell views
  const isAppShellRoute = [
    "/consultation",
    "/ayurveda",
    "/blogs",
    "/ai-check",
    "/dashboard",
    "/doctor-dashboard",
    "/history",
    "/insurance",
  ].some((path) => pathname.startsWith(path));

  if (isAppShellRoute) return null;

  return (
    <footer
      className="footer-sattva"
      style={{
        background: "#f9f8f5",
        borderTop: "1px solid var(--line)",
        paddingTop: "72px",
        marginTop: "80px",
        paddingBottom: "36px",
        color: "var(--ink)",
      }}
    >
      <div className="container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
        {/* TOP MULTI-COLUMN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.4fr 1.2fr 1.3fr 1.2fr",
            gap: "48px",
            alignItems: "start",
          }}
          className="footer-grid-responsive"
        >
          {/* 1. BRAND & TRUST STATEMENT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <img
                src={sattvaLogo}
                alt="Sattva Logo"
                style={{ width: "48px", height: "48px", objectFit: "contain" }}
              />
              <div>
                <h3
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
                <span
                  style={{
                    fontSize: "13px",
                    color: "var(--muted)",
                    fontWeight: 600,
                  }}
                >
                  Intelligent Ayurveda & Wellness Guidance
                </span>
              </div>
            </div>

            <p
              style={{
                color: "var(--text)",
                fontSize: "14px",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: "360px",
              }}
            >
              Sattva combines traditional Ayurveda knowledge with modern technology to provide accessible, personalized wellness guidance.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
              <Link
                to="/sources-evidence"
                style={{
                  fontSize: "13px",
                  color: "var(--primary)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>→</span> View Sources & Evidence
              </Link>
              <Link
                to="/safety-disclaimer"
                style={{
                  fontSize: "13px",
                  color: "var(--primary)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>→</span> Read Safety & Disclaimer
              </Link>
            </div>
          </div>

          {/* 2. PLATFORM */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--green-deep)",
                fontWeight: 800,
                marginBottom: "4px",
              }}
            >
              Platform
            </div>
            <Link to="/ai-check" className="footer-nav-link">AI Check</Link>
            <Link to="/dashboard" className="footer-nav-link">Wellness Dashboard</Link>
            <Link to="/ayurveda" className="footer-nav-link">Ayurveda Directory</Link>
            <Link to="/history" className="footer-nav-link">Health History</Link>
            <Link to="/how-it-works" className="footer-nav-link">How It Works</Link>
          </div>

          {/* 3. INFORMATION */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--green-deep)",
                fontWeight: 800,
                marginBottom: "4px",
              }}
            >
              Information
            </div>
            <Link to="/about" className="footer-nav-link">About Sattva</Link>
            <Link to="/sources-evidence" className="footer-nav-link">Sources & Evidence</Link>
            <Link to="/safety-disclaimer" className="footer-nav-link">Safety & Disclaimer</Link>
            <Link to="/faqs" className="footer-nav-link">FAQs</Link>
          </div>

          {/* 4. LEGAL & PRIVACY */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--green-deep)",
                fontWeight: 800,
                marginBottom: "4px",
              }}
            >
              Legal & Privacy
            </div>
            <Link to="/privacy-policy" className="footer-nav-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-nav-link">Terms & Conditions</Link>
            <Link to="/data-safety" className="footer-nav-link">Data & Document Safety</Link>
            <Link to="/contact" className="footer-nav-link">Contact & Feedback</Link>
          </div>
        </div>

        {/* SUBTLE WELLNESS & REGULATORY DISCLAIMER SECTION (Section 5, 8, 9) */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            marginTop: "48px",
            paddingTop: "28px",
            paddingBottom: "12px",
          }}
        >
          <div
            style={{
              background: "rgba(45,66,15,0.03)",
              border: "1px solid rgba(45,66,15,0.08)",
              borderRadius: "10px",
              padding: "20px 24px",
              fontSize: "12.5px",
              lineHeight: 1.7,
              color: "#54665c",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>General Wellness Disclaimer:</strong> Sattva provides general wellness information based on traditional Ayurveda and available scientific research. The information provided is for educational and informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease or medical condition. Sattva does not replace consultation with a qualified healthcare professional.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Herbal Safety & Precautions:</strong> Herbal and Ayurvedic products may have contraindications, interactions, or risks that vary between individuals and formulations. Consult a qualified healthcare professional before using any product, particularly if you are pregnant, breastfeeding, taking medication, managing a medical condition, or considering use for a child.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Third-Party Formulations & AI Assessment Notice:</strong> Product information on Sattva refers to classical and third-party Ayurvedic formulations; Sattva does not manufacture, prescribe, or distribute pharmaceuticals. Wellness assessments and recommendations generated by Sattva AI are informational and should not be interpreted as medical diagnosis, clinical prescription, or emergency medical advice.
            </p>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR (Section 10) */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            marginTop: "24px",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "12.5px",
            color: "var(--muted)",
          }}
        >
          <div>&copy; 2026 Sattva. All rights reserved.</div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link
              to="/privacy-policy"
              style={{ color: "var(--muted)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              style={{ color: "var(--muted)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              Terms & Conditions
            </Link>
            <Link
              to="/safety-disclaimer"
              style={{ color: "var(--muted)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              Safety & Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
