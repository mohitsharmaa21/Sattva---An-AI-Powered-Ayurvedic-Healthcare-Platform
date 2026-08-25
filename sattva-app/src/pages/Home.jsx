import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const carouselRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const faqs = [
    {
      q: "How is Sattva different?",
      a: "Sattva combines clinical intelligence with Ayurvedic frameworks to give you actionable clarity before you proceed to treatment.",
    },
    {
      q: "Does it replace doctors?",
      a: "No. It is a triage and wellness companion designed to guide you to the right care safely.",
    },
    {
      q: "Can I combine Ayurveda with treatments?",
      a: "Yes. Always inform your doctor about herbal or lifestyle modifications.",
    },
    {
      q: "How accurate is the AI?",
      a: "It is built on verified triage protocols, defaulting to safety and medical escalation when necessary.",
    },
  ];

  const testimonials = [
    {
      initials: "AK",
      name: "Ananya K.",
      text: "It helped me understand my body before I panicked.",
    },
    {
      initials: "MD",
      name: "Mark D.",
      text: "The risk analysis was incredibly relieving and clear.",
    },
    {
      initials: "SR",
      name: "Sanya R.",
      text: "A perfect blend of clinical data with Ayurvedic insights.",
    },
    {
      initials: "RJ",
      name: "Rahul J.",
      text: "Having my health history unified made my real doctor visit so much easier.",
    },
    {
      initials: "EP",
      name: "Elena P.",
      text: "A true healthcare companion, not just a booking app.",
    },
  ];

  return (
    <div className="product-layout">
      {/* 1. PRODUCT HERO (ACTION-FIRST) */}
      <section className="product-hero">
        <div className="container center-hero">
          <h1 className="hero-product-title">What are you feeling today?</h1>

          <div className="search-container">
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="symptom-input"
              placeholder="Search symptoms, conditions, or remedies..."
            />
          </div>

          <div className="hero-primary-actions">
            <Link to="/ai-check" className="btn-product primary">
              Start AI Check
            </Link>
            <Link to="/consultation" className="btn-product secondary">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. QUICK ACTION BAR */}
      <section className="quick-actions-bar">
        <div className="container">
          <div className="quick-actions-grid">
            <Link to="/ai-check" className="action-card">
              <div className="action-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <div className="action-label">AI Check</div>
            </Link>
            <Link to="/consultation" className="action-card">
              <div className="action-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="action-label">Book Doctor</div>
            </Link>
            <Link to="/ayurveda" className="action-card">
              <div className="action-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <div className="action-label">Ayurveda</div>
            </Link>
            <Link to="/dashboard" className="action-card">
              <div className="action-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
              </div>
              <div className="action-label">Dashboard</div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT MODULES (SERVICES) */}
      <section className="product-modules-section">
        <div className="container">
          <div className="modules-grid">
            <div className="module-card">
              <div className="module-info">
                <h3>Prakriti Profiling</h3>
                <p>Understand your natural body type.</p>
              </div>
              <Link to="/dashboard" className="btn-module">
                Start Assessment
              </Link>
            </div>

            <div className="module-card">
              <div className="module-info">
                <h3>AI Triage</h3>
                <p>Analyze symptoms instantly & safely.</p>
              </div>
              <Link to="/ai" className="btn-module">
                Start Check
              </Link>
            </div>

            <div className="module-card">
              <div className="module-info">
                <h3>Unified Dashboard</h3>
                <p>Track your health insights & history.</p>
              </div>
              <Link to="/dashboard" className="btn-module">
                Open Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REAL PRODUCT PREVIEW */}
      <section className="product-preview-section">
        <div className="container">
          <div className="preview-header">
            <h2>Guided clarity. See how it works.</h2>
            <p>
              A unified interface showing your Ayurvedic constitution and
              clinical risk factors.
            </p>
          </div>

          <div className="preview-ui-grid">
            {/* Mockup AI Report */}
            <div className="ui-mockup-panel">
              <div className="mockup-header-bar">
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="dot red"></span>
              </div>
              <div className="mockup-content">
                <div className="mockup-label">AI Symptom Analysis</div>
                <div className="mockup-risk-bar">
                  <div className="risk-level moderate">Moderate Priority</div>
                </div>
                <div className="mockup-text-line short"></div>
                <div className="mockup-text-line full"></div>
                <div className="mockup-text-line full"></div>
                <div className="mockup-action">Recommend: Consultation</div>
              </div>
            </div>

            {/* Mockup Dashboard */}
            <div className="ui-mockup-panel">
              <div className="mockup-header-bar">
                <span>Health Dashboard</span>
              </div>
              <div className="mockup-content padding-less">
                <div className="mockup-dosha-chart">
                  <div
                    className="dosha-bar vata"
                    style={{ width: "60%" }}
                  ></div>
                  <div
                    className="dosha-bar pitta"
                    style={{ width: "30%" }}
                  ></div>
                  <div
                    className="dosha-bar kapha"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <div className="mockup-stats">
                  <div className="stat-box"></div>
                  <div className="stat-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (COMPACT) */}
      <section className="compact-testimonials-section">
        <div className="container relative">
          <h3 className="sub-section-title">Trusted by thousands</h3>

          <div className="t-controls-mini">
            <button onClick={() => handleScroll("left")}>&lt;</button>
            <button onClick={() => handleScroll("right")}>&gt;</button>
          </div>

          <div className="t-carousel-mini" ref={carouselRef}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="t-card-mini">
                <div className="t-quote-mini">"{t.text}"</div>
                <div className="t-author-mini">
                  <div className="t-avatar-mini">{t.initials}</div>
                  <span className="t-name-mini">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ (COMPACT) */}
      <section className="compact-faq-section">
        <div className="container faq-mini-container">
          <h3 className="sub-section-title">Frequently Asked</h3>
          <div className="faq-list-mini">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item-mini">
                <button
                  onClick={() => toggleFaq(index)}
                  className="faq-question-mini"
                >
                  {faq.q}
                  <span className="faq-icon-mini">
                    {openFaq === index ? "-" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer-mini">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
