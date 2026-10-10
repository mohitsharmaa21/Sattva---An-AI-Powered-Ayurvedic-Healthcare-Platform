import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, SUPPORTED_LANGUAGES } from "../locales";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("sattva_language") || "en";
  });

  const setLanguage = (langCode) => {
    if (dictionaries[langCode]) {
      setLanguageState(langCode);
      localStorage.setItem("sattva_language", langCode);
      document.documentElement.lang = langCode;
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  /**
   * Helper to fetch translated text via dot-notation path
   * e.g., t("home.heroTitle") or t("aiCheck.stepIndicator", { step: 2 })
   */
  const t = (path, paramsOrFallback, fallbackText) => {
    let params = {};
    let fallback = "";

    if (typeof paramsOrFallback === "object" && paramsOrFallback !== null) {
      params = paramsOrFallback;
      fallback = fallbackText || "";
    } else if (typeof paramsOrFallback === "string") {
      fallback = paramsOrFallback;
    }

    const currentDict = dictionaries[language] || dictionaries.en;
    const englishDict = dictionaries.en;

    const resolvePath = (dict, p) => {
      return p.split(".").reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : null), dict);
    };

    let result = resolvePath(currentDict, path);

    // Fallback to English if missing in selected language
    if (result === null || result === undefined) {
      result = resolvePath(englishDict, path);
    }

    // Fallback to provided fallback string or path itself
    if (result === null || result === undefined) {
      result = fallback || path;
    }

    // Handle template interpolation like {step} or {role}
    if (typeof result === "string" && params && Object.keys(params).length > 0) {
      return Object.entries(params).reduce((str, [k, v]) => {
        return str.replace(new RegExp(`\\{${k}\\}`, "g"), v);
      }, result);
    }

    return result;
  };

  const currentLanguage = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languages: SUPPORTED_LANGUAGES,
        currentLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
