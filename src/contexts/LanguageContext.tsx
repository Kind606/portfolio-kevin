"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useSyncExternalStore,
} from "react";
import { translations } from "./translations";

export type Language = "en" | "sv";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.sv;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore<Language>(
    (callback) => {
      window.addEventListener("languagechange", callback);
      return () => window.removeEventListener("languagechange", callback);
    },
    () => {
      const saved = localStorage.getItem("language") as Language | null;
      return saved === "en" || saved === "sv" ? saved : "sv";
    },
    () => "sv",
  );

  const setLang = (newLang: Language) => {
    localStorage.setItem("language", newLang);
    window.dispatchEvent(new Event("languagechange"));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
