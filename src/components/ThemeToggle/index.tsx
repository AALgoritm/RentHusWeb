import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    // Dispatch custom event for theme change
    document.dispatchEvent(new Event("themeChange"));
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className=" p-2 rounded dark:bg-zinc-900 text-gray-800 dark:text-gray-200 cursor-pointer h-8 w-8 flex items-center justify-center"
    >
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
}
