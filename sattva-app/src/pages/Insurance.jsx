import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Insurance() {
  const { t } = useLanguage();
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

  const conditionLabels = {
    diabetes: t("insurance.conditionsList.diabetes", "Diabetes"),
    hypertension: t("insurance.conditionsList.hypertension", "Hypertension"),
    asthma: t("insurance.conditionsList.asthma", "Asthma"),
    jointPain: t("insurance.conditionsList.jointPain", "Joint Pain"),
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
            className="card-generic"
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
              {t("insurance.pageTitle")}
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.6,
                marginBottom: "32px",
                fontSize: "15px",
              }}
            >
              {t("insurance.pageSubtitle")}
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
                  <span>{t("insurance.userAge")}</span>
                  <span>{age} {t("insurance.years")}</span>
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
                  <span>{t("insurance.bmiLabel")}</span>
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
                  background: "var(--surface-2)",
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
                  {t("insurance.tobaccoUsage")}
                </span>
                <button
                  onClick={() => setSmoker(!smoker)}
                  style={{
                    background: smoker ? "#c0392b" : "var(--surface)",
                    color: smoker ? "white" : "var(--muted)",
                    border: "1px solid var(--border)",
                    padding: "6px 16px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {smoker ? t("common.yes", "YES") : t("common.no", "NO")}
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
                  {t("insurance.preExistingConditions")}
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
                      className={`insurance-condition-btn ${conditions[cond] ? "selected" : ""}`}
                      style={{
                        padding: "16px",
                        border: "1px solid",
                        borderColor: conditions[cond]
                          ? "var(--primary)"
                          : "var(--border)",
                        background: conditions[cond]
                          ? "var(--primary)"
                          : "var(--surface)",
                        color: conditions[cond]
                          ? "#0d1510"
                          : "var(--text)",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: 700,
                        fontSize: "14px",
                        textTransform: "capitalize",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {conditionLabels[cond] || cond}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={calculateRisk}
                disabled={isCalculating}
                className="btn-product primary"
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
                  ? t("insurance.calculating")
                  : t("insurance.calculateBtn")}
              </button>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-generic"
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
                    {t("insurance.underwritingComplete")}
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
                    background: "var(--surface-2)",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {t("insurance.recalculate")}
                </button>
              </div>

              <div
                style={{
                  background: "var(--surface-2)",
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
                    {t("insurance.estimatedPremiumImpact")}
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
                    opacity: 0.3,
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
                  {t("insurance.mitigationStrategy")}
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
                className="btn-product primary"
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: "15px",
                  borderRadius: "10px",
                }}
              >
                {t("insurance.connectDoctorToLowerRisk")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
