import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="container" style={{ paddingBottom: "100px" }}>
      <div
        className="page-header"
        style={{ marginBottom: "60px", textAlign: "center" }}
      >
        <h1 className="page-title" style={{ fontSize: "40px" }}>
          Platform Features
        </h1>
        <p
          className="page-subtitle"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          Sattva combines modern prognostic intelligence with ancient
          personalized routing.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "60px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-generic"
          style={{ padding: "40px" }}
        >
          <h2
            style={{
              fontSize: "24px",
              color: "var(--primary)",
              marginBottom: "16px",
            }}
          >
            AI Triage Systems
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Instead of searching blindly online, our symptom diagnostic engine
            maps your localized input directly to differential diagnosis
            clusters. It acts as an unbiased filter so you don't panic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-generic"
          style={{ padding: "40px" }}
        >
          <h2
            style={{
              fontSize: "24px",
              color: "var(--primary)",
              marginBottom: "16px",
            }}
          >
            Prakriti Profiling
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Understanding your core biological constitution (Vata, Pitta, Kapha)
            ensures that any protocol assigned to you targets the root metabolic
            imbalance, preventing secondary flare-ups.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-generic"
          style={{ padding: "40px" }}
        >
          <h2
            style={{
              fontSize: "24px",
              color: "var(--primary)",
              marginBottom: "16px",
            }}
          >
            Smart Doctor Consultations
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Your consultation is booked directly through the platform. By the
            time the doctor sees you, they already have your AI insights,
            minimizing redundant questions and allowing them to focus entirely
            on prognosis and treatment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-generic"
          style={{ padding: "40px" }}
        >
          <h2
            style={{
              fontSize: "24px",
              color: "var(--primary)",
              marginBottom: "16px",
            }}
          >
            Holistic Health Dashboard
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Track everything synchronously. Activity, recovery, stress,
            prescription lifecycles, and your dynamically charted risk score—all
            held natively in your dashboard.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
