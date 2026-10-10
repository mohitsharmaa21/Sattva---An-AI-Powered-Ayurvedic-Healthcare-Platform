import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const DEFAULT_PATIENT_NOTIFICATIONS = [
  {
    id: "notif-1",
    category: "consultation",
    badgeEn: "Appointment",
    badgeHi: "परामर्श",
    icon: "🩺",
    color: "#286047",
    bg: "rgba(40, 96, 71, 0.12)",
    titleEn: "Consultation Confirmed: Dr. Priya Sharma",
    titleHi: "परामर्श स्वीकृत: डॉ. प्रिया शर्मा",
    descEn: "Your Ayurvedic tele-consultation is scheduled for tomorrow at 10:30 AM IST. Pre-intake clinical summary is synced.",
    descHi: "आपका आयुर्वेदिक परामर्श कल सुबह 10:30 बजे IST के लिए निर्धारित है। प्री-इंटेक सारांश डॉक्टर के साथ साझा किया गया है।",
    timeEn: "15m ago",
    timeHi: "15 मिनट पहले",
    link: "/consultation",
    actionLabelEn: "View Booking",
    actionLabelHi: "बुकिंग देखें",
    read: false,
  },
  {
    id: "notif-2",
    category: "ml_check",
    badgeEn: "ML Assessment",
    badgeHi: "एमएल स्वास्थ्य जांच",
    icon: "📊",
    color: "#1d4ed8",
    bg: "rgba(29, 78, 216, 0.12)",
    titleEn: "Health Condition Check Ready",
    titleHi: "स्वास्थ्य स्थिति मूल्यांकन तैयार",
    descEn: "Your XGBoost lifestyle model classified your profile as 'Fit' (88% confidence). Keep up the 8,500 daily step streak!",
    descHi: "आपके नवीनतम XGBoost मॉडल ने 'Fit' स्थिति (88% सटीकता) आंकी है। 8,500 दैनिक कदमों का लक्ष्य जारी रखें!",
    timeEn: "2h ago",
    timeHi: "2 घंटे पहले",
    link: "/health-condition",
    actionLabelEn: "Review Results",
    actionLabelHi: "परिणाम देखें",
    read: false,
  },
  {
    id: "notif-3",
    category: "ayurveda",
    badgeEn: "Dinacharya",
    badgeHi: "दिनचर्या",
    icon: "🌿",
    color: "#b45309",
    bg: "rgba(180, 83, 9, 0.12)",
    titleEn: "Evening Dinacharya Regimen",
    titleHi: "सायंकालीन दिनचर्या अनुस्मारक",
    descEn: "Time for your evening Triphala Rasayana in lukewarm water (45 mins before bedtime) for gentle digestive equilibrium.",
    descHi: "पाचन संतुलन के लिए सोने से 45 मिनट पहले गुनगुने पानी के साथ त्रिफला रसायन का समय हो गया है।",
    timeEn: "5h ago",
    timeHi: "5 घंटे पहले",
    link: "/ayurveda",
    actionLabelEn: "Explore Remedies",
    actionLabelHi: "उपचार देखें",
    read: false,
  },
  {
    id: "notif-4",
    category: "report",
    badgeEn: "Lab Scanner",
    badgeHi: "लैब रिपोर्ट",
    icon: "📋",
    color: "#7c3aed",
    bg: "rgba(124, 58, 237, 0.12)",
    titleEn: "Lab Report OCR Synced",
    titleHi: "लैब रिपोर्ट ओसीआर पूर्ण",
    descEn: "Lipid Profile & CBC values parsed from report upload. All vitals normalized into your chronological health timeline.",
    descHi: "अपलोड की गई लिपिड प्रोफाइल और सीबीसी रिपोर्ट प्रोसेस हो गई है। सभी मान आपकी टाइमलाइन में दर्ज हैं।",
    timeEn: "Yesterday",
    timeHi: "कल",
    link: "/history",
    actionLabelEn: "Open Timeline",
    actionLabelHi: "टाइमलाइन खोलें",
    read: true,
  },
  {
    id: "notif-5",
    category: "score",
    badgeEn: "Vitality Index",
    badgeHi: "स्वास्थ्य सूचकांक",
    icon: "🛡️",
    color: "#059669",
    bg: "rgba(5, 150, 105, 0.12)",
    titleEn: "Weekly Vitality Score: 86 / 100",
    titleHi: "साप्ताहिक वाइटैलिटी स्कोर: 86 / 100",
    descEn: "Your score improved by +4 points this week thanks to consistent 7.5h sleep cycles and balanced activity levels.",
    descHi: "7.5 घंटे की निरंतर नींद और संतुलित दिनचर्या के कारण इस सप्ताह आपके स्कोर में +4 अंकों की वृद्धि हुई।",
    timeEn: "2 days ago",
    timeHi: "2 दिन पहले",
    link: "/insurance",
    actionLabelEn: "View Score",
    actionLabelHi: "स्कोर देखें",
    read: true,
  },
];

const DEFAULT_DOCTOR_NOTIFICATIONS = [
  {
    id: "notif-doc-1",
    category: "intake",
    badgeEn: "Patient Triage",
    badgeHi: "मरीज ट्राइएज",
    icon: "🩺",
    color: "#286047",
    bg: "rgba(40, 96, 71, 0.12)",
    titleEn: "New Pre-Intake Dossier: Rahul Varma",
    titleHi: "नया मरीज प्री-इंटेक: राहुल वर्मा",
    descEn: "Patient submitted structured symptom intake and latest CBC report for tomorrow's 10:30 AM slot.",
    descHi: "मरीज ने कल सुबह 10:30 बजे के स्लॉट के लिए लक्षण इतिहास और नवीनतम सीबीसी रिपोर्ट जमा की है।",
    timeEn: "10m ago",
    timeHi: "10 मिनट पहले",
    link: "/doctor-dashboard",
    actionLabelEn: "Review Dossier",
    actionLabelHi: "डोज़ियर देखें",
    read: false,
  },
  {
    id: "notif-doc-2",
    category: "lab",
    badgeEn: "OCR Review",
    badgeHi: "ओसीआर समीक्षा",
    icon: "📋",
    color: "#7c3aed",
    bg: "rgba(124, 58, 237, 0.12)",
    titleEn: "Clinical OCR Extraction: Patient #STV-208",
    titleHi: "क्लीनिकल ओसीआर परिणाम: मरीज #STV-208",
    descEn: "Automated OCR extracted elevated Pitta markers and mildly elevated ALT/AST values for clinical review.",
    descHi: "स्वचालित ओसीआर ने क्लीनिकल समीक्षा के लिए बढ़े हुए पित्त लक्षण और एएलटी मान निकाले हैं।",
    timeEn: "1h ago",
    timeHi: "1 घंटा पहले",
    link: "/doctor-dashboard",
    actionLabelEn: "Open Workspace",
    actionLabelHi: "वर्कस्पेस खोलें",
    read: false,
  },
];

export default function NotificationCenter({ doctorMode = false }) {
  const { language } = useLanguage();
  const isHi = language === "hi";
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("all"); // "all" | "unread"
  const panelRef = useRef(null);

  const storageKey = doctorMode ? "sattva_notifs_doctor" : "sattva_notifs_patient";
  const defaultList = doctorMode ? DEFAULT_DOCTOR_NOTIFICATIONS : DEFAULT_PATIENT_NOTIFICATIONS;

  const [notifications, setNotifications] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to defaults
    }
    return defaultList;
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(notifications));
    } catch {
      // ignore storage error
    }
  }, [notifications, storageKey]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const handleRestoreDefaults = () => {
    setNotifications(defaultList);
  };

  const handleItemClick = (notif) => {
    // Mark as read
    setNotifications((prev) =>
      prev.map((n) => (n.id === notif.id ? { ...n, read: true } : n))
    );
    setIsOpen(false);
    if (notif.link) {
      navigate(notif.link);
    }
  };

  const handleDismissItem = (e, id) => {
    e.stopPropagation();
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const displayedNotifications = notifications.filter((n) => {
    if (filter === "unread") return !n.read;
    return true;
  });

  return (
    <div
      ref={panelRef}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {/* Bell Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="icon-button"
        aria-label={isHi ? "सूचनाएं" : "Notifications"}
        aria-expanded={isOpen}
        title={isHi ? "सूचनाएं" : "Notifications"}
        style={{
          position: "relative",
          cursor: "pointer",
          border: "none",
          outline: "none",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
        </svg>

        {/* Unread Badge Counter */}
        {unreadCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "2px",
              right: "2px",
              minWidth: "16px",
              height: "16px",
              padding: "0 4px",
              borderRadius: "8px",
              background: "#e63946",
              color: "#ffffff",
              fontSize: "10px",
              fontWeight: 800,
              lineHeight: "16px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 0 2px var(--surface, #ffffff)",
              pointerEvents: "none",
            }}
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Notifications Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: "-10px",
              width: "380px",
              maxWidth: "calc(100vw - 28px)",
              background: "var(--surface, #ffffff)",
              border: "1px solid var(--border, #e2e8e4)",
              borderRadius: "16px",
              boxShadow: "0 14px 40px rgba(0, 0, 0, 0.16)",
              zIndex: 1200,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Panel Header */}
            <div
              style={{
                padding: "16px 20px 12px",
                borderBottom: "1px solid var(--border, #e2e8e4)",
                background: "var(--surface-2, #f8faf8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    fontWeight: 750,
                    color: "var(--ink, #17241e)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {isHi ? "सूचनाएं" : "Notifications"}
                </h3>
                {unreadCount > 0 && (
                  <span
                    style={{
                      background: "rgba(40, 96, 71, 0.12)",
                      color: "var(--primary, #286047)",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "2px 7px",
                      borderRadius: "10px",
                    }}
                  >
                    {unreadCount} {isHi ? "नई" : "new"}
                  </span>
                )}
              </div>

              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={handleMarkAllAsRead}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--primary, #286047)",
                    fontSize: "12px",
                    fontWeight: 650,
                    cursor: "pointer",
                    padding: "4px 6px",
                    borderRadius: "6px",
                    textDecoration: "underline",
                  }}
                >
                  {isHi ? "सभी पढ़ी चिह्नित करें" : "Mark all as read"}
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            {notifications.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  padding: "8px 18px",
                  borderBottom: "1px solid var(--border, #e2e8e4)",
                  background: "var(--surface, #ffffff)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setFilter("all")}
                  style={{
                    background: filter === "all" ? "var(--surface-2, #f0f4f1)" : "transparent",
                    border: "none",
                    borderRadius: "8px",
                    padding: "5px 10px",
                    fontSize: "12px",
                    fontWeight: filter === "all" ? 750 : 600,
                    color: filter === "all" ? "var(--primary, #286047)" : "var(--muted, #64756c)",
                    cursor: "pointer",
                  }}
                >
                  {isHi ? "सभी" : "All"} ({notifications.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter("unread")}
                  style={{
                    background: filter === "unread" ? "var(--surface-2, #f0f4f1)" : "transparent",
                    border: "none",
                    borderRadius: "8px",
                    padding: "5px 10px",
                    fontSize: "12px",
                    fontWeight: filter === "unread" ? 750 : 600,
                    color: filter === "unread" ? "var(--primary, #286047)" : "var(--muted, #64756c)",
                    cursor: "pointer",
                  }}
                >
                  {isHi ? "अपठित" : "Unread"} ({unreadCount})
                </button>
              </div>
            )}

            {/* Notification Items List */}
            <div
              style={{
                maxHeight: "360px",
                overflowY: "auto",
                overscrollBehavior: "contain",
              }}
            >
              {displayedNotifications.length === 0 ? (
                <div
                  style={{
                    padding: "36px 24px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(40, 96, 71, 0.1)",
                      color: "var(--primary, #286047)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                    }}
                  >
                    ✓
                  </div>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: "14.5px",
                      fontWeight: 700,
                      color: "var(--ink, #17241e)",
                    }}
                  >
                    {isHi ? "कोई नई सूचना नहीं है" : "You're all caught up!"}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12.5px",
                      color: "var(--muted, #64756c)",
                      lineHeight: 1.5,
                      maxWidth: "260px",
                    }}
                  >
                    {isHi
                      ? "आपके परामर्श और स्वास्थ्य अनुस्मारक अद्यतित हैं।"
                      : "No active alerts. We will notify you when new appointments or ML updates arrive."}
                  </p>
                  <button
                    type="button"
                    onClick={handleRestoreDefaults}
                    style={{
                      marginTop: "6px",
                      background: "var(--surface-2, #f0f4f1)",
                      border: "1px solid var(--border, #e2e8e4)",
                      padding: "6px 14px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: 650,
                      color: "var(--primary, #286047)",
                      cursor: "pointer",
                    }}
                  >
                    {isHi ? "नमूना सूचनाएं पुनः लोड करें" : "Restore Demo Alerts"}
                  </button>
                </div>
              ) : (
                displayedNotifications.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => handleItemClick(n)}
                    style={{
                      padding: "14px 18px",
                      borderBottom: "1px solid var(--border, #e2e8e4)",
                      background: n.read
                        ? "transparent"
                        : "var(--surface-2, rgba(40, 96, 71, 0.04))",
                      cursor: "pointer",
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      position: "relative",
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "var(--surface-2, rgba(0,0,0,0.03))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = n.read
                        ? "transparent"
                        : "var(--surface-2, rgba(40, 96, 71, 0.04))";
                    }}
                  >
                    {/* Unread Accent Bar */}
                    {!n.read && (
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: "3.5px",
                          background: "var(--primary, #286047)",
                          borderRadius: "0 3px 3px 0",
                        }}
                      />
                    )}

                    {/* Icon Avatar */}
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        minWidth: "36px",
                        borderRadius: "10px",
                        background: n.bg || "rgba(40, 96, 71, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                      }}
                    >
                      {n.icon}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "8px",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "10.5px",
                            fontWeight: 700,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            color: n.color || "var(--primary, #286047)",
                          }}
                        >
                          {isHi ? n.badgeHi : n.badgeEn}
                        </span>
                        <span
                          style={{
                            fontSize: "11px",
                            color: "var(--muted, #64756c)",
                          }}
                        >
                          {isHi ? n.timeHi : n.timeEn}
                        </span>
                      </div>

                      <h4
                        style={{
                          margin: "0 0 4px",
                          fontSize: "13.5px",
                          fontWeight: n.read ? 600 : 750,
                          color: "var(--ink, #17241e)",
                          lineHeight: 1.35,
                        }}
                      >
                        {isHi ? n.titleHi : n.titleEn}
                      </h4>

                      <p
                        style={{
                          margin: "0 0 6px",
                          fontSize: "12px",
                          color: "var(--text, #333)",
                          lineHeight: 1.45,
                        }}
                      >
                        {isHi ? n.descHi : n.descEn}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "6px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11.5px",
                            fontWeight: 700,
                            color: "var(--primary, #286047)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "3px",
                          }}
                        >
                          {isHi ? n.actionLabelHi : n.actionLabelEn} &rarr;
                        </span>

                        {/* Individual Dismiss Button */}
                        <button
                          type="button"
                          onClick={(e) => handleDismissItem(e, n.id)}
                          aria-label={isHi ? "हटाएं" : "Dismiss"}
                          title={isHi ? "हटाएं" : "Dismiss"}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "var(--muted, #8ea396)",
                            cursor: "pointer",
                            fontSize: "13px",
                            padding: "2px 6px",
                            borderRadius: "4px",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#e63946";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "var(--muted, #8ea396)";
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Panel Footer */}
            {notifications.length > 0 && (
              <div
                style={{
                  padding: "10px 18px",
                  borderTop: "1px solid var(--border, #e2e8e4)",
                  background: "var(--surface-2, #f8faf8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--muted, #64756c)",
                  }}
                >
                  {isHi ? "सत्व हेल्थ नेटवर्क" : "Sattva Health Vault"}
                </span>

                <button
                  type="button"
                  onClick={handleClearAll}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--muted, #64756c)",
                    fontSize: "11.5px",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: "3px 6px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#e63946";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--muted, #64756c)";
                  }}
                >
                  {isHi ? "सभी हटाएं" : "Clear all"}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
