import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const DOCTOR_DB = {
  "ananya-sharma": {
    name: "Dr. Ananya Sharma",
    qual: "BAMS, MD (Ayurveda)",
    spec: "Ayurvedic General Wellness",
    exp: 12,
    fee: 499,
    achievements: [
      "Gold Medalist, AIIMS",
      "10,000+ Consultations",
      "Featured in Ayush Wellness 2024",
    ],
    expertise: [
      "Preventive Cardiology",
      "Lifestyle Correction",
      "Stress Management",
      "Holistic Diets",
    ],
    about:
      "Dr. Ananya Sharma is a highly experienced Ayurvedic practitioner specializing in preventive cardiology and lifestyle management. With over a decade of clinical experience, she seamlessly blends traditional Ayurvedic diagnostics (Nadi Pariksha) with modern nutritional science to create sustainable, long-term healing protocols for her patients.",
  },
};

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doc = DOCTOR_DB[id] || DOCTOR_DB["ananya-sharma"];

  // Booking Flow States
  const [selectedDate, setSelectedDate] = useState("Today, 3 Jan");
  const [selectedSlot, setSelectedSlot] = useState("10:30 AM");
  const [isVideo, setIsVideo] = useState(true);

  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [uploadedDocs, setUploadedDocs] = useState([]);

  const handleDocUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedDocs((prev) => [...prev, ...files.map(f => f.name)]);
  };

  const handleBooking = () => {
    setIsBooking(true);
    // Simulate API call and loading skeleton state
    setTimeout(() => {
      setBookingId("SATTVA-" + Math.floor(100000 + Math.random() * 900000));
      setIsBooking(false);
      setIsBooked(true);
    }, 1500);
  };

  return (
    <div className="container" style={{ paddingBottom: "80px" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "none",
          border: "none",
          color: "var(--primary)",
          fontWeight: 600,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "24px",
          fontSize: "14px",
        }}
      >
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
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Doctors
      </button>

      <div className="two-col-layout">
        {/* LEFT COLUMN: Profile Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div className="card-generic" style={{ padding: "40px" }}>
            <div
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "center",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "var(--surface-2)",
                  color: "var(--primary)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                {doc.name.split(" ")[1][0]}
                {doc.name.split(" ")[2] ? doc.name.split(" ")[2][0] : ""}
              </div>
              <div>
                <h1
                  style={{
                    margin: "0 0 8px",
                    fontSize: "28px",
                    color: "var(--primary)",
                  }}
                >
                  {doc.name}
                </h1>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: "15px",
                    color: "var(--text)",
                    fontWeight: 500,
                  }}
                >
                  {doc.qual}
                </p>
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(45, 66, 15, 0.08)",
                    color: "var(--primary)",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {doc.spec} • {doc.exp} Years Experience
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: "16px", color: "#111", margin: "0 0 16px" }}>
              Area of Expertise
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              {doc.expertise.map((exp, i) => (
                <span
                  key={i}
                  style={{
                    border: "1px solid var(--border)",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    color: "var(--muted)",
                  }}
                >
                  {exp}
                </span>
              ))}
            </div>

            <h3 style={{ fontSize: "16px", color: "#111", margin: "0 0 16px" }}>
              Achievements
            </h3>
            <ul
              style={{
                paddingLeft: "20px",
                color: "var(--muted)",
                fontSize: "14px",
                lineHeight: "1.8",
                margin: "0 0 32px",
              }}
            >
              {doc.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>

            <h3 style={{ fontSize: "16px", color: "#111", margin: "0 0 16px" }}>
              About
            </h3>
            <p
              style={{
                margin: 0,
                color: "var(--muted)",
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              {doc.about}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Panel */}
        <div className="sticky-panel">
          <AnimatePresence mode="wait">
            {isBooking && !isBooked && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div
                  className="skeleton-box"
                  style={{
                    height: "450px",
                    width: "100%",
                    borderRadius: "12px",
                  }}
                ></div>
              </motion.div>
            )}

            {!isBooking && !isBooked && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="card-generic"
                style={{ padding: "32px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "24px",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "18px", color: "#111" }}>
                    Book Consultation
                  </h3>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "var(--primary)",
                    }}
                  >
                    ₹{doc.fee}
                  </span>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      margin: "0 0 12px",
                      color: "var(--muted)",
                    }}
                  >
                    Select Date
                  </label>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "8px",
                    }}
                  >
                    {["Today, 3 Jan", "Tom, 4 Jan", "Mon, 5 Jan"].map(
                      (date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          style={{
                            padding: "10px",
                            background:
                              selectedDate === date
                                ? "var(--primary)"
                                : "white",
                            color:
                              selectedDate === date ? "white" : "var(--text)",
                            border: `1px solid ${selectedDate === date ? "var(--primary)" : "var(--border)"}`,
                            borderRadius: "8px",
                            fontSize: "12px",
                            fontWeight: 500,
                            cursor: "pointer",
                            transition: "0.2s",
                          }}
                        >
                          {date}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      margin: "0 0 12px",
                      color: "var(--muted)",
                    }}
                  >
                    Available Time Slots
                  </label>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "8px",
                    }}
                  >
                    {[
                      "10:00 AM",
                      "10:30 AM",
                      "11:00 AM",
                      "2:00 PM",
                      "3:30 PM",
                      "5:00 PM",
                    ].map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedSlot(time)}
                        style={{
                          padding: "8px",
                          background:
                            selectedSlot === time
                              ? "rgba(45,66,15,0.08)"
                              : "white",
                          color:
                            selectedSlot === time
                              ? "var(--primary)"
                              : "var(--text)",
                          border: `1px solid ${selectedSlot === time ? "var(--primary)" : "var(--border)"}`,
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "0.2s",
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      margin: "0 0 12px",
                      color: "var(--muted)",
                    }}
                  >
                    Consultation Type
                  </label>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      background: "var(--surface-2)",
                      padding: "4px",
                      borderRadius: "8px",
                    }}
                  >
                    <button
                      onClick={() => setIsVideo(true)}
                      style={{
                        flex: 1,
                        padding: "8px",
                        background: isVideo ? "white" : "transparent",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: isVideo ? "var(--primary)" : "var(--muted)",
                        boxShadow: isVideo ? "var(--shadow-sm)" : "none",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        transition: "0.2s",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect
                          x="1"
                          y="5"
                          width="15"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                      </svg>
                      Video
                    </button>
                    <button
                      onClick={() => setIsVideo(false)}
                      style={{
                        flex: 1,
                        padding: "8px",
                        background: !isVideo ? "white" : "transparent",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: !isVideo ? "var(--primary)" : "var(--muted)",
                        boxShadow: !isVideo ? "var(--shadow-sm)" : "none",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        transition: "0.2s",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Audio
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="btn-product primary"
                  style={{
                    width: "100%",
                    padding: "14px",
                    fontSize: "14px",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Confirm Booking & Pay</span>
                  <span>→</span>
                </button>
              </motion.div>
            )}

            {!isBooking && isBooked && (
              <motion.div
                key="ticket"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ticket-wrapper"
              >
                <div className="ticket-header">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "#27ae60",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 auto 16px",
                      boxShadow: "0 8px 24px rgba(39, 201, 63, 0.3)",
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </motion.div>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontSize: "20px",
                      color: "#111",
                    }}
                  >
                    Booking Confirmed
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--muted)",
                      fontSize: "14px",
                    }}
                  >
                    Your consultation is actively scheduled.
                  </p>
                </div>

                <div className="ticket-body">
                  <div className="ticket-detail-row">
                    <span className="ticket-label">Order ID</span>
                    <span
                      className="ticket-value"
                      style={{ color: "var(--primary)" }}
                    >
                      {bookingId}
                    </span>
                  </div>
                  <div className="ticket-detail-row">
                    <span className="ticket-label">Doctor</span>
                    <span className="ticket-value">{doc.name}</span>
                  </div>
                  <div className="ticket-detail-row">
                    <span className="ticket-label">Scheduled For</span>
                    <span className="ticket-value">
                      {selectedDate} at {selectedSlot}
                    </span>
                  </div>
                  <div className="ticket-detail-row">
                    <span className="ticket-label">Mode</span>
                    <span className="ticket-value">
                      {isVideo ? "Video Call" : "Audio Call"}
                    </span>
                  </div>

                  <div style={{ marginTop: "32px" }}>
                    <h4
                      style={{
                        margin: "0 0 12px",
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--text)",
                      }}
                    >
                      Next Steps
                    </h4>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        marginBottom: "24px",
                      }}
                    >
                      <input 
                        type="file" 
                        multiple 
                        id="doc-upload" 
                        onChange={handleDocUpload}
                        style={{ display: "none" }} 
                      />
                      <label 
                        htmlFor="doc-upload"
                        style={{
                          width: "100%",
                          padding: "20px",
                          border: "1px dashed var(--border)",
                          borderRadius: "12px",
                          background: "var(--surface-2)",
                          color: "var(--primary)",
                          fontSize: "14px",
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "8px",
                          transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.background = "rgba(45,66,15,0.02)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--surface-2)"; }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                        Upload Prescription / Lab Reports
                      </label>
                      
                      {uploadedDocs.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                          {uploadedDocs.map((docName, i) => (
                            <div key={i} style={{ fontSize: "12px", background: "white", border: "1px solid var(--border)", padding: "6px 12px", borderRadius: "16px", color: "var(--muted)", display: "flex", alignItems: "center", gap: "6px" }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                              {docName}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      style={{
                        width: "100%",
                        padding: "14px",
                        background: "var(--surface-2)",
                        color: "var(--muted)",
                        border: "1px dashed var(--border)",
                        borderRadius: "8px",
                        cursor: "not-allowed",
                        fontWeight: 600,
                        fontSize: "13px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span>
                        Join {isVideo ? "Video" : "Audio"} Consultation
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: 500 }}>
                        Enabled 5 minutes before scheduled slot
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
