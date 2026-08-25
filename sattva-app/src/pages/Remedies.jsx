import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REMEDIES = [
  {
    id: 1,
    name: "Ashwagandha Extract",
    use: "For stress support, calm energy",
    keywords: ["Stress", "Sleep"],
    dosage: "300-500mg with warm milk",
    time: "Before bed",
    precaution: "Avoid if hyper-acidic",
    prep: "Naturally extracted and pulverized into micro-fine powder",
    form: "powder",
    cat: "popular",
  },
  {
    id: 2,
    name: "Triphala Churna",
    use: "For digestion, gut balance",
    keywords: ["Digestion", "Detox"],
    dosage: "1 tsp powder with warm water",
    time: "Before bed",
    precaution: "Can act as a mild laxative",
    prep: "Equal parts Amla, Bibhitaki, Haritaki blended cold",
    form: "powder",
    cat: "recommended",
  },
  {
    id: 3,
    name: "Brahmi Vati",
    use: "For focus, clarity, mental calm",
    keywords: ["Brain", "Focus"],
    dosage: "500mg with ghee or warm water",
    time: "Morning",
    precaution: "May cause slight nausea on empty stomach",
    prep: "Triturated with water and rolled into pills",
    form: "tablet",
    cat: "popular",
  },
  {
    id: 4,
    name: "Turmeric Taila",
    use: "Anti-inflammatory, immunity",
    keywords: ["Immunity", "Inflammation"],
    dosage: "Pinch with black pepper in warm fat",
    time: "Anytime",
    precaution: "Excess heat can aggravate Pitta",
    prep: "Infused into pure sesame oil over 48 hours",
    form: "oil",
    cat: "recommended",
  },
  {
    id: 5,
    name: "Shatavari Root",
    use: "Hormonal balance, female health",
    keywords: ["Hormones", "Women"],
    dosage: "1 tsp with warm milk",
    time: "Morning or Night",
    precaution: "Avoid if experiencing high mucus/congestion",
    prep: "Washed, dried in shade, and powdered",
    form: "powder",
    cat: "popular",
  },
  {
    id: 6,
    name: "Neem Tablets",
    use: "Detoxification, clear skin",
    keywords: ["Skin", "Detox"],
    dosage: "1-2 tablets",
    time: "Morning",
    precaution: "Very cooling, can aggravate Vata",
    prep: "Pressed dry leaf extract",
    form: "tablet",
    cat: "recommended",
  },
  {
    id: 7,
    name: "Tulsi Extract",
    use: "Respiratory support, mild stress",
    keywords: ["Respiratory", "Immunity"],
    dosage: "Tea infusion 2x daily",
    time: "Morning/Mid-day",
    precaution: "Mild heating effect",
    prep: "Hydro-alcoholic extraction",
    form: "powder",
    cat: "popular",
  },
  {
    id: 8,
    name: "Giloy Ghanvati",
    use: "Potent immune booster",
    keywords: ["Immunity", "Fever"],
    dosage: "Juice or 500mg extract",
    time: "Empty Stomach",
    precaution: "Can lower blood sugar levels",
    prep: "Stem decoction boiled down to solid extract",
    form: "tablet",
    cat: "recommended",
  },
  {
    id: 9,
    name: "Guggul Lipid",
    use: "Cholesterol support, metabolism",
    keywords: ["Metabolism", "Joints"],
    dosage: "1 tablet after meals",
    time: "With Meals",
    precaution: "Creates heat, careful with Pitta",
    prep: "Resin purified in Triphala decoction",
    form: "tablet",
    cat: "popular",
  },
  {
    id: 10,
    name: "Arjuna Bark",
    use: "Cardiac wellness, circulation",
    keywords: ["Cardiac"],
    dosage: "Bark decoction or 500mg capsule",
    time: "Morning",
    precaution: "Use under guidance for severe conditions",
    prep: "Sun-dried inner bark ground to fine powder",
    form: "powder",
    cat: "recommended",
  },
  {
    id: 11,
    name: "Shilajit Resin",
    use: "Vitality, energy stamina",
    keywords: ["Energy", "Vitality"],
    dosage: "Pea-sized resin dissolved in milk",
    time: "Morning",
    precaution: "Avoid during high fever or acute infections",
    prep: "Exudate purified via Surya Tapi (sun) method",
    form: "powder",
    cat: "popular",
  },
  {
    id: 12,
    name: "Bhringraj Taila",
    use: "Hair & scalp health",
    keywords: ["Hair", "Skin"],
    dosage: "Apply externally to scalp",
    time: "Before sleep",
    precaution: "For external use only",
    prep: "Boiled in coconut oil with milk",
    form: "oil",
    cat: "popular",
  },
];

export default function Remedies() {
  const [selectedRemedy, setSelectedRemedy] = useState(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [problemFilter, setProblemFilter] = useState("");
  const [formFilter, setFormFilter] = useState("");
  const [catFilter, setCatFilter] = useState("");

  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredResults, setFilteredResults] = useState(REMEDIES);

  // Toast State
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const _t = setTimeout(() => setIsFiltering(true), 0);
    const delay = setTimeout(() => {
      let results = REMEDIES.map((rem) => {
        let score = 0;
        const q = searchQuery.toLowerCase().trim();

        if (q) {
          const nameLower = rem.name.toLowerCase();
          const useLower = rem.use.toLowerCase();
          const keywordsLower = rem.keywords.map((k) => k.toLowerCase());

          if (nameLower === q) score += 100;
          else if (nameLower.includes(q)) score += 50;

          if (useLower.includes(q)) score += 20;

          if (keywordsLower.includes(q)) score += 30;
          else if (keywordsLower.some((kw) => kw.includes(q))) score += 10;

          if (score === 0) return null;
        }

        const matchesProb = problemFilter
          ? rem.keywords.some((kw) =>
              kw.toLowerCase().includes(problemFilter.toLowerCase()),
            )
          : true;
        const matchesForm = formFilter ? rem.form === formFilter : true;
        const matchesCat = catFilter ? rem.cat === catFilter : true;

        if (!(matchesProb && matchesForm && matchesCat)) return null;

        return { ...rem, score };
      }).filter((r) => r !== null);

      results.sort((a, b) => b.score - a.score);
      setFilteredResults(results);
      setIsFiltering(false);
    }, 400);
    return () => clearTimeout(delay);
  }, [searchQuery, problemFilter, formFilter, catFilter]);

  const clearFilters = () => {
    setSearchQuery("");
    setProblemFilter("");
    setFormFilter("");
    setCatFilter("");
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
    searchQuery || problemFilter || formFilter || catFilter;

  return (
    <div className="container" style={{ paddingBottom: "80px" }}>
      <div className="page-header">
        <h1 className="page-title">Ayurvedic Remedies Directory</h1>
        <p className="page-subtitle">
          Search and filter classical Ayurvedic formulations, single herbs, and
          their clinical applications.
        </p>
      </div>

      {/* FILTER BAR */}
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
            placeholder="Search medicines or problems"
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
                    padding: "12px",
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
                    <h4 style={{ margin: 0, fontSize: "14px", color: "#111" }}>
                      {r.name}
                    </h4>
                    <p
                      style={{
                        margin: "4px 0 0",
                        fontSize: "12px",
                        color: "var(--muted)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {r.use}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "var(--primary)",
                      background: "rgba(45,66,15,0.08)",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontWeight: 600,
                    }}
                  >
                    {r.form}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <select
          className="filter-select"
          value={problemFilter}
          onChange={(e) => setProblemFilter(e.target.value)}
        >
          <option value="">Problem Type (All)</option>
          <option value="digestion">Digestion</option>
          <option value="stress">Stress & Sleep</option>
          <option value="immunity">Immunity</option>
          <option value="skin">Skin</option>
          <option value="hair">Hair</option>
          <option value="energy">Energy</option>
        </select>
        <select
          className="filter-select"
          value={formFilter}
          onChange={(e) => setFormFilter(e.target.value)}
        >
          <option value="">Form (All)</option>
          <option value="powder">Powder (Churna)</option>
          <option value="tablet">Tablet (Vati)</option>
          <option value="oil">Oil (Taila)</option>
        </select>
        <select
          className="filter-select"
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
        >
          <option value="">Popular / Recommended</option>
          <option value="popular">Most Popular</option>
          <option value="recommended">Clinical Recommended</option>
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

      {/* RESULT GRID OR EMPTY STATE */}
      {isFiltering ? (
        <div className="grid-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="skeleton-box skeleton-card"
              style={{ height: "200px", marginBottom: "0" }}
            ></div>
          ))}
        </div>
      ) : filteredResults.length > 0 ? (
        <div className="grid-4">
          <AnimatePresence>
            {filteredResults.map((rem, i) => (
              <motion.div
                key={rem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.03, duration: 0.2 }}
                className="card-generic"
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  cursor: "pointer",
                  position: "relative",
                }}
                onClick={() => setSelectedRemedy(rem)}
                whileHover={{ y: -4, borderColor: "var(--primary)" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      padding: "12px",
                      background: "var(--surface-2)",
                      borderRadius: "10px",
                      color: "var(--primary)",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      flexWrap: "wrap",
                      justifyContent: "flex-end",
                      flex: 1,
                    }}
                  >
                    {rem.keywords.map((kw) => (
                      <span
                        key={kw}
                        style={{
                          background: "rgba(45,66,15,0.08)",
                          color: "var(--primary)",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          fontSize: "10px",
                          fontWeight: 700,
                        }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3
                    style={{
                      margin: "0 0 4px",
                      fontSize: "16px",
                      color: "#111",
                    }}
                  >
                    {rem.name}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "var(--muted)",
                      lineHeight: 1.5,
                      minHeight: "40px",
                    }}
                  >
                    {rem.use}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
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
            ))}
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
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#111" }}>
            No remedies found
          </h3>
          <p
            style={{
              margin: "0 0 24px",
              color: "var(--muted)",
              fontSize: "14px",
            }}
          >
            We couldn't find any formulation matching your parameters.
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

      {/* EXPLANATION MODAL (Strict Layout) */}
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
                maxWidth: "540px",
                borderRadius: "16px",
                padding: "32px",
                position: "relative",
                boxShadow: "var(--shadow-md)",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
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

              <h2
                style={{ margin: "0 0 4px", fontSize: "24px", color: "#111" }}
              >
                {selectedRemedy.name}
              </h2>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginBottom: "24px",
                }}
              >
                {selectedRemedy.keywords.map((kw) => (
                  <span
                    key={kw}
                    style={{
                      display: "inline-block",
                      background: "rgba(45,66,15,0.08)",
                      color: "var(--primary)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div>
                  <h4
                    style={{
                      margin: "0 0 6px",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--muted)",
                    }}
                  >
                    Clinical Uses
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "var(--text)",
                    }}
                  >
                    {selectedRemedy.use}
                  </p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      background: "var(--surface-2)",
                      padding: "16px",
                      borderRadius: "8px",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 0 6px",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--muted)",
                      }}
                    >
                      How to take
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "var(--text)",
                        fontWeight: 500,
                      }}
                    >
                      {selectedRemedy.dosage}
                    </p>
                  </div>
                  <div
                    style={{
                      background: "var(--surface-2)",
                      padding: "16px",
                      borderRadius: "8px",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 0 6px",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--muted)",
                      }}
                    >
                      When to take
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "var(--text)",
                        fontWeight: 500,
                      }}
                    >
                      {selectedRemedy.time}
                    </p>
                  </div>
                </div>
                <div>
                  <h4
                    style={{
                      margin: "0 0 6px",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--muted)",
                    }}
                  >
                    Preparation Method
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "var(--text)",
                    }}
                  >
                    {selectedRemedy.prep}
                  </p>
                </div>
                <div
                  style={{
                    padding: "16px",
                    background: "rgba(231,76,60,0.05)",
                    borderRadius: "8px",
                    borderLeft: "3px solid #e74c3c",
                  }}
                >
                  <h4
                    style={{
                      margin: "0 0 6px",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#e74c3c",
                    }}
                  >
                    Precautions
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "var(--text)",
                    }}
                  >
                    {selectedRemedy.precaution}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    handleOrder(selectedRemedy.name, e);
                    setSelectedRemedy(null);
                  }}
                  className="btn-product primary"
                  style={{ width: "100%", padding: "14px", marginTop: "8px" }}
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
