import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [theme, setTheme] = useState('light'); // Example: Managing theme state

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Handle language change logic
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    // Handle theme toggling logic
  };

  return (
    <AppContext.Provider value={{ selectedLanguage, handleLanguageChange, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
