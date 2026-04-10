"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import styles from "./languageToggle.module.css";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "sv" : "en")}
      className={styles.toggle}
      aria-label="Toggle language"
      suppressHydrationWarning
    >
      {lang === "sv" ? "EN" : "SE"}
    </button>
  );
}
