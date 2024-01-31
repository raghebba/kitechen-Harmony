import React, { createContext, useContext, useState, useEffect } from "react";
import { Initialprompt } from "../component/herosection/ingredients/ingredientsData";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [theme, setTheme] = useState("light"); // Example: Managing theme state
  const [recipeSuggestion, setRecipeSuggestion] = useState(``);
  const [ingredients, setIngredients] = useState("");
  const [renderCount, setRenderCount] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [isalergies, setAlergies] = useState("");

  useEffect(() => {
    if (selectedLanguage && isalergies) {
      fetchRecipes(Initialprompt[selectedLanguage]);
    }
  }, [selectedLanguage, isalergies]); // fetch the bot when the language and allergies are change is change

  const fetchRecipes = (ingredients) => {
    setLoading(true);

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
      })
      .finally(() => {
        setLoading(false); // Set isLoading to false when fetch is completed
      });
  };

  const updateInitialIngredients = (newIngredients) => {
    setIngredients(newIngredients);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // fetchRecipes(Initialprompt[LanguageSelector])
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
        renderCount,
        isLoading,
        isalergies,
        setAlergies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
