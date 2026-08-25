import { motion } from "framer-motion";

export default function Vision() {
  return (
    <div className="container" style={{ paddingBottom: "100px" }}>
      <div
        className="page-header"
        style={{ marginBottom: "60px", textAlign: "center" }}
      >
        <h1 className="page-title" style={{ fontSize: "40px" }}>
          Our Vision
        </h1>
        <p
          className="page-subtitle"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          Reimagining global health routing through the synthesis of
          intelligence.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-generic"
        style={{ padding: "60px", maxWidth: "800px", margin: "0 auto" }}
      >
        <h3
          style={{
            fontSize: "24px",
            color: "var(--primary)",
            margin: "0 0 16px",
          }}
        >
          The Hybrid Healthcare Matrix
        </h3>
        <p
          style={{
            margin: "0 0 40px",
            fontSize: "16px",
            color: "var(--text)",
            lineHeight: 1.8,
          }}
        >
          We do not believe that AI will replace doctors. Instead, we advocate
          for a hyper-efficient hybrid pipeline. AI serves to drastically reduce
          the administrative and preliminary intake burden, allowing human
          practitioners to operate at the top of their licenses—focusing purely
          on empathy, complex prognostics, and targeted healing.
        </p>

        <h3
          style={{
            fontSize: "24px",
            color: "var(--primary)",
            margin: "0 0 16px",
          }}
        >
          Augmenting Ayurveda
        </h3>
        <p
          style={{
            margin: "0 0 40px",
            fontSize: "16px",
            color: "var(--text)",
            lineHeight: 1.8,
          }}
        >
          For decades, evidence-based traditional medicine has been pushed to
          the fringes of digital health platforms. Sattva's vision permanently
          integrates the thousands of years of vetted clinical tracking found in
          Ayurveda with real-time computational health markers, offering
          holistic protocols that are fundamentally safer, highly targeted, and
          biologically personalized.
        </p>

        <h3
          style={{
            fontSize: "24px",
            color: "var(--primary)",
            margin: "0 0 16px",
          }}
        >
          The Shift to Prevention-First
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "16px",
            color: "var(--text)",
            lineHeight: 1.8,
          }}
        >
          The archaic healthcare model operates reactively—treating disease only
          after the body has already degraded. The Sattva system utilizes
          constant micro-tracking and Prakriti profiling to shift the global
          clinical stance toward a <strong>prevention-first</strong>{" "}
          methodology. By anticipating dosha imbalances and acting via gentle
          herbal modulators safely ahead of the onset, we protect patients from
          catastrophic illness cycles entirely.
        </p>
      </motion.div>
    </div>
  );
}
