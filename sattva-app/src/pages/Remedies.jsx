import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REMEDIES } from "../data/remediesData";

const EVIDENCE_BADGE_MAP = {
  A: {
    label: "Level A: Strong Human Evidence",
    class: "badge-evidence-a",
  },
  B: {
    label: "Level B: Promising Human Evidence",
    class: "badge-evidence-b",
  },
  C: {
    label: "Level C: Classical / Preliminary",
    class: "badge-evidence-c",
  },
  D: {
    label: "Level D: Insufficient Evidence",
    class: "badge-evidence-d",
  },
};

export default function Remedies() {
  const [selectedRemedy, setSelectedRemedy] = useState(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [formFilter, setFormFilter] = useState("");
  const [evidenceFilter, setEvidenceFilter] = useState("");

  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredResults, setFilteredResults] = useState(REMEDIES);

  // Toast State
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setIsFiltering(true);
    const delay = setTimeout(() => {
      let results = REMEDIES.map((rem) => {
        let score = 0;
        const q = searchQuery.toLowerCase().trim();

        if (q) {
          const nameLower = rem.name.toLowerCase();
          const commonLower = rem.commonName.toLowerCase();
          const botanicalLower = rem.botanicalName.toLowerCase();
          const descLower = rem.shortDescription.toLowerCase();
          const tagMatches = rem.categoryTags.some((tag) =>
            tag.toLowerCase().includes(q)
          );

          if (nameLower === q) score += 100;
          else if (nameLower.includes(q)) score += 50;

          if (botanicalLower.includes(q) || commonLower.includes(q)) score += 40;
          if (tagMatches) score += 30;
          if (descLower.includes(q)) score += 20;

          if (score === 0) return null;
        }

        const matchesCategory = categoryFilter
          ? rem.categoryTags.includes(categoryFilter)
          : true;

        const matchesForm = formFilter
          ? rem.formulationType.toLowerCase().includes(formFilter.toLowerCase())
          : true;

        const matchesEvidence = evidenceFilter
          ? rem.evidenceLevel === evidenceFilter
          : true;

        if (!(matchesCategory && matchesForm && matchesEvidence)) return null;

        return { ...rem, score };
      }).filter(Boolean);

      results.sort((a, b) => b.score - a.score);
      setFilteredResults(results);
      setIsFiltering(false);
    }, 250);

    return () => clearTimeout(delay);
  }, [searchQuery, categoryFilter, formFilter, evidenceFilter]);

  const clearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("");
    setFormFilter("");
    setEvidenceFilter("");
  };

  const handleOrder = (name, e) => {
    e.stopPropagation();
    setToast(`Added ${name} to your Order Cart`);
    setTimeout(() => setToast(null), 3000);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") setSelectedRemedy(null);
  };

  const hasActiveFilters =
    searchQuery || categoryFilter || formFilter || evidenceFilter;

  return (
    <div className="container" style={{ paddingBottom: "80px" }}>
      <div className="page-header">
        <h1 className="page-title">Ayurvedic Remedies Directory</h1>
        <p className="page-subtitle">
          Evidence-aware catalogue of classical Ayurvedic formulations and single
          herbs, verified against Ministry of AYUSH monographs and peer-reviewed
          scientific literature.
        </p>
      </div>

      {/* EDUCATIONAL & HEALTHCARE DISCLAIMER */}
      <div className="remedies-disclaimer-banner">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--green)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0, marginTop: "2px" }}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <p>
          <strong>Scientific & Traditional Context:</strong> Sattva provides
          general wellness information based on classical Ayurvedic treatises and
          available modern research. It is not a substitute for professional
          medical diagnosis or treatment. Consult a qualified healthcare
          professional before using herbal products, especially if you are
          pregnant, breastfeeding, taking prescription medicines, or managing a
          chronic medical condition.
        </p>
      </div>

      {/* FILTER TOOLBAR */}
      <div className="filter-bar">
        <div className="filter-input-wrap" style={{ position: "relative" }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="filter-input"
            placeholder="Search by herb, botanical name, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery.length > 2 && filteredResults.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "white",
                padding: "8px",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                zIndex: 50,
                marginTop: "8px",
                border: "1px solid var(--border)",
              }}
            >
              {filteredResults.slice(0, 5).map((r) => (
                <div
                  key={r.id}
                  onClick={() => {
                    setSelectedRemedy(r);
                    setSearchQuery("");
                  }}
                  style={{
                    padding: "10px 12px",
                    cursor: "pointer",
                    borderRadius: "8px",
                    transition: "all 0.2s",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--surface-2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <div>
                    <h4 style={{ margin: 0, fontSize: "13.5px", color: "#111" }}>
                      {r.name}
                    </h4>
                    <p
                      style={{
                        margin: "2px 0 0",
                        fontSize: "11.5px",
                        fontStyle: "italic",
                        color: "var(--muted)",
                      }}
                    >
                      {r.botanicalName}
                    </p>
                  </div>
                  <span
                    className={`badge-evidence ${
                      EVIDENCE_BADGE_MAP[r.evidenceLevel]?.class || ""
                    }`}
                  >
                    Level {r.evidenceLevel}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Wellness Domain Filter */}
        <select
          className="filter-select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Wellness Domain (All)</option>
          <option value="stress">Stress & Sleep</option>
          <option value="digestion">Digestion & Gut</option>
          <option value="cognition">Cognition & Focus</option>
          <option value="joints">Joints & Mobility</option>
          <option value="immunity">Immunity & Resilience</option>
          <option value="respiratory">Respiratory Health</option>
          <option value="skin">Skin Wellness</option>
          <option value="hair">Hair & Scalp</option>
          <option value="cardiovascular">Cardiovascular</option>
          <option value="metabolism">Metabolism</option>
          <option value="women_wellness">Women's Wellness</option>
          <option value="urinary">Urinary & Renal</option>
          <option value="oral_health">Oral & Throat</option>
          <option value="energy">Energy & Vitality</option>
        </select>

        {/* Formulation Form Filter */}
        <select
          className="filter-select"
          value={formFilter}
          onChange={(e) => setFormFilter(e.target.value)}
        >
          <option value="">Formulation (All)</option>
          <option value="churna">Churna (Powder)</option>
          <option value="vati">Vati (Tablet / Pill)</option>
          <option value="extract">Standardized Extract</option>
          <option value="taila">Taila (Medicated Oil)</option>
          <option value="resin">Shilajit Resin</option>
          <option value="khanda">Khanda (Granules)</option>
        </select>

        {/* Evidence Level Filter */}
        <select
          className="filter-select"
          value={evidenceFilter}
          onChange={(e) => setEvidenceFilter(e.target.value)}
        >
          <option value="">Evidence Level (All)</option>
          <option value="A">Level A (Strong Human Data)</option>
          <option value="B">Level B (Promising Human Data)</option>
          <option value="C">Level C (Classical / Preliminary)</option>
        </select>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              padding: "10px 16px",
              borderRadius: "8px",
              fontSize: "13px",
              color: "var(--muted)",
              cursor: "pointer",
            }}
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* PRODUCT GRID */}
      {isFiltering ? (
        <div className="grid-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="skeleton-box skeleton-card"
              style={{ height: "300px", marginBottom: "0" }}
            ></div>
          ))}
        </div>
      ) : filteredResults.length > 0 ? (
        <div className="grid-4">
          <AnimatePresence>
            {filteredResults.map((rem, i) => {
              const badgeInfo = EVIDENCE_BADGE_MAP[rem.evidenceLevel] || {
                label: `Level ${rem.evidenceLevel}`,
                class: "badge-evidence-b",
              };

              return (
                <motion.div
                  key={rem.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.02, duration: 0.2 }}
                  className="card-generic"
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => setSelectedRemedy(rem)}
                  whileHover={{ y: -4, borderColor: "var(--primary)" }}
                >
                  {/* Card Header & Evidence Badge */}
                  <div className="remedy-card-header">
                    <span className={`badge-evidence ${badgeInfo.class}`}>
                      {badgeInfo.label}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        gap: "4px",
                        flexWrap: "wrap",
                        justifyContent: "flex-end",
                      }}
                    >
                      {rem.categoryTags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            background: "rgba(45,66,15,0.06)",
                            color: "var(--primary)",
                            padding: "3px 7px",
                            borderRadius: "5px",
                            fontSize: "10px",
                            fontWeight: 700,
                            textTransform: "capitalize",
                          }}
                        >
                          {tag.replace("_", " ")}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Botanical Name */}
                  <div>
                    <h3
                      style={{
                        margin: "4px 0 2px",
                        fontSize: "16px",
                        fontWeight: 750,
                        color: "#17241e",
                      }}
                    >
                      {rem.name}
                    </h3>
                    <p className="remedy-botanical-name">{rem.botanicalName}</p>
                  </div>

                  {/* 5-7 Line Structured Concise Summary */}
                  <ul className="remedy-bullet-list">
                    <li>
                      <strong>Ayurvedic Role:</strong> {rem.traditionalUses[0]}
                    </li>
                    <li>
                      <strong>Studied Support:</strong>{" "}
                      {rem.potentialWellnessSupport[0]}
                    </li>
                    <li className="safety-bullet">
                      <strong>Caution:</strong> {rem.safetyPrecautions}
                    </li>
                  </ul>

                  {/* Verified Source Indicator */}
                  <div style={{ marginTop: "auto" }}>
                    <div className="remedy-source-count">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      {rem.sources.length} Verified Sources (AYUSH / PubMed)
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                      marginTop: "6px",
                    }}
                  >
                    <button
                      style={{
                        padding: "8px",
                        background: "transparent",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--text)",
                        cursor: "pointer",
                      }}
                    >
                      View Details
                    </button>
                    <button
                      onClick={(e) => handleOrder(rem.name, e)}
                      style={{
                        padding: "8px",
                        background: "var(--primary)",
                        border: "1px solid var(--primary)",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="card-generic"
          style={{
            padding: "60px 20px",
            textAlign: "center",
            gridColumn: "1 / -1",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "var(--surface-2)",
              color: "var(--muted)",
              margin: "0 auto 16px",
              display: "grid",
              placeItems: "center",
            }}
          >
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
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#111" }}>
            No verified remedies match criteria
          </h3>
          <p
            style={{
              margin: "0 0 24px",
              color: "var(--muted)",
              fontSize: "14px",
            }}
          >
            Try adjusting your search query, wellness domain, or evidence level
            filter.
          </p>
          <button
            onClick={clearFilters}
            className="btn-product primary"
            style={{
              padding: "10px 24px",
              fontSize: "14px",
              borderRadius: "8px",
            }}
          >
            Clear All Filters
          </button>
        </motion.div>
      )}

      {/* DETAIL MODAL (Auditable & Academically Structured) */}
      <AnimatePresence>
        {selectedRemedy && (
          <motion.div
            id="modal-overlay"
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              style={{
                background: "white",
                width: "100%",
                maxWidth: "680px",
                borderRadius: "16px",
                padding: "32px",
                position: "relative",
                boxShadow: "var(--shadow-md)",
                maxHeight: "88vh",
                overflowY: "auto",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRemedy(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "var(--surface-2)",
                  border: "none",
                  cursor: "pointer",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Modal Header */}
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    className={`badge-evidence ${
                      EVIDENCE_BADGE_MAP[selectedRemedy.evidenceLevel]?.class ||
                      ""
                    }`}
                  >
                    {EVIDENCE_BADGE_MAP[selectedRemedy.evidenceLevel]?.label}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "var(--muted)",
                      fontWeight: 600,
                    }}
                  >
                    Part: {selectedRemedy.partUsed}
                  </span>
                </div>
                <h2
                  style={{
                    margin: "0 0 4px",
                    fontSize: "24px",
                    color: "#17241e",
                    fontWeight: 800,
                  }}
                >
                  {selectedRemedy.name}
                </h2>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontStyle: "italic",
                    fontSize: "13.5px",
                    color: "#546e60",
                  }}
                >
                  {selectedRemedy.botanicalName} ({selectedRemedy.commonName})
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",
                    marginTop: "6px",
                  }}
                >
                  {selectedRemedy.categoryTags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(45,66,15,0.08)",
                        color: "var(--primary)",
                        padding: "4px 9px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: 700,
                        textTransform: "capitalize",
                      }}
                    >
                      {tag.replace("_", " ")}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Content Sections */}
              <div className="remedy-modal-grid">
                {/* 1. Overview */}
                <div className="remedy-modal-section">
                  <h4>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    Overview & Formulation
                  </h4>
                  <p>{selectedRemedy.whatItIs}</p>
                  <p style={{ marginTop: "8px", fontSize: "12.5px", color: "#617269" }}>
                    <strong>Formulation Type:</strong> {selectedRemedy.formulationType}
                  </p>
                </div>

                {/* 2. Traditional Ayurvedic Use */}
                <div className="remedy-modal-section">
                  <h4>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    Classical Ayurvedic Context
                  </h4>
                  <ul>
                    {selectedRemedy.traditionalUses.map((use, idx) => (
                      <li key={idx}>{use}</li>
                    ))}
                  </ul>
                </div>

                {/* 3. Modern Scientific Evidence */}
                <div className="remedy-modal-section">
                  <h4>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    Peer-Reviewed Scientific Literature
                  </h4>
                  <p>{selectedRemedy.scientificEvidenceSummary}</p>
                  <div style={{ marginTop: "10px" }}>
                    <strong style={{ fontSize: "12px", color: "var(--green-deep)" }}>
                      Potential Wellness Support:
                    </strong>
                    <ul style={{ marginTop: "4px" }}>
                      {selectedRemedy.potentialWellnessSupport.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 4. Key Bioactive Constituents */}
                <div className="remedy-modal-section">
                  <h4>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                    Well-Established Bioactive Constituents
                  </h4>
                  <p style={{ fontSize: "13px" }}>
                    {selectedRemedy.keyConstituents}
                  </p>
                </div>

                {/* 5. Safety, Precautions & Contraindications */}
                <div
                  className="remedy-modal-section"
                  style={{
                    background: "rgba(231,76,60,0.04)",
                    borderColor: "#f5c6cb",
                  }}
                >
                  <h4 style={{ color: "#c0392b" }}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c0392b"
                      strokeWidth="2.2"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    Safety, Interactions & Contraindications
                  </h4>
                  <p style={{ color: "#78281f", marginBottom: "8px" }}>
                    <strong>Precautions:</strong> {selectedRemedy.safetyPrecautions}
                  </p>
                  <p style={{ color: "#78281f" }}>
                    <strong>Who should avoid or consult a doctor:</strong>{" "}
                    {selectedRemedy.whoShouldAvoid}
                  </p>
                </div>

                {/* 6. Dosage Guidance */}
                <div className="remedy-modal-section">
                  <h4>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Dosage & Administration Note
                  </h4>
                  <p style={{ fontSize: "13px" }}>
                    {selectedRemedy.dosageGuidance}
                  </p>
                </div>

                {/* 7. Verified Sources & Direct Outbound Citations */}
                <div className="remedy-modal-section">
                  <h4>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    Verified Primary Sources & Citations
                  </h4>
                  <p style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "8px" }}>
                    Direct authentic links to Government, AYUSH, WHO, and peer-reviewed journals:
                  </p>
                  {selectedRemedy.sources.map((src, idx) => (
                    <a
                      key={idx}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="remedy-source-link"
                    >
                      <div>
                        <span>{src.title}</span>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "var(--muted)",
                            marginTop: "2px",
                          }}
                        >
                          Publisher: {src.publisher}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span className="remedy-source-type">{src.type}</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </div>
                    </a>
                  ))}
                  <div
                    style={{
                      fontSize: "10.5px",
                      color: "#7e8f85",
                      marginTop: "10px",
                      textAlign: "right",
                    }}
                  >
                    Last Verified: {selectedRemedy.lastVerifiedDate}
                  </div>
                </div>

                {/* Bottom Action */}
                <button
                  onClick={(e) => {
                    handleOrder(selectedRemedy.name, e);
                    setSelectedRemedy(null);
                  }}
                  className="btn-product primary"
                  style={{ width: "100%", padding: "14px", marginTop: "4px" }}
                >
                  Order Now (Simulated)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
