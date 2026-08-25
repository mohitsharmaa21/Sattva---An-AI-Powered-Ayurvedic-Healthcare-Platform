import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Insurance() {
  const [age, setAge] = useState(30);
  const [bmi, setBmi] = useState(22);
  const [smoker, setSmoker] = useState(false);
  const [conditions, setConditions] = useState({
    diabetes: false,
    hypertension: false,
    asthma: false,
    jointPain: false,
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState(null);

  const toggleCondition = (key) =>
    setConditions((prev) => ({ ...prev, [key]: !prev[key] }));

  const calculateRisk = () => {
    setIsCalculating(true);

    // Abstracting mock insurance actuarial algorithm
    setTimeout(() => {
      let score = 0;

      if (age > 45) score += 2;
      if (age > 60) score += 3;

      if (bmi > 25) score += 2;
      if (bmi > 30) score += 3;

      if (smoker) score += 5;

      let conditionCount = Object.values(conditions).filter(Boolean).length;
      score += conditionCount * 3;

      let riskCategory = "Preferred Standard";
      let riskColor = "#27ae60";
      let premiumImpact = "Base Premium Applied. Low Risk.";
      let ayurvedicIntervention =
        "Maintain your current active lifestyle. Incorporate Triphala simply for daily maintenance.";

      if (score >= 5 && score < 10) {
        riskCategory = "Elevated Risk";
        riskColor = "#f39c12";
        premiumImpact = "+15% Premium Loading Expected.";
        ayurvedicIntervention =
          "Adopt a strictly Dosha-balancing diet. Introduce Ashwagandha to manage cortisol impacts on cardiovascular health.";
      } else if (score >= 10) {
        riskCategory = "High / Sub-Standard Risk";
        riskColor = "#c0392b";
        premiumImpact = "+40% Premium Loading Expected or Restricted Coverage.";
        ayurvedicIntervention =
          "Urgent lifestyle overhaul required. Incorporate Guggul for lipid management and strict intermittent fasting. Seek regular allopathic supervision.";
      }

      setResult({
        category: riskCategory,
        color: riskColor,
        impact: premiumImpact,
        advice: ayurvedicIntervention,
        score,
      });
      setIsCalculating(false);
    }, 1200);
  };

  return (
    <section
      className="section"
      style={{ background: "var(--bg)", minHeight: "100vh" }}
    >
      <div className="container" style={{ maxWidth: "800px" }}>
        {!result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
            style={{ padding: "40px" }}
          >
            <h2
              style={{
                fontSize: "28px",
                color: "var(--primary)",
                marginTop: 0,
                marginBottom: "16px",
              }}
            >
              Insurance Risk Actuary
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.6,
                marginBottom: "32px",
                fontSize: "15px",
              }}
            >
              Calculate your estimated health insurance risk premium based on
              standard underwriting factors. We will provide preemptive
              Ayurvedic strategies to lower your risk profile.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {/* Age Slider */}
              <div>
                <label
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--text)",
                  }}
                >
                  <span>User Age</span>
                  <span>{age} years</span>
                </label>
                <input
                  type="range"
                  min="18"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    accentColor: "var(--primary)",
                  }}
                />
              </div>

              {/* BMI Slider */}
              <div>
                <label
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--text)",
                  }}
                >
                  <span>Body Mass Index (BMI)</span>
                  <span>{bmi}</span>
                </label>
                <input
                  type="range"
                  min="15"
                  max="40"
                  value={bmi}
                  step="0.5"
                  onChange={(e) => setBmi(Number(e.target.value))}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    accentColor: "var(--primary)",
                  }}
                />
              </div>

              {/* Smoker Toggle */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "var(--surface)",
                  padding: "16px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--text)",
                  }}
                >
                  Tobacco / Nicotine Usage
                </span>
                <button
                  onClick={() => setSmoker(!smoker)}
                  style={{
                    background: smoker ? "#c0392b" : "var(--border)",
                    color: "white",
                    border: "none",
                    padding: "6px 16px",
                    borderRadius: "999px",
                    fontWeight: 600,
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                >
                  {smoker ? "YES" : "NO"}
                </button>
              </div>

              {/* Conditions */}
              <div>
                <p
                  style={{
                    margin: "0 0 12px",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--text)",
                  }}
                >
                  Pre-existing Conditions
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  {Object.keys(conditions).map((cond) => (
                    <button
                      key={cond}
                      onClick={() => toggleCondition(cond)}
                      style={{
                        padding: "16px",
                        border: "1px solid",
                        borderColor: conditions[cond]
                          ? "var(--primary)"
                          : "var(--border)",
                        background: conditions[cond]
                          ? "rgba(27,46,33,0.05)"
                          : "white",
                        color: conditions[cond]
                          ? "var(--primary)"
                          : "var(--text)",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      {cond.replace(/([A-Z])/g, " $1").trim()}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={calculateRisk}
                disabled={isCalculating}
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  marginTop: "16px",
                  opacity: isCalculating ? 0.7 : 1,
                }}
              >
                {isCalculating
                  ? "Running Underwriting Engine..."
                  : "Calculate Risk Profile"}
              </button>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card"
              style={{
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--muted)",
                    }}
                  >
                    Underwriting Complete
                  </h3>
                  <h2
                    style={{ margin: 0, fontSize: "28px", color: result.color }}
                  >
                    {result.category}
                  </h2>
                </div>
                <button
                  onClick={() => setResult(null)}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--border)",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Recalculate
                </button>
              </div>

              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  padding: "24px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--muted)",
                      fontWeight: 600,
                      marginBottom: "4px",
                    }}
                  >
                    Estimated Premium Impact
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--text)",
                    }}
                  >
                    {result.impact}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    color: result.color,
                    opacity: 0.2,
                  }}
                >
                  {result.score}
                </div>
              </div>

              <div>
                <h4
                  style={{
                    margin: "0 0 12px",
                    fontSize: "16px",
                    color: "var(--primary)",
                  }}
                >
                  Ayurvedic Mitigation Strategy
                </h4>
                <div
                  style={{
                    background: "var(--surface-2)",
                    padding: "20px",
                    borderRadius: "8px",
                    fontStyle: "italic",
                    fontSize: "15px",
                    color: "var(--text)",
                    borderLeft: `4px solid ${result.color}`,
                  }}
                >
                  "{result.advice}"
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: "15px",
                  borderRadius: "10px",
                }}
              >
                Connect with an Ayurvedic Doctor to lower risk
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
