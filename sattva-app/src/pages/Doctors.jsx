import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const DOCTORS = [
  {
    id: "ananya-sharma",
    name: "Dr. Ananya Sharma",
    qual: "BAMS, MD (Ayurveda)",
    spec: "Ayurvedic General Wellness",
    exp: 12,
    fee: 499,
    avail: "Available Today",
  },
  {
    id: "rohan-mehta",
    name: "Dr. Rohan Mehta",
    qual: "BAMS",
    spec: "Digestive & Gut Health",
    exp: 9,
    fee: 599,
    avail: "Available Tomorrow",
  },
  {
    id: "kavita-iyer",
    name: "Dr. Kavita Iyer",
    qual: "BAMS, MS (Ayurveda)",
    spec: "Women's Wellness",
    exp: 11,
    fee: 699,
    avail: "Available Today",
  },
  {
    id: "arjun-patel",
    name: "Dr. Arjun Patel",
    qual: "BAMS, PhD",
    spec: "Stress & Sleep",
    exp: 14,
    fee: 549,
    avail: "Slots Open",
  },
  {
    id: "meera-joshi",
    name: "Dr. Meera Joshi",
    qual: "BAMS",
    spec: "Skincare & Detox",
    exp: 8,
    fee: 450,
    avail: "Available Today",
  },
  {
    id: "sanjay-verma",
    name: "Dr. Sanjay Verma",
    qual: "BAMS, MS",
    spec: "Joint & Pain Management",
    exp: 20,
    fee: 750,
    avail: "Next Week",
  },
  {
    id: "priya-singh",
    name: "Dr. Priya Singh",
    qual: "BAMS",
    spec: "Hormonal Balance",
    exp: 6,
    fee: 400,
    avail: "Available Today",
  },
  {
    id: "amit-desai",
    name: "Dr. Amit Desai",
    qual: "MD (Ayurveda)",
    spec: "Cardiac Care",
    exp: 18,
    fee: 800,
    avail: "Slots Open",
  },
  {
    id: "neha-kapoor",
    name: "Dr. Neha Kapoor",
    qual: "BAMS",
    spec: "Pediatric Ayurveda",
    exp: 7,
    fee: 450,
    avail: "Available Tomorrow",
  },
  {
    id: "vikram-rao",
    name: "Dr. Vikram Rao",
    qual: "BAMS, PhD",
    spec: "Metabolic Disorders",
    exp: 15,
    fee: 600,
    avail: "Available Today",
  },
  {
    id: "shreya-nair",
    name: "Dr. Shreya Nair",
    qual: "BAMS",
    spec: "Hair & Scalp Health",
    exp: 5,
    fee: 350,
    avail: "Slots Open",
  },
  {
    id: "karan-malhotra",
    name: "Dr. Karan Malhotra",
    qual: "MS (Shalya Tantra)",
    spec: "Surgical Recovery",
    exp: 22,
    fee: 900,
    avail: "Next Week",
  },
  {
    id: "aditi-sen",
    name: "Dr. Aditi Sen",
    qual: "BAMS",
    spec: "Immunity & Fever",
    exp: 4,
    fee: 300,
    avail: "Available Today",
  },
  {
    id: "rajesh-kumar",
    name: "Dr. Rajesh Kumar",
    qual: "BAMS, MD",
    spec: "Respiratory Health",
    exp: 13,
    fee: 550,
    avail: "Available Today",
  },
  {
    id: "sneha-reddy",
    name: "Dr. Sneha Reddy",
    qual: "BAMS",
    spec: "Weight Management",
    exp: 10,
    fee: 500,
    avail: "Slots Open",
  },
  {
    id: "manish-gupta",
    name: "Dr. Manish Gupta",
    qual: "BAMS",
    spec: "Neurological Support",
    exp: 16,
    fee: 700,
    avail: "Available Tomorrow",
  },
  {
    id: "pooja-bhatia",
    name: "Dr. Pooja Bhatia",
    qual: "BAMS, Diploma",
    spec: "Panchakarma",
    exp: 9,
    fee: 650,
    avail: "Available Today",
  },
  {
    id: "sunil-dutt",
    name: "Dr. Sunil Dutt",
    qual: "BAMS",
    spec: "Geriatric Care",
    exp: 25,
    fee: 850,
    avail: "Next Week",
  },
];

export default function Doctors() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [expFilter, setExpFilter] = useState("");
  const [specFilter, setSpecFilter] = useState("");
  const [availFilter, setAvailFilter] = useState("");

  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredResults, setFilteredResults] = useState(DOCTORS);

  // Combine filters dynamically
  useEffect(() => {
    const _t = setTimeout(() => setIsFiltering(true), 0);
    const delay = setTimeout(() => {
      const results = DOCTORS.filter((doc) => {
        // 1. Search Query Match
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch =
          doc.name.toLowerCase().includes(searchLower) ||
          doc.spec.toLowerCase().includes(searchLower);

        // 2. Experience Match
        let matchesExp = true;
        if (expFilter === "0-5") matchesExp = doc.exp <= 5;
        if (expFilter === "5-10") matchesExp = doc.exp > 5 && doc.exp <= 10;
        if (expFilter === "10+") matchesExp = doc.exp > 10;

        // 3. Specialization Match
        const matchesSpec = specFilter
          ? doc.spec.toLowerCase().includes(specFilter.toLowerCase())
          : true;

        // 4. Availability Match
        const matchesAvail = availFilter
          ? doc.avail.toLowerCase().includes(availFilter.toLowerCase())
          : true;

        return matchesSearch && matchesExp && matchesSpec && matchesAvail;
      });
      setFilteredResults(results);
      setIsFiltering(false);
    }, 400); // Simulated network/processing delay for shimmer

    return () => clearTimeout(delay);
  }, [searchQuery, expFilter, specFilter, availFilter]);

  const clearFilters = () => {
    setSearchQuery("");
    setExpFilter("");
    setSpecFilter("");
    setAvailFilter("");
  };

  const hasActiveFilters =
    searchQuery || expFilter || specFilter || availFilter;

  return (
    <div className="container" style={{ paddingBottom: "80px" }}>
      <div className="page-header">
        <h1 className="page-title">
          {language === "hi" ? "आयुर्वेदिक विशेषज्ञ खोजें" : "Find an Ayurvedic Expert"}
        </h1>
        <p className="page-subtitle">
          {language === "hi"
            ? "सत्यापित परामर्श और समग्र मार्गदर्शन के लिए योग्य चिकित्सकों से संपर्क करें।"
            : "Browse highly qualified practitioners for verified consultations and holistic guidance."}
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="filter-input-wrap">
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
            placeholder={language === "hi" ? "चिकित्सक का नाम या विशेषज्ञता खोजें..." : "Search by name or specialization"}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="filter-select"
          value={expFilter}
          onChange={(e) => setExpFilter(e.target.value)}
        >
          <option value="">Experience (All)</option>
          <option value="0-5">0 - 5 Years</option>
          <option value="5-10">5 - 10 Years</option>
          <option value="10+">10+ Years</option>
        </select>
        <select
          className="filter-select"
          value={specFilter}
          onChange={(e) => setSpecFilter(e.target.value)}
        >
          <option value="">Specialization (All)</option>
          <option value="digestive">Digestive & Gut</option>
          <option value="stress">Stress & Sleep</option>
          <option value="women">Women's Wellness</option>
          <option value="skin">Skincare & Detox</option>
          <option value="cardiac">Cardiac Care</option>
          <option value="immunity">Immunity</option>
        </select>
        <select
          className="filter-select"
          value={availFilter}
          onChange={(e) => setAvailFilter(e.target.value)}
        >
          <option value="">Availability (Any)</option>
          <option value="today">Available Today</option>
          <option value="tomorrow">Available Tomorrow</option>
          <option value="slots">Slots Open</option>
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

      {/* 4 COLUMN GRID OR EMPTY STATE */}
      {isFiltering ? (
        <div className="grid-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="skeleton-box skeleton-card"
              style={{ height: "240px", marginBottom: "0" }}
            ></div>
          ))}
        </div>
      ) : filteredResults.length > 0 ? (
        <div className="grid-4">
          <AnimatePresence>
            {filteredResults.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.02, duration: 0.2 }}
                className="card-generic"
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "var(--surface-2)",
                      color: "var(--primary)",
                      display: "grid",
                      placeItems: "center",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    {doc.name.split(" ")[1][0]}
                    {doc.name.split(" ")[2] ? doc.name.split(" ")[2][0] : ""}
                  </div>
                  <div>
                    <h3
                      style={{
                        margin: "0 0 4px",
                        fontSize: "15px",
                        color: "var(--primary)",
                      }}
                    >
                      {doc.name}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        color: "var(--muted)",
                        fontWeight: 500,
                      }}
                    >
                      {doc.qual}
                    </p>
                  </div>
                </div>

                <div>
                  <p
                    style={{
                      margin: "0 0 8px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--text)",
                      minHeight: "38px",
                    }}
                  >
                    {doc.spec}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "12px",
                      color: "var(--muted)",
                    }}
                  >
                    <span>{doc.exp} yrs exp</span>
                    <span style={{ fontWeight: 600, color: "var(--primary)" }}>
                      ₹{doc.fee} / visit
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      background: doc.avail.includes("Today")
                        ? "rgba(39, 201, 63, 0.1)"
                        : "var(--surface-2)",
                      color: doc.avail.includes("Today")
                        ? "#1b8f2d"
                        : "var(--muted)",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {doc.avail}
                  </div>

                  <Link
                    to={`/doctors/${doc.id}`}
                    className="btn-product secondary"
                    style={{
                      padding: "10px",
                      width: "100%",
                      textAlign: "center",
                      fontSize: "13px",
                      border: "1px solid var(--primary)",
                      borderRadius: "8px",
                    }}
                  >
                    View Profile
                  </Link>
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
          style={{ padding: "60px 20px", textAlign: "center" }}
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
            No doctors found
          </h3>
          <p
            style={{
              margin: "0 0 24px",
              color: "var(--muted)",
              fontSize: "14px",
            }}
          >
            Try adjusting your search criteria or clear your filters to see all
            options.
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
    </div>
  );
}
