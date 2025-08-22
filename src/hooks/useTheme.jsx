import { useEffect, useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        // 1️⃣ Check localStorage first
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;

        // 2️⃣ If no saved theme, use system preference
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    });

    useEffect(() => {
        // Clean up old classes
        document.documentElement.classList.remove("light", "dark");
        // Apply current theme
        document.documentElement.classList.add(theme);
        // Save to localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
}
