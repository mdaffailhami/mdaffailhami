'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'english' | 'indonesian';

type LanguageContextProps = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>('english');

  useEffect(() => {
    const savedPreferedLanguage = localStorage.getItem('language') as Language;

    if (savedPreferedLanguage) {
      setLanguage(savedPreferedLanguage);
    } else {
      setLanguage(
        navigator.languages[0].includes('id') ||
          navigator.languages[0].includes('in')
          ? 'indonesian'
          : 'english',
      );
    }

    localStorage.setItem('language', language);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context)
    throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
