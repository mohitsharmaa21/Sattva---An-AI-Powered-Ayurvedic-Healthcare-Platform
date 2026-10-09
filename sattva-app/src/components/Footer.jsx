import { Link, useLocation } from "react-router-dom";
import sattvaLogo from "../assets/sattva-logo.png";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { pathname } = useLocation();
  const { t } = useLanguage();

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
                  {t("common.appName", "SATTVA")}
                </h3>
                <span
                  style={{
                    fontSize: "13px",
                    color: "var(--muted)",
                    fontWeight: 600,
                  }}
                >
                  {t("footer.brandTagline")}
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
              {t("footer.brandDesc")}
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
                {t("footer.sourcesEvidenceLink")}
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
                {t("footer.safetyDisclaimerLink")}
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
              {t("footer.platformHeader")}
            </div>
            <Link to="/ai-check" className="footer-nav-link">{t("nav.aiCheck")}</Link>
            <Link to="/dashboard" className="footer-nav-link">{t("home.quickActions.dashboard")}</Link>
            <Link to="/ayurveda" className="footer-nav-link">{t("footer.platformLinks.ayurveda")}</Link>
            <Link to="/history" className="footer-nav-link">{t("nav.healthHistory")}</Link>
            <Link to="/how-it-works" className="footer-nav-link">{t("footer.platformLinks.howItWorks")}</Link>
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
              {t("footer.informationHeader")}
            </div>
            <Link to="/about" className="footer-nav-link">{t("footer.informationLinks.about")}</Link>
            <Link to="/sources-evidence" className="footer-nav-link">{t("footer.informationLinks.sourcesEvidence")}</Link>
            <Link to="/safety-disclaimer" className="footer-nav-link">{t("footer.informationLinks.safetyDisclaimer")}</Link>
            <Link to="/faqs" className="footer-nav-link">{t("footer.informationLinks.faqs")}</Link>
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
              {t("footer.legalHeader")}
            </div>
            <Link to="/privacy-policy" className="footer-nav-link">{t("footer.legalLinks.privacyPolicy")}</Link>
            <Link to="/terms" className="footer-nav-link">{t("footer.legalLinks.terms")}</Link>
            <Link to="/data-safety" className="footer-nav-link">{t("footer.legalLinks.dataSafety")}</Link>
            <Link to="/contact" className="footer-nav-link">{t("footer.informationLinks.contact")}</Link>
          </div>
        </div>

        {/* SUBTLE WELLNESS & REGULATORY DISCLAIMER SECTION */}
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
              <strong>{t("footer.disclaimerBannerTitle")}:</strong> {t("footer.disclaimerBannerText")}
            </p>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
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
          <div>{t("footer.copyright")}</div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link
              to="/privacy-policy"
              style={{ color: "var(--muted)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {t("footer.legalLinks.privacyPolicy")}
            </Link>
            <Link
              to="/terms"
              style={{ color: "var(--muted)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {t("footer.legalLinks.terms")}
            </Link>
            <Link
              to="/safety-disclaimer"
              style={{ color: "var(--muted)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {t("footer.informationLinks.safetyDisclaimer")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
