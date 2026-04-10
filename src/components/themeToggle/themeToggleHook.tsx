import { useEffect, useSyncExternalStore } from "react";

export default function useTheme() {
  const theme = useSyncExternalStore<"light" | "dark">(
    (callback) => {
      window.addEventListener("themechange", callback);
      return () => window.removeEventListener("themechange", callback);
    },
    () => {
      const theme = document.documentElement.getAttribute("data-theme");
      return (theme as "light" | "dark") || "dark";
    },
    () => "dark",
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("themechange"));
  };

  return { theme, toggleTheme };
}
