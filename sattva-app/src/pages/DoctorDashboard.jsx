import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getActiveUser } from "../utils/user";

const MOCK_PATIENTS = [
  {
    id: "P-101",
    name: "Rahul J.",
    time: "10:30 AM",
    status: "upcoming",
    age: 34,
    symptoms: "Severe lower back ache, disrupted sleep, mild digestion delays.",
    aiRisk: "medium",
    aiInsights:
      "Likely Vata aggravation linked to muscle strain. Wait & watch protocol active.",
  },
  {
    id: "P-102",
    name: "Sanya R.",
    time: "11:00 AM",
    status: "upcoming",
    age: 28,
    symptoms: "Chronic headaches, light sensitivity, stress buildup.",
    aiRisk: "high",
    aiInsights: "Pitta dominant spike. Recommend neuro-relaxant screening.",
  },
  {
    id: "P-103",
    name: "Amit D.",
    time: "昨日 4:00 PM",
    status: "completed",
    age: 45,
    symptoms: "Acidity, intermittent cough.",
    aiRisk: "low",
    aiInsights: "Standard Kapha congestion. Resolved locally.",
  },
];

export default function DoctorDashboard() {
  const [activePatient, setActivePatient] = useState(null);
  const [toast, setToast] = useState(null);
  const [doctorName, setDoctorName] = useState(() => getActiveUser("doctor"));

  useEffect(() => {
    const handleUserChanged = () => {
      setDoctorName(getActiveUser("doctor"));
    };
    window.addEventListener("sattva_user_changed", handleUserChanged);
    window.addEventListener("storage", handleUserChanged);
    return () => {
      window.removeEventListener("sattva_user_changed", handleUserChanged);
      window.removeEventListener("storage", handleUserChanged);
    };
  }, []);

  // Doctor form states
  const [clinicalNote, setClinicalNote] = useState("");
  const [rxInput, setRxInput] = useState("");

  const simulateAction = (actionName) => {
    setToast(`Successfully logged: ${actionName}`);
    setClinicalNote("");
    setRxInput("");
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div className="doctor-dashboard-split">
        {/* LEFT COLUMN: Queue */}
        <div className="doctor-sidebar">
          <div style={{ marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid var(--border)" }}>
            <h1 style={{ fontSize: "22px", margin: "0 0 4px", color: "var(--ink)" }}>{doctorName}</h1>
            <p style={{ margin: 0, fontSize: "14px", color: "var(--muted)", fontWeight: 500 }}>BAMS, MD (Ayurveda)</p>
          </div>
          <h2
            style={{
              fontSize: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--muted)",
              marginBottom: "20px",
            }}
          >
            Upcoming Queue
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "32px",
            }}
          >
            {MOCK_PATIENTS.filter((p) => p.status === "upcoming").map((p) => (
              <div
                key={p.id}
                onClick={() => setActivePatient(p)}
                className={`patient-list-item upcoming ${activePatient?.id === p.id ? "active" : ""}`}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "4px",
                  }}
                >
                  <span style={{ fontWeight: 600, color: "#111" }}>
                    {p.time}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "var(--primary)",
                      fontWeight: 600,
                    }}
                  >
                    {p.id}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--primary)",
                  }}
                >
                  {p.name}
                </div>
              </div>
            ))}
          </div>

          <h2
            style={{
              fontSize: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--muted)",
              marginBottom: "20px",
            }}
          >
            Completed
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {MOCK_PATIENTS.filter((p) => p.status === "completed").map((p) => (
              <div
                key={p.id}
                onClick={() => setActivePatient(p)}
                className={`patient-list-item completed ${activePatient?.id === p.id ? "active" : ""}`}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "4px",
                  }}
                >
                  <span style={{ fontWeight: 600, color: "var(--muted)" }}>
                    {p.name}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "var(--muted)",
                      fontWeight: 600,
                    }}
                  >
                    {p.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Active Patient Detail */}
        <div className="doctor-main">
          {activePatient ? (
            <motion.div
              key={activePatient.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              {/* Patient Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginBottom: "32px",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "24px",
                }}
              >
                <div>
                  <h1
                    style={{
                      margin: "0 0 8px",
                      fontSize: "32px",
                      color: "var(--primary)",
                    }}
                  >
                    {activePatient.name}
                  </h1>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "var(--muted)",
                    }}
                  >
                    ID: {activePatient.id} • Age: {activePatient.age} • Status:{" "}
                    {activePatient.status.toUpperCase()}
                  </p>
                </div>
                <button
                  className="btn-product secondary"
                  style={{
                    padding: "8px 16px",
                    fontSize: "12px",
                    borderRadius: "8px",
                  }}
                >
                  View EHR Profile
                </button>
              </div>

              {/* Grid 1: Basic & AI */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                  marginBottom: "24px",
                }}
              >
                <div className="card-generic" style={{ padding: "24px" }}>
                  <h3
                    style={{
                      margin: "0 0 16px",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    Patient Overview
                  </h3>
                  <p
                    style={{
                      margin: "0 0 24px",
                      fontSize: "15px",
                      color: "#111",
                      lineHeight: 1.6,
                    }}
                  >
                    "{activePatient.symptoms}"
                  </p>

                  <h4
                    style={{
                      margin: "0 0 12px",
                      fontSize: "13px",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    Uploaded Files
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                        color: "var(--primary)",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>PDF · blood_panel_2026.pdf</span>
                      <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                        42 KB
                      </span>
                    </div>
                    <div
                      style={{
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                        color: "var(--primary)",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>PDF · mri_lower_back_aug.pdf</span>
                      <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                        1.2 MB
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="card-generic"
                  style={{
                    padding: "24px",
                    background:
                      activePatient.aiRisk === "high"
                        ? "rgba(231, 76, 60, 0.03)"
                        : "white",
                    border:
                      activePatient.aiRisk === "high"
                        ? "1px solid #e74c3c"
                        : "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                      }}
                    >
                      Auto AI Sync
                    </h3>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        padding: "4px 8px",
                        borderRadius: "4px",
                        background:
                          activePatient.aiRisk === "high"
                            ? "#e74c3c"
                            : "#f39c12",
                        color: "white",
                      }}
                    >
                      {activePatient.aiRisk.toUpperCase()} RISK
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "var(--text)",
                      lineHeight: 1.6,
                    }}
                  >
                    {activePatient.aiInsights}
                  </p>
                </div>
              </div>

              {/* Grid 2: History & Actions */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                }}
              >
                <div className="card-generic" style={{ padding: "24px" }}>
                  <h3
                    style={{
                      margin: "0 0 24px",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    Medical Timeline
                  </h3>
                  <div className="timeline-container">
                    <div className="timeline-item">
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "var(--muted)",
                          marginBottom: "4px",
                        }}
                      >
                        3 days ago
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#111",
                          marginBottom: "4px",
                        }}
                      >
                        AI Triage Submitted
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "var(--muted)",
                          marginBottom: "4px",
                        }}
                      >
                        Last month
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#111",
                          marginBottom: "4px",
                        }}
                      >
                        Consultation (Dr. Mehta)
                      </div>
                    </div>
                    <div className="timeline-item" style={{ paddingBottom: 0 }}>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "var(--muted)",
                          marginBottom: "4px",
                        }}
                      >
                        6 months ago
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#111",
                          marginBottom: "4px",
                        }}
                      >
                        Triphala Prescription Active
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card-generic"
                  style={{
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 16px",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    Doctor Actions
                  </h3>

                  <textarea
                    className="filter-input"
                    placeholder="Add clinical observations and internal notes..."
                    value={clinicalNote}
                    onChange={(e) => setClinicalNote(e.target.value)}
                    style={{
                      width: "100%",
                      height: "90px",
                      resize: "none",
                      marginBottom: "16px",
                      fontSize: "13px",
                    }}
                  ></textarea>

                  <input
                    type="text"
                    className="filter-input"
                    placeholder="E.g. Triphala Churna, 500mg, twice daily"
                    value={rxInput}
                    onChange={(e) => setRxInput(e.target.value)}
                    style={{
                      width: "100%",
                      marginBottom: "20px",
                      fontSize: "13px",
                    }}
                  />

                  <div
                    style={{ marginTop: "auto", display: "flex", gap: "12px" }}
                  >
                    <button
                      onClick={() =>
                        simulateAction("Clinical Notes & Rx Saved")
                      }
                      className="btn-product primary"
                      style={{
                        flex: 1,
                        padding: "12px",
                        fontSize: "13px",
                        borderRadius: "8px",
                      }}
                    >
                      Save to Record
                    </button>
                    <button
                      onClick={() => simulateAction("Consultation Complete")}
                      className="btn-product secondary"
                      style={{
                        flex: 1,
                        padding: "12px",
                        fontSize: "13px",
                        borderRadius: "8px",
                      }}
                    >
                      End Consult
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--muted)",
              }}
            >
              <svg
                style={{ marginBottom: "16px", opacity: 0.5 }}
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <h3 style={{ margin: "0 0 8px", color: "#111" }}>
                Doctor Workspace Active
              </h3>
              <p style={{ fontSize: "14px" }}>
                Select a patient from the queue to load EHR.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* TOAST SYSTEM */}
      <AnimatePresence>
        {toast && (
          <div className="toast-container">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="toast-notice"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              {toast}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
