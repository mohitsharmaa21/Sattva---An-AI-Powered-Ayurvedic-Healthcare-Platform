import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import sattvaLogo from "../assets/sattva-logo.png";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: "⚡",
      title: t("aboutPage.pillar1Title", "AI Symptom Intake & OCR Triage"),
      desc: t(
        "aboutPage.pillar1Desc",
        "Conversational multi-step intake and document OCR extraction to transform fragmented symptoms into organized doctor-ready summaries."
      ),
      link: "/ai-check",
    },
    {
      icon: "📊",
      title: t(
        "aboutPage.pillar2Title",
        "XGBoost Health Condition Classifier"
      ),
      desc: t(
        "aboutPage.pillar2Desc",
        "A dedicated machine-learning model evaluating vitals, activity levels, and daily habits to predict lifestyle risk categories (Fit, At-Risk, Unhealthy)."
      ),
      link: "/health-condition",
    },
    {
      icon: "🌿",
      title: t("aboutPage.pillar3Title", "Evidence-Based Ayurveda"),
      desc: t(
        "aboutPage.pillar3Desc",
        "Botanical remedies cross-referenced against AYUSH, CCRAS, and peer-reviewed scientific studies with transparent evidence grades."
      ),
      link: "/ayurveda",
    },
    {
      icon: "🩺",
      title: t(
        "aboutPage.pillar4Title",
        "Verified Practitioner Consultations"
      ),
      desc: t(
        "aboutPage.pillar4Desc",
        "Direct tele-consultation booking with certified BAMS / MD Ayurvedic doctors, sharing intake context beforehand."
      ),
      link: "/consultation",
    },
    {
      icon: "🌐",
      title: t(
        "aboutPage.pillar5Title",
        "Regional Language Accessibility"
      ),
      desc: t(
        "aboutPage.pillar5Desc",
        "Full localization support in English and Hindi (with future Indian languages planned) to ensure healthcare clarity is inclusive."
      ),
      link: null,
    },
  ];

  return (
    <div className="container" style={{ paddingBottom: "100px", maxWidth: "980px" }}>
      <div
        className="page-header"
        style={{ marginBottom: "50px", textAlign: "center" }}
      >
        <h1 className="page-title" style={{ fontSize: "40px" }}>
          {t("aboutPage.title", "About Sattva")}
        </h1>
        <p
          className="page-subtitle"
          style={{ maxWidth: "680px", margin: "0 auto", fontSize: "16px" }}
        >
          {t(
            "aboutPage.subtitle",
            "Bridging ancient Ayurvedic wisdom with modern clinical intelligence and machine learning."
          )}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-generic"
        style={{
          padding: "48px 40px",
          margin: "0 auto 36px",
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
            alt="Sattva Mascot"
            style={{
              width: "110px",
              height: "110px",
              objectFit: "contain",
              marginBottom: "14px",
            }}
          />
          <h3
            style={{
              fontSize: "34px",
              color: "var(--primary)",
              margin: 0,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            SATTVA
          </h3>
        </div>

        <p
          style={{
            fontSize: "19px",
            color: "var(--ink)",
            lineHeight: 1.6,
            margin: "0 0 36px",
            fontStyle: "italic",
            maxWidth: "760px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          &ldquo;{t("aboutPage.quote")}&rdquo;
        </p>

        <div
          style={{
            textAlign: "left",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              background: "var(--surface-2)",
              padding: "24px",
              borderRadius: "12px",
              border: "1px solid var(--border)",
            }}
          >
            <h4
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--primary)",
                margin: "0 0 10px",
                fontWeight: 750,
              }}
            >
              {t("aboutPage.problemTitle", "The Problem")}
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: "14.5px",
                color: "var(--text)",
                lineHeight: 1.7,
              }}
            >
              {t("aboutPage.problemDesc")}
            </p>
          </div>

          <div
            style={{
              background: "var(--surface-2)",
              padding: "24px",
              borderRadius: "12px",
              border: "1px solid var(--border)",
            }}
          >
            <h4
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--primary)",
                margin: "0 0 10px",
                fontWeight: 750,
              }}
            >
              {t("aboutPage.approachTitle", "Our Approach")}
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: "14.5px",
                color: "var(--text)",
                lineHeight: 1.7,
              }}
            >
              {t("aboutPage.approachDesc")}
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div style={{ textAlign: "left", marginBottom: "36px" }}>
          <h3
            style={{
              fontSize: "20px",
              color: "var(--ink)",
              margin: "0 0 18px",
              fontWeight: 750,
              textAlign: "center",
            }}
          >
            {t("aboutPage.pillarsTitle", "Core Architectural Pillars")}
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px",
            }}
          >
            {pillars.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "24px",
                      marginBottom: "8px",
                    }}
                  >
                    {p.icon}
                  </div>
                  <h4
                    style={{
                      fontSize: "15px",
                      color: "var(--ink)",
                      margin: "0 0 8px",
                      fontWeight: 700,
                    }}
                  >
                    {p.title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "var(--muted)",
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
                {p.link && (
                  <Link
                    to={p.link}
                    style={{
                      marginTop: "14px",
                      fontSize: "12.5px",
                      fontWeight: 700,
                      color: "var(--primary)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Explore &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Academic Research Disclaimer */}
        <div
          style={{
            background: "rgba(82, 183, 136, 0.08)",
            border: "1px solid rgba(116, 198, 157, 0.28)",
            borderLeft: "4px solid var(--primary)",
            borderRadius: "12px",
            padding: "20px 24px",
            textAlign: "left",
          }}
        >
          <h4
            style={{
              fontSize: "14px",
              color: "var(--green-deep)",
              margin: "0 0 6px",
              fontWeight: 750,
            }}
          >
            🎓 {t("aboutPage.academicTitle", "Academic & Research Prototype")}
          </h4>
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              lineHeight: 1.6,
              color: "var(--muted)",
            }}
          >
            {t("aboutPage.academicDesc")}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
