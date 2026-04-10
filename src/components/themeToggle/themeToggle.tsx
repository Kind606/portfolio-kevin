"use client";

import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import styles from "./themeToggle.module.css";
import useTheme from "./themeToggleHook";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggle}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <SunIcon size={24} /> : <MoonIcon size={24} />}
    </button>
  );
}
