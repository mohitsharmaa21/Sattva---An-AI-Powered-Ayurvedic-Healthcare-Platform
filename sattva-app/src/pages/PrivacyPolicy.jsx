import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="container" style={{ paddingBottom: "100px", maxWidth: "860px", margin: "0 auto" }}>
      <div className="page-header" style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 className="page-title" style={{ fontSize: "36px" }}>
          {t("policies.privacyTitle")}
        </h1>
        <p className="page-subtitle" style={{ maxWidth: "600px", margin: "0 auto" }}>
          {t("policies.privacySubtitle")}
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
            Last Updated: September 2026
          </span>
          <h2 style={{ fontSize: "20px", color: "var(--green-deep)", margin: "8px 0 12px" }}>
            1. Scope & Academic Prototype Purpose
          </h2>
          <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
            Sattva is developed as an academic and minor project prototype showcasing intelligent health informatics, AI-assisted symptom analysis, and evidence-verified Ayurvedic guidance. This policy outlines how user inputs and simulated data are managed.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: "20px", color: "var(--green-deep)", margin: "0 0 12px" }}>
            2. Local Browser Storage & Data Minimization
          </h2>
          <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.7, margin: "0 0 10px" }}>
            To safeguard user privacy, all symptom histories, simulated health scans, doctor consultation bookings, and user preferences are retained locally in your web browser's storage (<code style={{ background: "var(--surface-2)", padding: "2px 6px", borderRadius: "4px" }}>localStorage</code> / <code style={{ background: "var(--surface-2)", padding: "2px 6px", borderRadius: "4px" }}>sessionStorage</code>).
          </p>
          <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", color: "#3e4f45", lineHeight: 1.6 }}>
            <li>We do NOT sell, lease, or monetize your personal health data to third-party advertisers or insurance brokers.</li>
            <li>No persistent cross-site tracking cookies or advertising telemetry pixels are embedded in Sattva.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: "20px", color: "var(--green-deep)", margin: "0 0 12px" }}>
            3. AI Inference & Language Model Processing
          </h2>
          <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
            When using the AI Symptom Check, input symptom descriptions are sent via secure HTTPS to serverless AI runtime inference endpoints (e.g. Puter.js / Claude / OpenAI API integrations) exclusively for generating immediate triage feedback. Inputs are not used to train public models without consent.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: "20px", color: "var(--green-deep)", margin: "0 0 12px" }}>
            4. User Control & Data Clearing
          </h2>
          <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
            You can purge your entire session data, saved remedies, symptom logs, and cached profile details at any time simply by clearing your browser cache or logging out of your session.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
