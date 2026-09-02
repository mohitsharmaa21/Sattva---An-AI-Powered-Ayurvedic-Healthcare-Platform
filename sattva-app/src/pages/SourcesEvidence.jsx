import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SourcesEvidence() {
  return (
    <div className="container" style={{ paddingBottom: "100px", maxWidth: "900px", margin: "0 auto" }}>
      <div className="page-header" style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 className="page-title" style={{ fontSize: "36px" }}>
          Sources & Evidence Framework
        </h1>
        <p className="page-subtitle" style={{ maxWidth: "680px", margin: "0 auto" }}>
          How Sattva reviews, categorizes, and audits traditional Ayurvedic literature alongside contemporary peer-reviewed scientific clinical trials.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-generic"
        style={{ padding: "40px", marginBottom: "32px" }}
      >
        <h2 style={{ fontSize: "22px", color: "var(--green-deep)", marginTop: 0, marginBottom: "16px" }}>
          Our Multi-Tiered Citation Hierarchy
        </h2>
        <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--ink)", marginBottom: "24px" }}>
          To prevent misleading health claims and uphold academic rigor, Sattva strictly evaluates all Ayurvedic remedies and clinical protocols against a rigorous three-tiered evidentiary hierarchy.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* TIER 1 */}
          <div style={{ background: "var(--cream)", padding: "24px", borderRadius: "12px", border: "1px solid var(--line)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span style={{ background: "var(--green)", color: "white", padding: "3px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 800 }}>
                TIER 1 (Highest Priority)
              </span>
              <h3 style={{ margin: 0, fontSize: "17px", color: "var(--green-deep)" }}>Government & Authoritative Health Bodies</h3>
            </div>
            <p style={{ margin: "0 0 12px", fontSize: "14px", color: "var(--ink)", lineHeight: 1.6 }}>
              Official statutory publications, classical pharmacopoeias, and national research council advisories:
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "13.5px", color: "#3d4e44", lineHeight: 1.6 }}>
              <li><strong>Ministry of AYUSH, Government of India:</strong> Guidelines, public health advisories, and policy directives.</li>
              <li><strong>Ayurvedic Pharmacopoeia of India (API):</strong> Standardized physical, chemical, and identity monographs.</li>
              <li><strong>Central Council for Research in Ayurvedic Sciences (CCRAS):</strong> Clinical trial protocols and monographs.</li>
              <li><strong>National Medicinal Plants Board (e-Charak):</strong> Verified botanical taxonomies, parts used, and agro-standards.</li>
              <li><strong>World Health Organization (WHO):</strong> Monographs on Selected Medicinal Plants.</li>
            </ul>
          </div>

          {/* TIER 2 */}
          <div style={{ background: "var(--cream)", padding: "24px", borderRadius: "12px", border: "1px solid var(--line)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span style={{ background: "#2e6a4f", color: "white", padding: "3px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 800 }}>
                TIER 2 (Scientific Efficacy)
              </span>
              <h3 style={{ margin: 0, fontSize: "17px", color: "var(--green-deep)" }}>Peer-Reviewed Scientific Literature</h3>
            </div>
            <p style={{ margin: "0 0 12px", fontSize: "14px", color: "var(--ink)", lineHeight: 1.6 }}>
              Indexed biomedical research focusing on randomized controlled trials (RCTs), meta-analyses, and systematic reviews:
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "13.5px", color: "#3d4e44", lineHeight: 1.6 }}>
              <li><strong>PubMed & PMC (National Center for Biotechnology Information):</strong> Indexed human clinical trials.</li>
              <li><strong>International Peer-Reviewed Journals:</strong> <em>Journal of Ethnopharmacology</em>, <em>Frontiers in Pharmacology</em>, <em>BMC Complementary Medicine</em>, <em>Current Neuropharmacology</em>.</li>
              <li>Prioritizes human clinical evidence over cell-culture or preclinical animal assays when describing wellness outcomes.</li>
            </ul>
          </div>

          {/* TIER 3 */}
          <div style={{ background: "var(--cream)", padding: "24px", borderRadius: "12px", border: "1px solid var(--line)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span style={{ background: "#6b7c72", color: "white", padding: "3px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 800 }}>
                TIER 3 (Formulation Only)
              </span>
              <h3 style={{ margin: 0, fontSize: "17px", color: "var(--green-deep)" }}>Verified Formulation & Manufacturing Standards</h3>
            </div>
            <p style={{ margin: "0 0 8px", fontSize: "14px", color: "var(--ink)", lineHeight: 1.6 }}>
              Used exclusively for precise ingredient ratios, manufacturing methods (*Shodhana*, *Taila Paka*), and extraction specs. Manufacturer marketing materials are never treated as independent scientific proof.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card-generic"
        style={{ padding: "40px" }}
      >
        <h2 style={{ fontSize: "22px", color: "var(--green-deep)", marginTop: 0, marginBottom: "16px" }}>
          Evidence-Aware Language Principles
        </h2>
        <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "var(--ink)", marginBottom: "16px" }}>
          Sattva enforces strict anti-misinformation rules across all database entries:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div style={{ background: "#fdf8f7", padding: "18px", borderRadius: "10px", border: "1px solid #fae1de" }}>
            <strong style={{ color: "#c0392b", fontSize: "13.5px" }}>✕ Prohibited Exaggerated Claims</strong>
            <p style={{ fontSize: "12.5px", color: "#78281f", margin: "8px 0 0", lineHeight: 1.5 }}>
              "Cures diabetes/anxiety", "guaranteed whole-body detox", "100% safe without side effects", "permanent immunity booster".
            </p>
          </div>
          <div style={{ background: "#f2f8f4", padding: "18px", borderRadius: "10px", border: "1px solid #d4eadc" }}>
            <strong style={{ color: "var(--green-deep)", fontSize: "13.5px" }}>✓ Required Evidence-Based Language</strong>
            <p style={{ fontSize: "12.5px", color: "#2d5e3c", margin: "8px 0 0", lineHeight: 1.5 }}>
              "Traditionally associated with...", "investigated in human trials for...", "may support healthy motility", "evidence is limited/promising".
            </p>
          </div>
        </div>

        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <Link to="/ayurveda" className="primary-button" style={{ padding: "12px 28px" }}>
            Explore Verified Ayurveda Directory →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
