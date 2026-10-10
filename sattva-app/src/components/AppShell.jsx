import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import sattvaLogo from "../assets/sattva-logo.png";
import { getActiveUser, getUserInitials } from "../utils/user";
import { useTheme } from "../utils/theme";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import NotificationCenter from "./NotificationCenter";

const Icon = ({ name, size = 18 }) => {
  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"/>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3 21v-1a6 6 0 0 1 12 0v1M17 11a3 3 0 1 0-2.1-5.1M21 21v-1a6 6 0 0 0-3.5-5.5"/></>,
    leaf: <path d="M20 4C11 4 5 8.5 5 15c0 2.8 1.7 5 4.5 5C16 20 20 13 20 4ZM4 20c3-4 6-6 11-9"/>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>,
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.2 2.2-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-3.2v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2.2-2.2.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H5v-3.2h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.2-2.2.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3.5h3.2v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.2 2.2-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V13h-.2a1.7 1.7 0 0 0-1.5 1Z"/></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></>,
    moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};

export default function AppShell({ children }) {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const location = useLocation();
  const doctorMode = location.pathname === "/doctor-dashboard";
  const [activeUser, setActiveUser] = useState(() => getActiveUser(doctorMode ? "doctor" : "patient"));
  const initials = getUserInitials(activeUser);

  useEffect(() => {
    const handleUserChange = () => {
      setActiveUser(getActiveUser(doctorMode ? "doctor" : "patient"));
    };
    window.addEventListener("sattva_user_changed", handleUserChange);
    window.addEventListener("storage", handleUserChange);
    return () => {
      window.removeEventListener("sattva_user_changed", handleUserChange);
      window.removeEventListener("storage", handleUserChange);
    };
  }, [doctorMode]);

  const items = [
    ["/dashboard", t("nav.overview"), "grid"],
    ["/ai-check", t("nav.aiCheck"), "spark"],
    ["/consultation", t("nav.consultations"), "users"],
    ["/ayurveda", t("nav.ayurveda"), "leaf"],
    ["/blogs", t("nav.healthJournal"), "book"],
    ["/history", t("nav.healthHistory"), "clock"],
    ["/insurance", t("nav.wellnessScore"), "shield"],
    ["/health-condition", t("nav.conditionCheck", "Condition check"), "activity"],
  ];

  return <div className={`app-shell ${open ? "shell-open" : ""}`}>
    <aside className="app-sidebar">
      <Link className="app-brand" to="/dashboard"><img src={sattvaLogo} alt="Sattva"/><span>{t("common.appName", "Sattva")}</span></Link>
      <p className="sidebar-caption">{doctorMode ? t("nav.clinicalWorkspace") : t("nav.patientPortal")}</p>
      <nav>{doctorMode ? <NavLink to="/doctor-dashboard" className="side-link"><Icon name="users"/>{t("nav.doctorWorkspace")}</NavLink> : items.map(([to, label, icon]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className="side-link"><Icon name={icon}/><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-bottom"><NavLink to="/login" className="side-link"><Icon name="settings"/><span>{t("nav.accountSettings")}</span></NavLink><p>{t("nav.disclaimerCaption")}</p></div>
    </aside>
    <div className="app-frame"><header className="app-topbar"><button className="icon-button menu-trigger" onClick={() => setOpen(!open)} aria-label="Toggle navigation"><Icon name="menu"/></button><div className="crumb">{doctorMode ? t("nav.clinicalWorkspace") : t("nav.sattvaHealth")}</div><div className="topbar-actions"><LanguageSelector /><button className="icon-button theme-toggle-btn" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Light appearance" : "Dark appearance"}><Icon name={theme === "dark" ? "sun" : "moon"}/></button><NotificationCenter doctorMode={doctorMode} /><Link to="/login" className="user-chip" title="Account settings"><span>{initials}</span><b>{activeUser}</b></Link></div></header><main className="app-content">{children}</main></div>
  </div>;
}
