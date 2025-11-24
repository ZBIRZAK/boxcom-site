"use client";

import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useContext,
  } from "react";

const ThemeContext = createContext();

const INIT_THEME = 'dark';
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(INIT_THEME);
    
    useEffect(() => {
        // Apply the theme to the document
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
          document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute("content", "#000000");
        } else {
          document.documentElement.classList.remove("dark");
          document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute("content", "#ffffff");
        }
    
        // Save the theme in localStorage
        localStorage.setItem("theme", theme);
      }, [theme]);

      const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };
    
    return (
        <ThemeContext value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

export default ThemeContext;