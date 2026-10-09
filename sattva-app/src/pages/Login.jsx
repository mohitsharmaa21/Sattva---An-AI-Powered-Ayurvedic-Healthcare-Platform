import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { setActiveUser, randomizeUser } from "../utils/user";
import { useLanguage } from "../context/LanguageContext";

export default function Login() {
  const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsAuthenticating(true);

    setTimeout(() => {
      let displayName = "";
      if (email.includes("@")) {
        const handle = email.split("@")[0].trim().toLowerCase();
        if (["patient", "demo", "test", "user", "dr.name", "member"].includes(handle)) {
          displayName = randomizeUser(role);
        } else {
          const rawHandle = email.split("@")[0].trim();
          displayName = rawHandle.charAt(0).toUpperCase() + rawHandle.slice(1);
          if (role === "doctor" && !displayName.startsWith("Dr.")) {
            displayName = `Dr. ${displayName}`;
          }
        }
      } else {
        displayName = randomizeUser(role);
      }

      setActiveUser(displayName);
      if (role === "doctor") {
        navigate("/doctor-dashboard");
      } else {
        navigate("/dashboard");
      }
      setIsAuthenticating(false);
    }, 800);
  };

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleLogin} className="auth-card" style={{ maxWidth: "440px" }}>
        <h2 style={{ margin: "0 0 8px", fontSize: "28px", color: "var(--primary)" }}>
          {t("login.portalTitle")}
        </h2>
        <p style={{ margin: "0 0 32px", fontSize: "14px", color: "var(--muted)" }}>
          {t("login.portalSubtitle")}
        </p>

        <div
          style={{
            display: "flex",
            background: "var(--surface-2)",
            borderRadius: "12px",
            padding: "4px",
            marginBottom: "32px",
            position: "relative",
          }}
        >
          <button
            type="button"
            onClick={() => setRole("patient")}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "transparent",
              fontSize: "14px",
              fontWeight: 600,
              color: role === "patient" ? "var(--primary)" : "var(--muted)",
              zIndex: 1,
              cursor: "pointer",
              transition: "color 0.2s",
            }}
          >
            {t("login.patientRole")}
          </button>

          <button
            type="button"
            onClick={() => setRole("doctor")}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "transparent",
              fontSize: "14px",
              fontWeight: 600,
              color: role === "doctor" ? "var(--primary)" : "var(--muted)",
              zIndex: 1,
              cursor: "pointer",
              transition: "color 0.2s",
            }}
          >
            {t("login.doctorRole")}
          </button>

          <div
            style={{
              position: "absolute",
              top: "4px",
              bottom: "4px",
              left: role === "patient" ? "4px" : "50%",
              width: "calc(50% - 4px)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              boxShadow: "var(--shadow-sm)",
              transition: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 0,
            }}
          ></div>
        </div>

        <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--text)", marginBottom: "8px" }}>
              {t("login.emailLabel")}
            </label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={role === "patient" ? "patient@example.com" : "dr.name@hospital.com"}
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "var(--surface-2)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "15px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
              onBlur={(e) => e.target.style.borderColor = "var(--border)"}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--text)", marginBottom: "8px" }}>
              {t("login.passwordLabel")}
            </label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "var(--surface-2)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "15px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
              onBlur={(e) => e.target.style.borderColor = "var(--border)"}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isAuthenticating || !email || !password}
          className="btn-auth-submit"
          style={{ 
            padding: "14px", 
            fontSize: "15px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "8px",
            opacity: isAuthenticating ? 0.7 : (!email || !password) ? 0.5 : 1
          }}
        >
          {isAuthenticating ? (
             <>
               <motion.div 
                 style={{ width: "16px", height: "16px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white" }}
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
               />
               <span>{t("login.authenticating")}</span>
             </>
          ) : (
            <span>{t("login.loginButton", { role: role === "patient" ? t("login.patientRole") : t("login.doctorRole") })}</span>
          )}
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "20px 0" }}>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 600 }}>{t("common.or")}</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </div>

        <button
          type="button"
          onClick={() => {
            randomizeUser(role);
            navigate(role === "doctor" ? "/doctor-dashboard" : "/dashboard");
          }}
          className="btn-auth-google"
          style={{ padding: "12px" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          {t("login.continueWithGoogle")}
        </button>
      </form>
    </div>
  );
}
