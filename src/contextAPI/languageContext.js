import React, { createContext, useContext, useState, useEffect } from "react";
import { Initialprompt } from "../component/herosection/ingredients/ingredientsData";
import LanguageSelector from "../component/Languges/languagesselector";


const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [theme, setTheme] = useState("light"); // Example: Managing theme state
  const [recipeSuggestion, setRecipeSuggestion] = useState(``);
  const [ingredients, setIngredients] = useState("");
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    if (selectedLanguage) {
      fetchRecipes(Initialprompt[selectedLanguage]);
    }
  }, [selectedLanguage]);

  const fetchRecipes = (ingredients) => {
    const payload = {
      user_input: ingredients,
      conversation_history: [], // Add actual conversation history if needed
    };

    fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipeSuggestion(data.response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateInitialIngredients = (newIngredients) => {
    setIngredients(newIngredients);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    fetchRecipes(Initialprompt[LanguageSelector])
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    // Handle theme toggling logic
  };

  useEffect(() => {
    setRenderCount((prevCount) => prevCount + 1);
  }, [ingredients]);


  return (
    <AppContext.Provider
      value={{
        selectedLanguage,
        handleLanguageChange,
        theme,
        toggleTheme,
        recipeSuggestion,
        fetchRecipes,
        updateInitialIngredients,
        renderCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
