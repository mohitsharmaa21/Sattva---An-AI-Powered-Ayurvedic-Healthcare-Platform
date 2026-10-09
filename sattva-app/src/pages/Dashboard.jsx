import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { getActiveUser } from "../utils/user";
import { getISTDetails } from "../utils/istTime";
import { useLanguage } from "../context/LanguageContext";

const bars = [46, 65, 56, 78, 62, 84, 72];
function Sparkline({ color = "#2e6a4f" }) { return <svg className="sparkline" viewBox="0 0 210 52" preserveAspectRatio="none" aria-label="Weekly trend"><path d="M0 42 L30 31 L60 35 L90 14 L120 29 L150 9 L180 22 L210 12" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M0 52V42L30 31 60 35 90 14 120 29 150 9 180 22 210 12V52Z" fill={color} opacity=".08"/></svg>; }
function Metric({ label, value, detail, trend, color }) { return <article className="metric-card"><div className="metric-top"><span>{label}</span><b className="trend-up">{trend}</b></div><strong>{value}</strong><p>{detail}</p><Sparkline color={color}/></article>; }
function RiskGauge() { 
  const [expanded, setExpanded] = useState(false); 
  const { t } = useLanguage();
  return <section className="risk-card">
    <div className="section-kicker">{t("dashboard.preventiveIndicator", "PREVENTIVE INDICATOR")}</div>
    <h2>{t("dashboard.overallRisk", "Overall health risk")}</h2>
    <div className="gauge-wrap">
      <svg viewBox="0 0 220 130">
        <path d="M25 108 A88 88 0 0 1 195 108" fill="none" className="gauge-bg-arc" stroke="#ece7dc" strokeWidth="16" strokeLinecap="round"/>
        <path d="M25 108 A88 88 0 0 1 195 108" fill="none" stroke="#c79b4f" strokeWidth="16" strokeLinecap="round" strokeDasharray="276" strokeDashoffset="160"/>
        <motion.path d="M25 108 A88 88 0 0 1 195 108" fill="none" stroke="#2e6a4f" strokeWidth="16" strokeLinecap="round" strokeDasharray="276" initial={{strokeDashoffset:276}} animate={{strokeDashoffset:160}} transition={{duration:1.3}}/>
      </svg>
      <div className="gauge-score">
        <b>42%</b>
        <span>{t("dashboard.lowModerate", "LOW–MODERATE")}</span>
      </div>
    </div>
    <p>{t("dashboard.riskEstimateDesc", "Demo estimate based on reported symptoms, lifestyle and recent check-ins.")}</p>
    <button className="text-button" onClick={() => setExpanded(!expanded)}>
      {expanded ? t("dashboard.hideDetails", "Hide calculation details") : t("dashboard.howCalculated", "How this is calculated")}
    </button>
    {expanded && <div className="calculation-note">{t("dashboard.calculationNote", "This wellness indicator supports prevention conversations. It does not diagnose disease or replace professional care.")}</div>}
  </section>; 
}

export default function Dashboard() {
  const [period, setPeriod] = useState("Week");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [customLocation, setCustomLocation] = useState("");
  const [activeUser, setActiveUser] = useState(() => getActiveUser());
  const istInfo = getISTDetails();
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleUserChanged = () => {
      setActiveUser(getActiveUser());
    };
    window.addEventListener("sattva_user_changed", handleUserChanged);
    window.addEventListener("storage", handleUserChanged);
    return () => {
      window.removeEventListener("sattva_user_changed", handleUserChanged);
      window.removeEventListener("storage", handleUserChanged);
    };
  }, []);

  const getLocalizedGreeting = () => {
    if (language === "hi") {
      const h = istInfo.hour;
      if (h >= 4 && h < 12) return t("dashboard.goodMorning");
      if (h >= 12 && h < 17) return t("dashboard.goodAfternoon");
      if (h >= 17 && h < 22) return t("dashboard.goodEvening");
      return t("dashboard.goodNight");
    }
    return istInfo.greeting;
  };

  useEffect(() => {
    const storedLocation = localStorage.getItem("sattva_location");
    if (!storedLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const res = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
              );
              const data = await res.json();
              const city = data.city || data.locality || data.principalSubdivision || "Unknown";
              localStorage.setItem("sattva_location", city);
            } catch (err) {
              console.warn("Failed to reverse geocode lat/lng:", err);
              setShowLocationModal(true);
            }
          },
          (err) => {
            console.warn("User denied geolocation or query failed:", err);
            setShowLocationModal(true);
          }
        );
      } else {
        setShowLocationModal(true);
      }
    }
  }, []);

  const handleSelectLocation = (loc) => {
    localStorage.setItem("sattva_location", loc);
    setShowLocationModal(false);
  };

  const currentDateGregorian = istInfo.dateString;

  const nextConsultDate = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'short'
  }).format(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000));

  const lastAICheckDate = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'short'
  }).format(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000));

  const pastReportDate = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'short'
  }).format(new Date(Date.now() - 9 * 24 * 60 * 60 * 1000));

  return <div className="dashboard-page">
    <header className="page-heading dashboard-heading"><div><span className="eyebrow">{currentDateGregorian} · {istInfo.timeString}</span><h1>{getLocalizedGreeting()}, {activeUser}</h1><p>{language === "hi" ? `आज के लिए आपका स्वास्थ्य अवलोकन (${istInfo.doshaPeriod})` : `Here’s your health overview for today (${istInfo.doshaPeriod}).`}</p></div><div className="heading-actions"><span className="data-note">{t("dashboard.simulatedData", "Simulated wellness data")}</span><Link className="primary-button" to="/ai-check">{t("nav.aiCheck")}</Link></div></header>
    <section className="status-row"><div><span>{t("dashboard.healthStatus", "Health status")}</span><b className="status-good">{t("dashboard.onTrack", "On track")}</b></div><div><span>{t("dashboard.riskIndicator", "Risk indicator")}</span><b>42% <small>{t("dashboard.lowModerate", "Low–moderate")}</small></b></div><div><span>{t("dashboard.nextConsultation", "Next consultation")}</span><b>{nextConsultDate} <small>10:30 AM</small></b></div><div><span>{t("dashboard.lastAiCheck", "Last AI check")}</span><b>{lastAICheckDate} <small>{t("dashboard.updated", "Updated")}</small></b></div></section>
    <div className="dashboard-grid"><div className="dashboard-main"><section className="metrics-grid"><Metric label={t("dashboard.sleepMetric")} value="7h 42m" detail="86% sleep quality" trend="↑ 8%" color="#4a769c"/><Metric label={t("dashboard.activityMetric")} value="7,240" detail="54 active minutes" trend="↑ 12%" color="#2e6a4f"/><Metric label={t("dashboard.stressMetric")} value="38%" detail="Balanced today" trend="↓ 6%" color="#c28b3f"/><Metric label={t("dashboard.energyMetric")} value="82" detail="Sleep + activity aligned" trend="↑ 4%" color="#765e9b"/></section>
      <section className="activity-panel"><div className="panel-heading"><div><span className="section-kicker">{t("dashboard.movement", "MOVEMENT")}</span><h2>{t("dashboard.weeklyActivity", "Weekly activity")}</h2><p>7,240 steps today · 68% of your goal</p></div><div className="segment-control">{["Week","Month"].map(item=><button key={item} className={period===item?"selected":""} onClick={()=>setPeriod(item)}>{item}</button>)}</div></div><div className="activity-chart">{bars.map((height,index)=><div className="bar-col" key={index}><div className="activity-bar" style={{height:`${period === "Week" ? height : Math.min(height+10,95)}%`}}></div><span>{["M","T","W","T","F","S","S"][index]}</span></div>)}</div></section>
      <section className="care-panel"><div><span className="section-kicker">{t("dashboard.nextStep", "NEXT STEP")}</span><h2>{t("dashboard.weeklyCarePlan", "Your weekly care plan")}</h2><p>{t("dashboard.carePlanDesc", "Complete a short health check so your care team has an updated view before your consultation.")}</p></div><Link to="/ai-check" className="secondary-button">{t("dashboard.continueHealthCheck", "Continue health check")}</Link></section></div><aside className="dashboard-aside"><RiskGauge/><section className="timeline-card"><div className="panel-heading"><h2>{t("dashboard.recentActivity", "Recent health activity")}</h2><Link to="/history">{t("dashboard.viewAll", "View all")}</Link></div>{[["Today", t("dashboard.todayActivity", "Activity synced"), t("dashboard.todayActivityDetail", "7,240 steps recorded")],[lastAICheckDate, t("dashboard.aiAssessment", "AI assessment"), t("dashboard.aiAssessmentDetail", "Wellness summary created")],[pastReportDate, t("dashboard.healthReport", "Health report"), t("dashboard.healthReportDetail", "Blood panel uploaded")]].map(([date,title,detail])=><div className="mini-timeline" key={title}><span></span><div><small>{date}</small><b>{title}</b><p>{detail}</p></div></div>)}</section></aside></div>

    <AnimatePresence>
      {showLocationModal && (
        <motion.div 
          className="location-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="location-modal"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <h2>Welcome to Sattva, {activeUser}!</h2>
            <p>To help personalize your healthcare consultations, AI diagnostics, and remedies, please select or enter your current location.</p>
            
            <div className="location-options">
              {["Delhi", "Mumbai", "Bengaluru", "Kerala"].map((city) => (
                <button 
                  key={city} 
                  className="location-btn"
                  onClick={() => handleSelectLocation(city)}
                >
                  {city}
                </button>
              ))}
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              if (customLocation.trim()) {
                handleSelectLocation(customLocation.trim());
              }
            }} className="location-input-wrap">
              <input 
                type="text" 
                className="location-input" 
                placeholder="Or enter city / region..."
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
                required
              />
              <button type="submit" className="location-submit-btn">
                Confirm
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>;
}
