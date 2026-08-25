import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Enter Symptoms",
      desc: "Interact with our gentle clinic terminal to record precisely what you are feeling without medical jargon or rushed constraints.",
    },
    {
      num: "02",
      title: "AI Analysis",
      desc: "Our engine maps your descriptors to an internal matrix of clinical markers and classical Ayurvedic indications instantly.",
    },
    {
      num: "03",
      title: "Get Report",
      desc: "Receive a structured risk score and preliminary pathway layout, neutralizing the anxiety of 'Googling symptoms'.",
    },
    {
      num: "04",
      title: "Consult Doctor",
      desc: "Sync immediately with a practitioner who already has your report open, removing the tedious repetition of the clinical intake.",
    },
    {
      num: "05",
      title: "Follow Guidance",
      desc: "Access the transparent records, wellness charts, and uploaded logs right from your unified dashboard.",
    },
  ];

  return (
    <div className="container" style={{ paddingBottom: "100px" }}>
      <div
        className="page-header"
        style={{ marginBottom: "60px", textAlign: "center" }}
      >
        <h1 className="page-title" style={{ fontSize: "40px" }}>
          How It Works
        </h1>
        <p
          className="page-subtitle"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          A frictionless pipeline connecting you from initial confusion directly
          to targeted healing.
        </p>
      </div>

      <div
        style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}
      >
        {/* Central Line */}
        <div
          style={{
            position: "absolute",
            left: "32px",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "var(--border)",
          }}
        ></div>

        {steps.map((step, index) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            style={{
              display: "flex",
              gap: "32px",
              marginBottom: "48px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                background: "var(--surface)",
                border: "2px solid var(--primary)",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                fontSize: "20px",
                fontWeight: 800,
                color: "var(--primary)",
                flexShrink: 0,
              }}
            >
              {step.num}
            </div>
            <div style={{ paddingTop: "8px" }}>
              <h3
                style={{ margin: "0 0 12px", fontSize: "22px", color: "#111" }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "var(--text)",
                  lineHeight: 1.6,
                }}
              >
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
