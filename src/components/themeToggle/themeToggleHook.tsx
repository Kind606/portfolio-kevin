import { useEffect, useSyncExternalStore } from "react";

export default function useTheme() {
  const theme = useSyncExternalStore<"light" | "dark">(
    (callback) => {
      window.addEventListener("themechange", callback);
      return () => window.removeEventListener("themechange", callback);
    },
    () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    },
    () => "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("themechange"));
  };

  return { theme, toggleTheme };
}
