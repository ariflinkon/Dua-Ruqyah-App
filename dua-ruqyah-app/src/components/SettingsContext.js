'use client';
import { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [language, setLanguage] = useState('bn'); // 'bn' or 'en'
  const [fontFamily, setFontFamily] = useState('Arial');
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  return (
    <SettingsContext.Provider
      value={{ language, setLanguage, fontFamily, setFontFamily, theme, setTheme }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
