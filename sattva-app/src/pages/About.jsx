import { motion } from "framer-motion";
import sattvaLogo from "../assets/sattva-logo.png";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="container" style={{ paddingBottom: "100px" }}>
      <div
        className="page-header"
        style={{ marginBottom: "60px", textAlign: "center" }}
      >
        <h1 className="page-title" style={{ fontSize: "40px" }}>
          {t("footer.informationLinks.about")}
        </h1>
        <p
          className="page-subtitle"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          {t("footer.brandDesc")}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-generic"
        style={{
          padding: "60px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <img
            src={sattvaLogo}
            alt="Sattva Full Tree Mascot"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              marginBottom: "16px",
            }}
          />
          <h3
            style={{
              fontSize: "36px",
              color: "var(--primary)",
              margin: 0,
              fontWeight: 800,
            }}
          >
            SATTVA
          </h3>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#111",
            lineHeight: 1.6,
            margin: "0 0 32px",
            fontStyle: "italic",
          }}
        >
          "Healthcare today is confusing. Sattva is built to bring clarity by
          combining modern clinical intelligence with profound Ayurvedic
          understanding."
        </p>

        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div>
            <h4
              style={{
                fontSize: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--muted)",
                margin: "0 0 12px",
              }}
            >
              The Problem
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                color: "var(--text)",
                lineHeight: 1.8,
              }}
            >
              The first mile of healthcare is completely broken for the patient.
              You enter a search engine with a mild symptom and are immediately
              inundated with worst-case WebMD scenarios, conflicting forum
              advice, and absolute terror. By the time you reach an actual
              clinician, you are stressed, confused, and prone to
              miscommunication.
            </p>
          </div>
          <div>
            <h4
              style={{
                fontSize: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--muted)",
                margin: "0 0 12px",
              }}
            >
              Our Approach
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                color: "var(--text)",
                lineHeight: 1.8,
              }}
            >
              Sattva enforces a "Clarity-First" protocol. We intercept the
              patient at the moment of uncertainty, utilizing intelligent arrays
              to translate their disjointed symptoms into a structured clinical
              document. We empower traditional Ayurvedic intelligence as a
              first-class citizen, bridging the disconnect between ancient
              holistic wellness and rapid modern telehealth.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
