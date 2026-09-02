import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const FAQ_ITEMS = [
  {
    q: "What is Sattva?",
    a: "Sattva is an intelligent Ayurvedic and wellness guidance platform developed as an academic project. It bridges classical Ayurvedic knowledge (from treatises like Charaka Samhita, Sushruta Samhita, and the Ayurvedic Pharmacopoeia of India) with modern peer-reviewed scientific clinical literature and AI assistance.",
  },
  {
    q: "Does Sattva provide medical diagnoses or prescriptions?",
    a: "No. Sattva is an educational and wellness exploration platform. It does NOT provide clinical diagnoses, medical treatments, or replacement for prescription pharmaceuticals. Always consult a licensed physician or certified Ayurvedic practitioner for medical conditions.",
  },
  {
    q: "How are the Ayurvedic remedies and herbs verified?",
    a: "Every product and protocol is audited against a three-tier hierarchy: Tier 1 government sources (Ministry of AYUSH, API, CCRAS, WHO) and Tier 2 peer-reviewed clinical studies (PubMed indexed RCTs and systematic reviews). Exaggerated claims like 'cures' or 'guaranteed detox' are strictly excluded.",
  },
  {
    q: "Does Sattva manufacture or sell medicines?",
    a: "No. Sattva does not manufacture, bottle, or sell physical pharmaceuticals. All product references ('Explore Product') are educational catalog items demonstrating how structured knowledge and personalization can function in a digital health ecosystem.",
  },
  {
    q: "How does the AI Check feature work?",
    a: "The AI Check module accepts user symptom inputs and utilizes natural language models to provide structured, educational wellness triage. It highlights relevant Ayurvedic doshic tendencies and evidence-supported herbs to discuss with your healthcare provider.",
  },
  {
    q: "Is my personal data and health history private?",
    a: "Yes. In this academic prototype, all user session data, symptom histories, and simulated medical scans are stored securely in local browser storage without third-party tracking or commercial data sales.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="container" style={{ paddingBottom: "100px", maxWidth: "860px", margin: "0 auto" }}>
      <div className="page-header" style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 className="page-title" style={{ fontSize: "36px" }}>
          Frequently Asked Questions
        </h1>
        <p className="page-subtitle" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Clear answers about Sattva's academic architecture, evidence standards, and wellness guidance methodology.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="card-generic"
              style={{ padding: "24px", cursor: "pointer", transition: "border-color 0.2s" }}
              onClick={() => toggle(idx)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <h3 style={{ margin: 0, fontSize: "16.5px", color: "var(--green-deep)", fontWeight: 750 }}>
                  {item.q}
                </h3>
                <span
                  style={{
                    fontSize: "20px",
                    color: "var(--green)",
                    fontWeight: 700,
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  +
                </span>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{ margin: "16px 0 0", fontSize: "14px", color: "var(--ink)", lineHeight: 1.7, borderTop: "1px solid var(--line)", paddingTop: "14px" }}>
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div style={{ marginTop: "48px", textAlign: "center", background: "var(--cream)", padding: "32px", borderRadius: "14px", border: "1px solid var(--line)" }}>
        <h3 style={{ fontSize: "18px", color: "var(--green-deep)", margin: "0 0 8px" }}>Have more questions?</h3>
        <p style={{ fontSize: "14px", color: "#546e60", margin: "0 0 18px" }}>
          Read our comprehensive safety guidelines or explore our verified remedies knowledge base.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/safety-disclaimer" className="btn-product secondary" style={{ padding: "10px 20px" }}>
            Safety & Disclaimer →
          </Link>
          <Link to="/sources-evidence" className="primary-button" style={{ padding: "10px 20px" }}>
            Sources & Evidence →
          </Link>
        </div>
      </div>
    </div>
  );
}
