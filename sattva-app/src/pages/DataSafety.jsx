import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function DataSafety() {
  const { t } = useLanguage();

  return (
    <div className="container" style={{ paddingBottom: "100px", maxWidth: "860px", margin: "0 auto" }}>
      <div className="page-header" style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 className="page-title" style={{ fontSize: "36px" }}>
          {t("policies.dataSafetyTitle")}
        </h1>
        <p className="page-subtitle" style={{ maxWidth: "600px", margin: "0 auto" }}>
          {t("policies.dataSafetySubtitle")}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-generic"
        style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "28px" }}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <div style={{ background: "var(--soft-green)", padding: "12px", borderRadius: "10px", color: "var(--green)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <h2 style={{ fontSize: "19px", color: "var(--green-deep)", margin: "0 0 8px" }}>
              Client-Side Sandboxing
            </h2>
            <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
              All medical scans processed through the Sattva Vision OCR scanner and symptom journals are decoded client-side using Web APIs. Raw unredacted image files are never stored on persistent public cloud buckets.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <div style={{ background: "var(--soft-green)", padding: "12px", borderRadius: "10px", color: "var(--green)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <div>
            <h2 style={{ fontSize: "19px", color: "var(--green-deep)", margin: "0 0 8px" }}>
              Encrypted Local Storage
            </h2>
            <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
              Your consultation appointments, vital sign logs, and health metrics are isolated to your local browser environment. No unauthenticated third-party tracker can access your symptom timeline.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <div style={{ background: "var(--soft-green)", padding: "12px", borderRadius: "10px", color: "var(--green)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
            </svg>
          </div>
          <div>
            <h2 style={{ fontSize: "19px", color: "var(--green-deep)", margin: "0 0 8px" }}>
              Zero Medical Data Commercialization
            </h2>
            <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
              Unlike commercial health portals, Sattva is strictly an educational research platform. We do not sell user symptoms or demographic datasets to pharmaceutical marketing networks or insurers.
            </p>
          </div>
        </div>

        <div style={{ background: "var(--cream)", padding: "20px", borderRadius: "10px", border: "1px solid var(--line)" }}>
          <p style={{ fontSize: "13.5px", color: "#4f6356", margin: 0, lineHeight: 1.6 }}>
            For additional details on our data governance and privacy practices, please read our <Link to="/privacy-policy" style={{ color: "var(--green-deep)", fontWeight: 700 }}>Privacy Policy</Link>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
