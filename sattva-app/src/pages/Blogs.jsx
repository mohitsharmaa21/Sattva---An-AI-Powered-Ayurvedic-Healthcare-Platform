import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const BLOG_DATA = [
  {
    id: 1,
    title: "Understanding Vata, Pitta, and Kapha",
    desc: "A foundational guide to recognizing your dominant dosha and maintaining balance naturally.",
    fullContent:
      "Ayurveda categorizes human physiology into three primary energy states—Vata, Pitta, and Kapha. Vata governs movement, Pitta governs metabolism, and Kapha governs structure. An imbalance in any of these doshas leads to specific physical and psychological ailments. By understanding your unique constitution (Prakriti), you can tailor your diet and lifestyle to mitigate chronic flare-ups before they begin.",
    ingredients: ["Self-awareness", "Dietary observation"],
    howToUse:
      "Observe how your body reacts to seasonal changes, temperature shifts, and different food groups to define your primary dosha.",
    popupKeywords: ["Dosha", "Basics", "Digestion"],
    sources: ["Charaka Samhita, Sutra Sthana"],
  },
  {
    id: 2,
    title: "Ashwagandha: The Stress Adaptogen",
    desc: "How the ancient root of Ashwagandha actively lowers cortisol and manages chronic anxiety.",
    fullContent:
      "Ashwagandha (Withania somnifera) is one of the most powerful adaptogens in Ayurvedic medicine. It directly modulates the body's stress response by interacting with the HPA axis, significantly lowering cortisol levels. Clinical studies show marked improvements in patients struggling with chronic anxiety, sleep disorders, and cortisol-induced weight gain when using standardized Ashwagandha root extract.",
    ingredients: ["Ashwagandha Root (Withania somnifera)", "Warm Milk", "Ghee"],
    howToUse:
      "Mix 500mg of powdered root in warm milk before bedtime. Avoid taking it on an empty stomach if you experience nausea.",
    popupKeywords: ["Stress", "Sleep", "Energy"],
    sources: ["Sushruta Samhita", "Modern Clinical Adaptogen Trials (2022)"],
  },
  {
    id: 3,
    title: "Triphala: The Daily Detox Benchmark",
    desc: "Why this three-fruit combination is the ultimate formula for gut health and safe detoxification.",
    fullContent:
      "Triphala translates to 'three fruits'—Amla, Bibhitaki, and Haritaki. Unlike harsh chemical laxatives, Triphala rehabilitates the digestive tract while gently promoting bowel motility. It acts as a powerful source of Vitamin C and antioxidants, nourishing tissues while clearing out 'Ama' (metabolic toxins). It is considered the safest daily detox protocol.",
    ingredients: ["Amla", "Bibhitaki", "Haritaki"],
    howToUse:
      "Take 1 leveled teaspoon of Triphala powder with lukewarm water exactly 30 minutes before bed.",
    popupKeywords: ["Digestion", "Detox", "Gut Health"],
    sources: ["Ashtanga Hridayam"],
  },
  {
    id: 4,
    title: "Brahmi for Cognitive Optimization",
    desc: "Enhance focus, memory retention, and mental clarity using the neuro-protective herb Brahmi.",
    fullContent:
      "Brahmi (Bacopa monnieri) is heavily revered for its neuro-protective properties. It enhances dendritic intersection and branching within the brain, leading to better signal transmission. This makes it highly effective for cognitive retention, countering ADHD-like symptoms, and shielding the brain against age-related neurodegenerative decline.",
    ingredients: ["Brahmi Leaves", "Warm Water or Ghee"],
    howToUse:
      "Consume 300-500mg daily. Since Brahmi is fat-soluble, it is best absorbed when mixed with a small amount of warm ghee.",
    popupKeywords: ["Brain", "Focus", "Memory"],
    sources: ["Bhavaprakasha Nighantu"],
  },
  {
    id: 5,
    title: "Turmeric and the Power of Curcumin",
    desc: "Unlocking the anti-inflammatory properties of Turmeric through proper preparation.",
    fullContent:
      "Turmeric is widely known, but its active compound (Curcumin) is poorly absorbed by the human body naturally. In Ayurveda, Turmeric is always administered with black pepper (Piperine) or healthy fats. This increases the bioavailability of Curcumin by over 2000%, transforming it from a simple kitchen spice into a profound clinical anti-inflammatory and immunomodulator.",
    ingredients: ["Haldi (Turmeric)", "Black Pepper", "Coconut Oil/Ghee"],
    howToUse:
      "Boil 1/2 tsp of Turmeric with a pinch of black pepper in milk or water. Add a teaspoon of fat to activate the compounds.",
    popupKeywords: ["Immunity", "Inflammation", "Pain"],
    sources: ["Ayurvedic Pharmacopoeia of India"],
  },
  {
    id: 6,
    title: "Shatavari for Hormonal Balance",
    desc: "The premier physical adaptogen for supporting the female reproductive system.",
    fullContent:
      "Shatavari (Asparagus racemosus) means 'she who possesses a hundred husbands.' It is the most potent Ayurvedic herb for female hormonal health, supporting everything from menstrual regulation and fertility to menopause transition. It contains steroidal saponins that naturally regulate estrogen production without synthetic disruption.",
    ingredients: ["Shatavari Root Extract", "Milk"],
    howToUse:
      "Boil 1 teaspoon of Shatavari powder in a cup of milk. Drink once daily, preferably in the morning.",
    popupKeywords: ["Hormones", "Women", "PCOS"],
    sources: ["Charaka Samhita, Chikitsa Sthana"],
  },
  {
    id: 7,
    title: "Tulsi: The Respiratory Shield",
    desc: "Clearing lung capacity and fighting seasonal respiratory distress with Holy Basil.",
    fullContent:
      "Tulsi (Holy Basil) directly targets the respiratory tract, operating as an expectorant to clear lung congestion and acting as a mild anti-microbial. It heats the body slightly, pacifying Kapha and Vata imbalances while dramatically lowering histamine spikes during allergy seasons.",
    ingredients: ["Fresh Tulsi Leaves", "Ginger (optional)", "Honey"],
    howToUse:
      "Boil 5-6 fresh leaves in water for 5 minutes. Let it cool slightly, then add a spoon of honey (never heat honey).",
    popupKeywords: ["Respiratory", "Cough", "Immunity"],
    sources: ["Dravyaguna Vijnana"],
  },
  {
    id: 8,
    title: "Giloy for Chronic Fever",
    desc: "The 'Amrita' (root of immortality) used clinically for breaking chronic cyclic fevers.",
    fullContent:
      "Giloy (Tinospora cordifolia) is universally recognized in Ayurvedic pharmacology for its antipyretic (fever-reducing) properties. Unlike paracetamol, Giloy doesn't just suppress the fever—it drastically elevates the macrophage count, enabling the immune system to physically combat the underlying pathogen causing the cyclic fever.",
    ingredients: ["Giloy Stem", "Water"],
    howToUse:
      "Crush a 2-inch fresh Giloy stem and soak it in water overnight. Mash and strain the water in the morning and drink it on an empty stomach.",
    popupKeywords: ["Immunity", "Fever", "Detox"],
    sources: ["Sushruta Samhita"],
  },
  {
    id: 9,
    title: "Managing Joint Pain with Shallaki",
    desc: "A clinical look at Boswellia serrata for arthritis and joint mobility.",
    fullContent:
      "Shallaki (Boswellia serrata) provides deep relief for osteoarthritis and rheumatoid arthritis. The gum resin prevents the synthesis of pro-inflammatory enzymes. It has been shown in trials to significantly improve knee joint mobility and reduce pain scale ratings without the harsh gastric side effects of conventional NSAIDs.",
    ingredients: ["Shallaki Resin Extract"],
    howToUse:
      "Take 250-500mg in capsule format twice daily after meals. Do not take on an empty stomach.",
    popupKeywords: ["Pain", "Joints", "Inflammation"],
    sources: ["Journal of Clinical Ayurveda"],
  },
  {
    id: 10,
    title: "Shilajit: Core Cellular Energy",
    desc: "Extracting pure cellular vitality using raw Himalayan Shilajit resin.",
    fullContent:
      "Shilajit is a thick, sticky resin sourced from the Himalayas. It is packed directly with Fulvic Acid, which physically transports nutrients deep into the cellular mitochondria. It acts as an incredible physical stamina booster and testosterone regulator. Pure resin is highly superior to powdered pill variants.",
    ingredients: ["Purified Shilajit Resin", "Warm Water/Milk"],
    howToUse:
      "Dissolve a pea-sized amount of raw resin into a warm cup of water or milk. Drink early morning before breakfast.",
    popupKeywords: ["Energy", "Vitality", "Men"],
    sources: ["Astanga Sangraha"],
  },
  {
    id: 11,
    title: "Bhringraj for Scalp Microcirculation",
    desc: "Reversing premature graying and stopping hair shedding at the root.",
    fullContent:
      "Bhringraj (Eclipta alba) actively stimulates blood microcirculation when applied topically to the scalp. It rejuvenates the hair follicles, prolonging the anagen (growth) phase of hair, effectively halting premature shedding and promoting robust density. The liver-cooling properties also work internally to prevent premature graying.",
    ingredients: ["Bhringraj Leaves", "Pure Coconut/Sesame Base Oil"],
    howToUse:
      "Massage warmly infused Bhringraj oil into the scalp twice a week. Leave it in overnight before washing.",
    popupKeywords: ["Hair", "Skin", "Cooling"],
    sources: ["Bhavaprakasha"],
  },
];

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeKeyword, setActiveKeyword] = useState(null);
  const [activeBlog, setActiveBlog] = useState(null);

  const filteredBlogs = BLOG_DATA.map((blog) => {
    let score = 0;
    const q = searchQuery.toLowerCase().trim();

    if (q) {
      const titleLower = blog.title.toLowerCase();
      const contentLower = blog.fullContent.toLowerCase();
      const keywordsLower = blog.popupKeywords.map((k) => k.toLowerCase());

      if (titleLower === q) score += 100;
      else if (titleLower.includes(q)) score += 50;

      if (contentLower.includes(q)) score += 20;

      if (keywordsLower.includes(q)) score += 30;
      else if (keywordsLower.some((kw) => kw.includes(q))) score += 10;

      if (score === 0) return null;
    }

    const matchesKeyword = activeKeyword
      ? blog.popupKeywords.includes(activeKeyword)
      : true;
    if (!matchesKeyword) return null;

    return { ...blog, score };
  })
    .filter((b) => b !== null)
    .sort((a, b) => b.score - a.score);

  return (
    <div className="container" style={{ paddingBottom: "80px" }}>
      <div className="page-header" style={{ marginBottom: "32px" }}>
        <h1 className="page-title">Ayurvedic Clinical Knowledge</h1>
        <p className="page-subtitle">
          Explore evidence-based Ayurvedic formulations, herbal mechanics, and
          robust holistic protocols.
        </p>
      </div>

      {/* SEARCH SYSTEM */}
      <div className="filter-bar" style={{ marginBottom: "40px" }}>
        <div
          className="filter-input-wrap"
          style={{ flex: 1, position: "relative" }}
        >
          <svg
            width="18"
            height="18"
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
            className="filter-input"
            placeholder="Search by title, condition, or herb..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery.length > 2 && filteredBlogs.length > 0 && (
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
              {filteredBlogs.slice(0, 5).map((b) => (
                <div
                  key={b.id}
                  onClick={() => {
                    setActiveBlog(b);
                    setSearchQuery("");
                  }}
                  style={{
                    padding: "12px",
                    cursor: "pointer",
                    borderRadius: "8px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--surface-2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <h4 style={{ margin: 0, fontSize: "14px", color: "#111" }}>
                    {b.title}
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
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        {activeKeyword && (
          <button
            onClick={() => setActiveKeyword(null)}
            style={{
              background: "var(--primary)",
              color: "white",
              padding: "10px 16px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            Filter: {activeKeyword}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>

      {/* BLOG GRID */}
      {filteredBlogs.length > 0 ? (
        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="card-generic"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginBottom: "16px",
                }}
              >
                {blog.popupKeywords.map((kw) => (
                  <span
                    onClick={() => setActiveKeyword(kw)}
                    key={kw}
                    style={{
                      background: "var(--surface-2)",
                      color: "var(--primary)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <h2
                style={{
                  fontSize: "18px",
                  color: "#111",
                  margin: "0 0 12px",
                  lineHeight: 1.4,
                }}
              >
                {blog.title}
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--muted)",
                  margin: "0 0 24px",
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {blog.desc}
              </p>

              <button
                onClick={() => setActiveBlog(blog)}
                className="btn-product secondary"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  fontSize: "13px",
                }}
              >
                Read Protocol →
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="card-generic"
          style={{ padding: "60px 20px", textAlign: "center" }}
        >
          <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#111" }}>
            No clinical records found
          </h3>
          <p
            style={{
              margin: "0 0 24px",
              color: "var(--muted)",
              fontSize: "14px",
            }}
          >
            No documents match "{searchQuery}". Try modifying your search
            criteria.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="btn-product primary"
            style={{
              padding: "10px 24px",
              fontSize: "14px",
              borderRadius: "8px",
            }}
          >
            Clear Search
          </button>
        </div>
      )}

      {/* ISOLATED BLOG DETAIL MODAL */}
      <AnimatePresence>
        {activeBlog && (
          <motion.div
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
              zIndex: 1000,
              overflowY: "auto",
              padding: "40px 20px",
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveBlog(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              style={{
                background: "white",
                maxWidth: "800px",
                margin: "0 auto",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <button
                onClick={() => setActiveBlog(null)}
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  background: "var(--surface-2)",
                  border: "none",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div
                style={{
                  padding: "40px",
                  background: "rgba(45,66,15,0.03)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginBottom: "20px",
                  }}
                >
                  {activeBlog.popupKeywords.map((kw) => (
                    <span
                      key={kw}
                      style={{
                        background: "white",
                        border: "1px solid var(--border)",
                        color: "var(--primary)",
                        padding: "4px 12px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 700,
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <h1
                  style={{
                    fontSize: "32px",
                    color: "var(--primary)",
                    margin: "0 0 16px",
                    lineHeight: 1.2,
                  }}
                >
                  {activeBlog.title}
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--muted)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {activeBlog.desc}
                </p>
              </div>

              <div style={{ padding: "40px" }}>
                <h3
                  style={{
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--muted)",
                    marginBottom: "16px",
                  }}
                >
                  Clinical Documentation
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#111",
                    lineHeight: 1.8,
                    marginBottom: "40px",
                  }}
                >
                  {activeBlog.fullContent}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "24px",
                    marginBottom: "40px",
                  }}
                >
                  <div
                    style={{
                      background: "var(--bg)",
                      padding: "24px",
                      borderRadius: "12px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "14px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--primary)",
                        marginBottom: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>{" "}
                      Active Ingredients
                    </h3>
                    <ul
                      style={{
                        paddingLeft: "20px",
                        margin: 0,
                        color: "var(--text)",
                        fontSize: "14px",
                        lineHeight: 1.6,
                      }}
                    >
                      {activeBlog.ingredients.map((ing) => (
                        <li key={ing}>{ing}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    style={{
                      background: "var(--bg)",
                      padding: "24px",
                      borderRadius: "12px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "14px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--primary)",
                        marginBottom: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>{" "}
                      How to Administer
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text)",
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {activeBlog.howToUse}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px dashed var(--border)",
                    paddingTop: "24px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--muted)",
                      marginRight: "12px",
                    }}
                  >
                    Verified Sources:
                  </span>
                  {activeBlog.sources.map((src, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "12px",
                        color: "var(--primary)",
                        fontWeight: 600,
                        marginRight: "12px",
                      }}
                    >
                      {src}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
