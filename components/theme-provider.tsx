"use client";

import * as React from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "jiffy-theme";

function getSystemTheme(): "light" | "dark" {
  try {
    if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
  } catch {
    // Fall through to the required dark fallback.
  }
  return "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("system");

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark" || stored === "system") {
        setThemeState(stored);
      }
    } catch {
      // Keep the default system theme when storage is unavailable.
    }
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    const resolved = theme === "system" ? getSystemTheme() : theme;

    root.classList.remove("light", "dark");
    root.classList.add(resolved);
    root.style.colorScheme = resolved;

    if (theme !== "system") return;

    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const next = getSystemTheme();
      root.classList.remove("light", "dark");
      root.classList.add(next);
      root.style.colorScheme = next;
    };

    mediaQuery?.addEventListener("change", handleChange);
    return () => mediaQuery?.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = React.useCallback((next: Theme) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage failures; the in-memory choice still applies.
    }
  }, []);

  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
