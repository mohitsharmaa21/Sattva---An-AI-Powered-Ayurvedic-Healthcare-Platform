import { motion } from "framer-motion";

const SYMPTOM_HISTORY = [
  {
    id: 1,
    date: "01 Jan 2026",
    symptom: "Sharp chest pain radiating to back",
    risk: "High",
    riskColor: "#c0392b",
    advice: "Urgent ER Visit Recommended",
    followups: 3,
  },
  {
    id: 2,
    date: "15 Dec 2025",
    symptom: "Dizziness and slight fever",
    risk: "Medium",
    riskColor: "#f39c12",
    advice: "Consulted Dr. Rohan Mehta",
    followups: 2,
  },
  {
    id: 3,
    date: "04 Nov 2025",
    symptom: "Persistent bloating after meals",
    risk: "Low",
    riskColor: "#27ae60",
    advice: "Adjusted diet per Vata protocol",
    followups: 1,
  },
];

export default function SymptomHistory() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg)", minHeight: "100vh" }}
    >
      <div className="container" style={{ maxWidth: "800px" }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
          style={{ padding: "40px" }}
        >
          <div style={{ marginBottom: "32px" }}>
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--muted)",
              }}
            >
              Health Log
            </h3>
            <h2
              style={{ margin: 0, fontSize: "32px", color: "var(--primary)" }}
            >
              Symptom History
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.6,
                marginTop: "8px",
                fontSize: "15px",
              }}
            >
              A historical timeline of your logged symptoms and interactions
              with the AI Triage system.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              position: "relative",
            }}
          >
            {/* Vertical line indicator */}
            <div
              style={{
                position: "absolute",
                left: "19px",
                top: "10px",
                bottom: "10px",
                width: "2px",
                background: "var(--border)",
                zIndex: 0,
              }}
            ></div>

            {SYMPTOM_HISTORY.map((hist) => (
              <div
                key={hist.id}
                style={{
                  display: "flex",
                  gap: "24px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    marginTop: "4px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--surface)",
                    border: `2px solid ${hist.riskColor}`,
                    display: "grid",
                    placeItems: "center",
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "var(--text)",
                  }}
                >
                  {hist.risk[0]}
                </div>

                <div
                  style={{
                    width: "100%",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--muted)",
                        fontWeight: 600,
                      }}
                    >
                      {hist.date}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: hist.riskColor,
                        fontWeight: "bold",
                        background: `${hist.riskColor}15`,
                        padding: "2px 8px",
                        borderRadius: "999px",
                      }}
                    >
                      {hist.risk} Risk
                    </span>
                  </div>
                  <h4
                    style={{
                      margin: "0 0 12px",
                      fontSize: "16px",
                      color: "var(--primary)",
                    }}
                  >
                    {hist.symptom}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid var(--border)",
                      paddingTop: "12px",
                      marginTop: "12px",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "var(--muted)" }}>
                      {hist.followups} follow-up questions answered.
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--text)",
                        fontWeight: 500,
                      }}
                    >
                      ✓ {hist.advice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
