import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Terms() {
  const { t } = useLanguage();

  return (
    <div className="container" style={{ paddingBottom: "100px", maxWidth: "860px", margin: "0 auto" }}>
      <div className="page-header" style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 className="page-title" style={{ fontSize: "36px" }}>
          {t("policies.termsTitle")}
        </h1>
        <p className="page-subtitle" style={{ maxWidth: "600px", margin: "0 auto" }}>
          {t("policies.termsSubtitle")}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-generic"
        style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "24px" }}
      >
        <div>
          <span style={{ fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>
            Effective Date: September 2026
          </span>
          <h2 style={{ fontSize: "20px", color: "var(--green-deep)", margin: "8px 0 12px" }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
            By accessing or using Sattva, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of these terms, please discontinue your use of the platform immediately.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: "20px", color: "var(--green-deep)", margin: "0 0 12px" }}>
            2. Informational & Educational Platform Only
          </h2>
          <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
            Sattva is an educational health informatics demonstration designed for academic research. Content, AI assessments, and Ayurvedic botanical directories do NOT establish a formal physician-patient relationship and MUST NOT be used as a substitute for professional clinical medical advice or treatment.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: "20px", color: "var(--green-deep)", margin: "0 0 12px" }}>
            3. Third-Party Products & Non-Retail Scope
          </h2>
          <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
            Product descriptions, herbs, and classical formulas referenced on Sattva describe third-party classical and proprietary formulations. Sattva does not manufacture, distribute, prescribe, or sell physical pharmaceutical products. Any "Explore Formulation" buttons represent simulated academic features.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: "20px", color: "var(--green-deep)", margin: "0 0 12px" }}>
            4. Limitation of Liability
          </h2>
          <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
            In no event shall Sattva, its student creators, academic advisors, or contributors be held liable for any health decisions, adverse herbal reactions, or consequences arising from the interpretation or use of information provided on this platform.
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--line)", paddingTop: "20px" }}>
          <p style={{ fontSize: "13.5px", color: "var(--muted)", margin: 0 }}>
            For specific safety questions and medical cautions, review our <Link to="/safety-disclaimer" style={{ color: "var(--green-deep)", fontWeight: 600 }}>Safety & Disclaimer Page</Link>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
