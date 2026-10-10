import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const API_BASE = import.meta.env.VITE_HEALTH_ML_API_URL || "http://127.0.0.1:8000";

// Standard preset samples for quick demonstration and verification
const PRESETS = {
  known_sample: {
    sleep_duration: 6.61,
    heart_rate: 68.0,
    bmi: 25.81,
    calorie_expenditure: 1874.0,
    step_count: 9167,
    exercise_duration: 58.4,
    water_intake: 2.25,
    diet_type: "balanced",
    sleep_quality: "average",
    smoking_alcohol: "yes",
    gender: "other",
    stress_level: "medium",
    physical_activity_level: "active",
  },
  fit_profile: {
    sleep_duration: 8.0,
    heart_rate: 62.0,
    bmi: 21.5,
    calorie_expenditure: 2450.0,
    step_count: 12500,
    exercise_duration: 60.0,
    water_intake: 3.0,
    diet_type: "balanced",
    sleep_quality: "good",
    smoking_alcohol: "no",
    gender: "female",
    stress_level: "low",
    physical_activity_level: "active",
  },
  unhealthy_profile: {
    sleep_duration: 4.5,
    heart_rate: 94.0,
    bmi: 31.8,
    calorie_expenditure: 1450.0,
    step_count: 2200,
    exercise_duration: 5.0,
    water_intake: 1.1,
    diet_type: "non-veg",
    sleep_quality: "poor",
    smoking_alcohol: "yes",
    gender: "male",
    stress_level: "high",
    physical_activity_level: "sedentary",
  },
};

const INITIAL_FORM = {
  sleep_duration: 7.0,
  heart_rate: 72.0,
  bmi: 23.0,
  calorie_expenditure: 2200.0,
  step_count: 8000,
  exercise_duration: 40.0,
  water_intake: 2.2,
  diet_type: "balanced",
  sleep_quality: "good",
  smoking_alcohol: "no",
  gender: "male",
  stress_level: "medium",
  physical_activity_level: "moderate",
};

export default function HealthConditionCheck() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [apiOnline, setApiOnline] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Check backend health on mount
  useEffect(() => {
    let isMounted = true;
    const checkBackend = async () => {
      try {
        const res = await fetch(`${API_BASE}/health`, { method: "GET" });
        if (res.ok) {
          const data = await res.json();
          if (isMounted) setApiOnline(data.model_loaded === true);
        } else {
          if (isMounted) setApiOnline(false);
        }
      } catch (err) {
        if (isMounted) setApiOnline(false);
      }
    };
    checkBackend();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (field, val) => {
    setFormData((prev) => ({
      ...prev,
      [field]: val,
    }));
    if (error) setError(null);
  };

  const handleApplyPreset = (presetKey) => {
    if (PRESETS[presetKey]) {
      setFormData(PRESETS[presetKey]);
      setResult(null);
      setError(null);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setResult(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Format payload with expected types
    const payload = {
      sleep_duration: parseFloat(formData.sleep_duration),
      heart_rate: parseFloat(formData.heart_rate),
      bmi: parseFloat(formData.bmi),
      calorie_expenditure: parseFloat(formData.calorie_expenditure),
      step_count: parseInt(formData.step_count, 10),
      exercise_duration: parseFloat(formData.exercise_duration),
      water_intake: parseFloat(formData.water_intake),
      diet_type: formData.diet_type,
      stress_level: formData.stress_level,
      sleep_quality: formData.sleep_quality,
      physical_activity_level: formData.physical_activity_level,
      smoking_alcohol: formData.smoking_alcohol,
      gender: formData.gender,
    };

    // Client-side quick range validations
    if (
      isNaN(payload.sleep_duration) ||
      isNaN(payload.heart_rate) ||
      isNaN(payload.bmi) ||
      isNaN(payload.calorie_expenditure) ||
      isNaN(payload.step_count) ||
      isNaN(payload.exercise_duration) ||
      isNaN(payload.water_intake)
    ) {
      setError(t("conditionCheck.fillAllFields", "Please ensure all fields are filled out with valid numeric values."));
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/health-condition/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.detail ||
            `API returned status ${res.status}: ${res.statusText}`
        );
      }

      const data = await res.json();
      setResult(data);
      setApiOnline(true);
    } catch (err) {
      console.error("Prediction API error:", err);
      setError(
        err.message.includes("Failed to fetch")
          ? `${t("conditionCheck.apiOffline", "ML Service is currently unavailable. Please verify the Python backend is running on port 8000.")} (${API_BASE})`
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (pred) => {
    switch (pred?.toLowerCase()) {
      case "fit":
        return {
          title: t("conditionCheck.statusFit", "Fit"),
          color: "#2e7d32",
          bg: "rgba(46, 125, 50, 0.12)",
          border: "rgba(46, 125, 50, 0.3)",
          icon: "✓",
          desc: t(
            "conditionCheck.statusFitDesc",
            "Student profile demonstrates balanced physiological markers, regular activity, and favorable restorative habits."
          ),
        };
      case "at-risk":
        return {
          title: t("conditionCheck.statusAtRisk", "At-Risk"),
          color: "#d97706",
          bg: "rgba(217, 119, 6, 0.12)",
          border: "rgba(217, 119, 6, 0.3)",
          icon: "⚠️",
          desc: t(
            "conditionCheck.statusAtRiskDesc",
            "Indicators suggest emerging lifestyle strain, irregular sleep, or suboptimal physical activity needing preventative attention."
          ),
        };
      case "unhealthy":
        return {
          title: t("conditionCheck.statusUnhealthy", "Unhealthy"),
          color: "#dc2626",
          bg: "rgba(220, 38, 38, 0.12)",
          border: "rgba(220, 38, 38, 0.3)",
          icon: "⚠️",
          desc: t(
            "conditionCheck.statusUnhealthyDesc",
            "Multiple high-strain lifestyle and vital indicators detected in synthetic student behavioral patterns."
          ),
        };
      default:
        return {
          title: pred || "Unknown",
          color: "var(--primary)",
          bg: "var(--surface-2)",
          border: "var(--border)",
          icon: "ℹ️",
          desc: "",
        };
    }
  };

  const badgeInfo = result ? getStatusBadge(result.prediction) : null;

  return (
    <div className="condition-check-page">
      {/* Header */}
      <header className="page-heading">
        <div>
          <div className="condition-tag-row">
            <span className="eyebrow">
              {t("conditionCheck.badge", "TRAINED XGBOOST ML PIPELINE")}
            </span>
            <span
              className={`status-pill ${
                apiOnline === true
                  ? "pill-online"
                  : apiOnline === false
                  ? "pill-offline"
                  : "pill-pending"
              }`}
              title={`Backend: ${API_BASE}`}
            >
              <span className="status-dot"></span>
              {apiOnline === true
                ? t("conditionCheck.backendOnline", "ML Backend Online")
                : apiOnline === false
                ? t("conditionCheck.backendOffline", "ML Backend Offline")
                : "Checking backend..."}
            </span>
          </div>
          <h1>{t("conditionCheck.pageTitle", "AI Health Condition Check")}</h1>
          <p className="condition-page-sub">
            {t(
              "conditionCheck.pageSubtitle",
              "Machine-learning evaluation of lifestyle habits, vitals, and physical metrics powered by our trained XGBoost pipeline."
            )}
          </p>
        </div>
      </header>

      {/* Prominent Regulatory / Academic Disclaimer Banner */}
      <div className="responsible-disclaimer-banner">
        <div className="disclaimer-icon-wrap">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        </div>
        <div>
          <strong>Responsible Use & Research Notice:</strong>
          <p>{t("conditionCheck.disclaimer")}</p>
        </div>
      </div>

      {/* Quick Presets Bar */}
      <div className="presets-bar">
        <span className="presets-label">
          {t("conditionCheck.loadPreset", "Quick Test Presets")}:
        </span>
        <button
          type="button"
          className="preset-btn"
          onClick={() => handleApplyPreset("known_sample")}
        >
          {t("conditionCheck.presetKnown", "Evaluation Sample (At-Risk)")}
        </button>
        <button
          type="button"
          className="preset-btn"
          onClick={() => handleApplyPreset("fit_profile")}
        >
          {t("conditionCheck.presetFit", "Active Student (Fit)")}
        </button>
        <button
          type="button"
          className="preset-btn"
          onClick={() => handleApplyPreset("unhealthy_profile")}
        >
          {t("conditionCheck.presetUnhealthy", "Sedentary Student (Unhealthy)")}
        </button>
      </div>

      <div className="condition-layout-grid">
        {/* Form Column */}
        <section className="condition-form-panel">
          <form onSubmit={handleSubmit} className="condition-form">
            {/* Section 1: Vitals & Core Metrics */}
            <div className="form-section-card">
              <h3 className="section-title">
                {t(
                  "conditionCheck.vitalsSection",
                  "1. Physiological Vitals & Metrics"
                )}
              </h3>
              <div className="fields-grid-2">
                <div className="form-group">
                  <label htmlFor="sleep_duration">
                    {t("conditionCheck.sleepDuration", "Sleep Duration")}
                    <span className="unit-label">
                      ({t("conditionCheck.sleepDurationUnit", "hours / day")})
                    </span>
                  </label>
                  <input
                    id="sleep_duration"
                    type="number"
                    step="any"
                    min="1"
                    max="24"
                    value={formData.sleep_duration}
                    onChange={(e) =>
                      handleChange("sleep_duration", e.target.value)
                    }
                    required
                  />
                  <small className="field-hint">e.g. 7.5 hrs</small>
                </div>

                <div className="form-group">
                  <label htmlFor="heart_rate">
                    {t("conditionCheck.heartRate", "Heart Rate")}
                    <span className="unit-label">
                      ({t("conditionCheck.heartRateUnit", "bpm")})
                    </span>
                  </label>
                  <input
                    id="heart_rate"
                    type="number"
                    step="any"
                    min="35"
                    max="220"
                    value={formData.heart_rate}
                    onChange={(e) => handleChange("heart_rate", e.target.value)}
                    required
                  />
                  <small className="field-hint">Resting rate, e.g. 72 bpm</small>
                </div>

                <div className="form-group">
                  <label htmlFor="bmi">
                    {t("conditionCheck.bmi", "Body Mass Index (BMI)")}
                    <span className="unit-label">
                      ({t("conditionCheck.bmiUnit", "kg/m²")})
                    </span>
                  </label>
                  <input
                    id="bmi"
                    type="number"
                    step="any"
                    min="10"
                    max="65"
                    value={formData.bmi}
                    onChange={(e) => handleChange("bmi", e.target.value)}
                    required
                  />
                  <small className="field-hint">e.g. 22.5</small>
                </div>

                <div className="form-group">
                  <label htmlFor="water_intake">
                    {t("conditionCheck.waterIntake", "Water Intake")}
                    <span className="unit-label">
                      ({t("conditionCheck.waterIntakeUnit", "litres / day")})
                    </span>
                  </label>
                  <input
                    id="water_intake"
                    type="number"
                    step="any"
                    min="0.2"
                    max="15"
                    value={formData.water_intake}
                    onChange={(e) =>
                      handleChange("water_intake", e.target.value)
                    }
                    required
                  />
                  <small className="field-hint">e.g. 2.5 L</small>
                </div>
              </div>
            </div>

            {/* Section 2: Physical Activity & Movement */}
            <div className="form-section-card">
              <h3 className="section-title">
                {t(
                  "conditionCheck.activitySection",
                  "2. Daily Movement & Activity"
                )}
              </h3>
              <div className="fields-grid-2">
                <div className="form-group">
                  <label htmlFor="step_count">
                    {t("conditionCheck.stepCount", "Daily Step Count")}
                    <span className="unit-label">
                      ({t("conditionCheck.stepCountUnit", "steps / day")})
                    </span>
                  </label>
                  <input
                    id="step_count"
                    type="number"
                    step="any"
                    min="0"
                    max="90000"
                    value={formData.step_count}
                    onChange={(e) => handleChange("step_count", e.target.value)}
                    required
                  />
                  <small className="field-hint">e.g. 8500</small>
                </div>

                <div className="form-group">
                  <label htmlFor="exercise_duration">
                    {t("conditionCheck.exerciseDuration", "Exercise Duration")}
                    <span className="unit-label">
                      ({t("conditionCheck.exerciseDurationUnit", "mins / day")})
                    </span>
                  </label>
                  <input
                    id="exercise_duration"
                    type="number"
                    step="any"
                    min="0"
                    max="720"
                    value={formData.exercise_duration}
                    onChange={(e) =>
                      handleChange("exercise_duration", e.target.value)
                    }
                    required
                  />
                  <small className="field-hint">e.g. 45 mins</small>
                </div>

                <div className="form-group">
                  <label htmlFor="calorie_expenditure">
                    {t("conditionCheck.calorieExp", "Calorie Expenditure")}
                    <span className="unit-label">
                      ({t("conditionCheck.calorieExpUnit", "kcal / day")})
                    </span>
                  </label>
                  <input
                    id="calorie_expenditure"
                    type="number"
                    step="any"
                    min="600"
                    max="10000"
                    value={formData.calorie_expenditure}
                    onChange={(e) =>
                      handleChange("calorie_expenditure", e.target.value)
                    }
                    required
                  />
                  <small className="field-hint">Daily total, e.g. 2100 kcal</small>
                </div>

                <div className="form-group">
                  <label htmlFor="physical_activity_level">
                    {t(
                      "conditionCheck.physicalActivity",
                      "Physical Activity Level"
                    )}
                  </label>
                  <select
                    id="physical_activity_level"
                    value={formData.physical_activity_level}
                    onChange={(e) =>
                      handleChange("physical_activity_level", e.target.value)
                    }
                    required
                  >
                    <option value="active">Active</option>
                    <option value="moderate">Moderate</option>
                    <option value="sedentary">Sedentary</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Lifestyle & Behavioral Habits */}
            <div className="form-section-card">
              <h3 className="section-title">
                {t(
                  "conditionCheck.lifestyleSection",
                  "3. Lifestyle, Diet & Behavioral Habits"
                )}
              </h3>
              <div className="fields-grid-3">
                <div className="form-group">
                  <label htmlFor="diet_type">
                    {t("conditionCheck.dietType", "Diet Type")}
                  </label>
                  <select
                    id="diet_type"
                    value={formData.diet_type}
                    onChange={(e) => handleChange("diet_type", e.target.value)}
                    required
                  >
                    <option value="balanced">Balanced</option>
                    <option value="veg">Vegetarian</option>
                    <option value="non-veg">Non-Vegetarian</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="sleep_quality">
                    {t("conditionCheck.sleepQuality", "Sleep Quality")}
                  </label>
                  <select
                    id="sleep_quality"
                    value={formData.sleep_quality}
                    onChange={(e) =>
                      handleChange("sleep_quality", e.target.value)
                    }
                    required
                  >
                    <option value="good">Good</option>
                    <option value="average">Average</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="stress_level">
                    {t("conditionCheck.stressLevel", "Stress Level")}
                  </label>
                  <select
                    id="stress_level"
                    value={formData.stress_level}
                    onChange={(e) =>
                      handleChange("stress_level", e.target.value)
                    }
                    required
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="smoking_alcohol">
                    {t("conditionCheck.smokingAlcohol", "Smoking / Alcohol")}
                  </label>
                  <select
                    id="smoking_alcohol"
                    value={formData.smoking_alcohol}
                    onChange={(e) =>
                      handleChange("smoking_alcohol", e.target.value)
                    }
                    required
                  >
                    <option value="no">No</option>
                    <option value="occasional">Occasional</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="gender">
                    {t("conditionCheck.gender", "Gender")}
                  </label>
                  <select
                    id="gender"
                    value={formData.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                    required
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Error banner */}
            {error && (
              <div className="condition-error-alert" role="alert">
                <strong>Notice:</strong> {error}
              </div>
            )}

            {/* Actions */}
            <div className="form-actions-row">
              <button
                type="submit"
                className="primary-button predict-submit-btn"
                disabled={loading}
              >
                {loading
                  ? t("conditionCheck.predictingBtn", "Evaluating ML Pipeline...")
                  : t("conditionCheck.predictBtn", "Predict Health Condition")}
              </button>
              <button
                type="button"
                className="secondary-button"
                onClick={handleReset}
                disabled={loading}
              >
                {t("conditionCheck.resetBtn", "Reset Inputs")}
              </button>
            </div>
          </form>
        </section>

        {/* Results Column */}
        <section className="condition-results-panel">
          <div className="results-card">
            <h2>{t("conditionCheck.resultsTitle", "Model Prediction Results")}</h2>

            {!result && !loading && (
              <div className="empty-results-state">
                <div className="empty-icon-wrap">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3>Awaiting Input Submission</h3>
                <p>
                  Fill out your vitals and lifestyle habits on the left or select
                  one of the quick presets to test the trained XGBoost model.
                </p>
              </div>
            )}

            {loading && (
              <div className="loading-results-state">
                <div className="spinner"></div>
                <p>Running pipeline preprocessing and XGBoost evaluation...</p>
              </div>
            )}

            {result && !loading && badgeInfo && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="prediction-display-wrap"
              >
                {/* Main Outcome Card */}
                <div
                  className="predicted-outcome-box"
                  style={{
                    backgroundColor: badgeInfo.bg,
                    borderColor: badgeInfo.border,
                  }}
                >
                  <span className="outcome-caption">
                    {t(
                      "conditionCheck.predictedStatus",
                      "Predicted Health Condition"
                    )}
                  </span>
                  <div
                    className="outcome-headline"
                    style={{ color: badgeInfo.color }}
                  >
                    <span className="outcome-symbol">{badgeInfo.icon}</span>
                    <span className="outcome-text">{badgeInfo.title}</span>
                  </div>
                  <p className="outcome-desc">{badgeInfo.desc}</p>
                </div>

                {/* Probabilities Breakdown */}
                <div className="probabilities-section">
                  <h4>
                    {t(
                      "conditionCheck.probBreakdown",
                      "Class Probability Breakdown"
                    )}
                  </h4>

                  <div className="probability-bars-list">
                    {Object.entries(result.probabilities || {}).map(
                      ([className, prob]) => {
                        const pct = Math.round(prob * 1000) / 10;
                        const isWinner =
                          className.toLowerCase() ===
                          result.prediction?.toLowerCase();

                        let barColor = "var(--primary)";
                        if (className === "fit") barColor = "#2e7d32";
                        else if (className === "at-risk") barColor = "#d97706";
                        else if (className === "unhealthy") barColor = "#dc2626";

                        return (
                          <div
                            key={className}
                            className={`probability-item ${
                              isWinner ? "is-winner" : ""
                            }`}
                          >
                            <div className="prob-header">
                              <span className="class-label">
                                {className === "fit"
                                  ? t("conditionCheck.statusFit", "Fit")
                                  : className === "at-risk"
                                  ? t("conditionCheck.statusAtRisk", "At-Risk")
                                  : t("conditionCheck.statusUnhealthy", "Unhealthy")}
                              </span>
                              <strong className="class-pct">{pct}%</strong>
                            </div>
                            <div className="prob-bar-track">
                              <div
                                className="prob-bar-fill"
                                style={{
                                  width: `${Math.min(pct, 100)}%`,
                                  backgroundColor: barColor,
                                }}
                              ></div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Model Metadata Card */}
                <div className="model-meta-card">
                  <div className="meta-row">
                    <span>Model:</span>
                    <strong>{result.model_name || "XGBoost"}</strong>
                  </div>
                  <div className="meta-row">
                    <span>Validation Accuracy:</span>
                    <strong>99.98% (Synthetic Test Data)</strong>
                  </div>
                  <div className="meta-row">
                    <span>Scope:</span>
                    <span>Student Lifestyle & Health Dataset</span>
                  </div>
                  <p className="meta-note">
                    {result.notice || t("conditionCheck.modelNotice")}
                  </p>
                </div>

                {/* Re-edit / Continue button */}
                <button
                  type="button"
                  className="secondary-button recalculate-btn"
                  onClick={() => {
                    const el = document.querySelector(".condition-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t("conditionCheck.editBtn", "Edit Inputs")}
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
