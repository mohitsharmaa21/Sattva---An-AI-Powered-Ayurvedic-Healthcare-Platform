import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SafetyDisclaimer() {
  return (
    <div className="container" style={{ paddingBottom: "100px", maxWidth: "900px", margin: "0 auto" }}>
      <div className="page-header" style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 className="page-title" style={{ fontSize: "36px" }}>
          Safety, Precautions & Legal Disclaimer
        </h1>
        <p className="page-subtitle" style={{ maxWidth: "680px", margin: "0 auto" }}>
          Important healthcare, pharmacological, and regulatory information regarding the use of the Sattva platform.
        </p>
      </div>

      {/* CORE STATUTORY DISCLAIMER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-generic"
        style={{
          padding: "36px",
          background: "#fffbf2",
          border: "1px solid #eed8b1",
          borderRadius: "14px",
          marginBottom: "32px",
        }}
      >
        <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#965214" strokeWidth="2.2" style={{ flexShrink: 0, marginTop: "2px" }}>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div>
            <h2 style={{ fontSize: "19px", color: "#8a4506", margin: "0 0 10px" }}>
              General Wellness & Non-Medical Advice Disclaimer
            </h2>
            <p style={{ fontSize: "14.5px", color: "#6e3c10", lineHeight: 1.7, margin: "0 0 12px" }}>
              Sattva provides general wellness information based on traditional Ayurveda and available scientific research. The information provided is for educational and informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease or medical condition. Sattva does not replace consultation with a qualified healthcare professional.
            </p>
            <p style={{ fontSize: "14.5px", color: "#6e3c10", lineHeight: 1.7, margin: 0 }}>
              Herbal and Ayurvedic products may have contraindications, interactions, or risks that vary between individuals and formulations. Consult a qualified healthcare professional before using any product, particularly if you are pregnant, breastfeeding, taking medication, managing a medical condition, or considering use for a child.
            </p>
          </div>
        </div>
      </motion.div>

      {/* DETAILED SAFETY GUIDANCE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card-generic"
        style={{ padding: "40px", marginBottom: "32px" }}
      >
        <h2 style={{ fontSize: "22px", color: "var(--green-deep)", marginTop: 0, marginBottom: "20px" }}>
          Specific Precautions & Contraindications
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div style={{ background: "var(--cream)", padding: "20px", borderRadius: "10px", border: "1px solid var(--line)" }}>
            <h3 style={{ fontSize: "15px", color: "var(--green-deep)", margin: "0 0 8px" }}>🤰 Pregnancy & Lactation</h3>
            <p style={{ fontSize: "13.5px", color: "var(--ink)", lineHeight: 1.6, margin: 0 }}>
              Many classical herbs (such as Ashwagandha, Neem, Guggulu, and high-dose Tulsi) possess traditional uterine-stimulating or hormonal properties. Always obtain clearance from your obstetrician before taking any herbal preparation.
            </p>
          </div>

          <div style={{ background: "var(--cream)", padding: "20px", borderRadius: "10px", border: "1px solid var(--line)" }}>
            <h3 style={{ fontSize: "15px", color: "var(--green-deep)", margin: "0 0 8px" }}>💊 Prescription Drug Interactions</h3>
            <p style={{ fontSize: "13.5px", color: "var(--ink)", lineHeight: 1.6, margin: 0 }}>
              Herbal bioactives can alter cytochrome P450 enzyme metabolism, influencing the pharmacokinetics of prescription medications (e.g., blood thinners, antidiabetic drugs, antihypertensives, and immunosuppressants).
            </p>
          </div>

          <div style={{ background: "var(--cream)", padding: "20px", borderRadius: "10px", border: "1px solid var(--line)" }}>
            <h3 style={{ fontSize: "15px", color: "var(--green-deep)", margin: "0 0 8px" }}>🏥 Scheduled Surgical Procedures</h3>
            <p style={{ fontSize: "13.5px", color: "var(--ink)", lineHeight: 1.6, margin: 0 }}>
              Herbs with mild antiplatelet or central nervous system sedating properties (e.g., Tulsi, Ashwagandha, Gokshura, Guggul) should be discontinued at least 14 days prior to any scheduled surgical or dental intervention.
            </p>
          </div>

          <div style={{ background: "var(--cream)", padding: "20px", borderRadius: "10px", border: "1px solid var(--line)" }}>
            <h3 style={{ fontSize: "15px", color: "var(--green-deep)", margin: "0 0 8px" }}>🧪 Authentic Purification (Shodhana)</h3>
            <p style={{ fontSize: "13.5px", color: "var(--ink)", lineHeight: 1.6, margin: 0 }}>
              Mineral-organic compounds like Shilajit and resins like Guggulu MUST undergo verified classical *Shodhana* (purification) to eliminate heavy metal toxins. Never ingest raw rock exudates.
            </p>
          </div>
        </div>
      </motion.div>

      {/* EMERGENCY TRIAGE NOTE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card-generic"
        style={{ padding: "32px", background: "#fdf8f7", border: "1px solid #f5d4ce" }}
      >
        <h3 style={{ fontSize: "17px", color: "#a93226", margin: "0 0 8px" }}>
          🚨 Medical Emergency Notification
        </h3>
        <p style={{ fontSize: "13.5px", color: "#641e16", lineHeight: 1.6, margin: 0 }}>
          If you are experiencing severe chest pain, shortness of breath, sudden neurological deficits, severe allergic anaphylaxis, or acute traumatic injury, do NOT rely on Sattva or herbal remedies. Immediately contact emergency medical services or visit the nearest emergency hospital.
        </p>
      </motion.div>
    </div>
  );
}
