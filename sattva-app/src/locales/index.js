import { en } from "./en";
import { hi } from "./hi";

export const SUPPORTED_LANGUAGES = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳",
  },
  // Future Indian regional languages can simply be added here:
  // { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇮🇳" },
  // { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳" },
  // { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳" },
  // { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳" },
  // { code: "te", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳" },
  // { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳" },
  // { code: "ml", name: "Malayalam", nativeName: "മലയാളം", flag: "🇮🇳" },
  // { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
  // { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ", flag: "🇮🇳" },
  // { code: "as", name: "Assamese", nativeName: "অসমীয়া", flag: "🇮🇳" },
];

export const dictionaries = {
  en,
  hi,
};
