import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ paddingBottom: "100px", maxWidth: "860px", margin: "0 auto" }}>
      <div className="page-header" style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 className="page-title" style={{ fontSize: "36px" }}>
          {t("policies.contactTitle")}
        </h1>
        <p className="page-subtitle" style={{ maxWidth: "600px", margin: "0 auto" }}>
          {t("policies.contactSubtitle")}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-generic"
        style={{ padding: "40px" }}
      >
        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div style={{ width: "64px", height: "64px", background: "var(--soft-green)", borderRadius: "50%", display: "grid", placeItems: "center", margin: "0 auto 16px", color: "var(--green)" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 style={{ fontSize: "22px", color: "var(--green-deep)", margin: "0 0 8px" }}>Message Received</h2>
            <p style={{ fontSize: "14.5px", color: "var(--muted)", maxWidth: "480px", margin: "0 auto 24px", lineHeight: 1.6 }}>
              Thank you for reaching out. In this academic prototype, feedback is recorded for development iterations.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
              className="primary-button"
              style={{ padding: "10px 24px" }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "var(--ink)", marginBottom: "6px" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mohit Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "var(--ink)", marginBottom: "6px" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "var(--ink)", marginBottom: "6px" }}>
                Inquiry Topic / Subject
              </label>
              <input
                type="text"
                required
                placeholder="Academic feedback, botanical data question, or technical inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  fontSize: "14px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "var(--ink)", marginBottom: "6px" }}>
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="How can we assist you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  fontSize: "14px",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="primary-button"
              style={{ padding: "14px", fontSize: "14.5px", fontWeight: 750, marginTop: "4px" }}
            >
              Submit Feedback
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
