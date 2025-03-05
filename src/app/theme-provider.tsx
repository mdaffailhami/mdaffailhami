'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') as Theme)
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    const appliedTheme =
      theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;

    root.classList.remove('light', 'dark');
    root.classList.add(appliedTheme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
