import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { randomizeUser } from "../utils/user";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLogin = (e) => {
    e?.preventDefault();
    if (!email || !password) return;
    
    setIsAuthenticating(true);
    
    // Simulate realistic network auth delay
    setTimeout(() => {
      setIsAuthenticating(false);
      if (role === "patient") {
        randomizeUser();
        localStorage.removeItem("sattva_location");
        navigate("/dashboard");
      } else {
        navigate("/doctor-dashboard");
      }
    }, 1500);
  };

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleLogin} className="auth-card" style={{ maxWidth: "440px" }}>
        <h2 style={{ margin: "0 0 8px", fontSize: "28px", color: "var(--primary)" }}>
          Sattva Portal
        </h2>
        <p style={{ margin: "0 0 32px", fontSize: "14px", color: "var(--muted)" }}>
          Securely access your personalized healthcare ecosystem.
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
            Patient Portal
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
            Doctor Portal
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
              Email Address
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
              Password
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
               Authenticating...
             </>
          ) : (
            `Login via ${role === "patient" ? "Patient" : "Doctor"} ID`
          )}
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "24px 0" }}>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }}></div>
          <span style={{ fontSize: "12px", color: "var(--muted)" }}>OR</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }}></div>
        </div>

        <button type="button" className="btn-auth-google">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20.94c4.95 0 8.74-3.32 8.74-9.3 0-.64-.06-1.27-.15-1.89H12v3.7h5.11a5.05 5.05 0 0 1-2.14 3.42v2.85h3.45C20.46 17.84 21.6 15.1 21.6 12c0-.84-.08-1.65-.21-2.45H12v4.88h5.36c-.23 1.14-.85 2.11-1.74 2.76v2.33h2.82c1.65-1.52 2.6-3.76 2.6-6.33 0-4.63-3.15-8.54-7.46-9.7zM12 20.94c2.53 0 4.65-.84 6.2-2.27l-2.82-2.33c-.84.56-1.92.89-3.38.89-2.6 0-4.81-1.76-5.59-4.13H3.45v2.3C5.06 18.52 8.28 20.94 12 20.94zM6.41 13.11c-.2-.6-.31-1.24-.31-1.9 0-.66.11-1.3.31-1.9v-2.3H3.45A10.02 10.02 0 0 0 2 11.21c0 1.61.39 3.14 1.09 4.47l3.32-2.57zM12 5.06c1.38 0 2.62.48 3.59 1.41l2.69-2.69C16.65 2.21 14.53 1.34 12 1.34 8.28 1.34 5.06 3.76 3.45 6.94l3.32 2.57c.78-2.37 2.99-4.13 5.59-4.13z"></path>
          </svg>
          Continue with Google
        </button>
      </form>
    </div>
  );
}
