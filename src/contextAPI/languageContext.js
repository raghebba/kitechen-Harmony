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
  const [converstationHistory, setConverstationHistory] = useState([]);
  const [dishNamesArray, setDishNamesArray] = useState([]);
  const [finalRecipes, setfinalRecipes] = useState("");

  useEffect(() => {
    if (selectedLanguage) {
      fetchRecipes(Initialprompt[selectedLanguage]);
    }
  }, [selectedLanguage]); // fetch the bot when the language  are change

  const fetchRecipes = (ingredients, converstationHistory) => {
    setLoading(true);

    const payload = {
      user_input: ingredients,
      conversation_history: converstationHistory,
    };

    fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipeSuggestion(data.response);
        setConverstationHistory(data.conversation_history);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false); // Set isLoading to false when fetch is completed
      });
  };

  const fetchRecipesSuggestion = async (inputVal) => {

   const languageRealtor = {british: "and" ,french: "et" , tunisian: "و "}

    updatedconverstationHistory({
      role: "user",
      content: !dishNamesArray.length ? `${isalergies} ${languageRealtor[selectedLanguage]} ${inputVal}` : `${inputVal}`,
    });

    setLoading(true);

    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_input:  !dishNamesArray.length ? `${isalergies} and ${inputVal}` : `${inputVal}`,
        conversation_history: converstationHistory,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      //update recipesSuggestion
      if(!dishNamesArray.length){
        setRecipeSuggestion(responseData);
      }else{
        setfinalRecipes(responseData)
      }
 
      // Update the conversation history with the bot's response
      updatedconverstationHistory({
        role: "assistant",
        content: responseData.response,
      });
    } else {
      // Handle error if the API request fails
      console.error("API request failed");
    }
    setLoading(false);
  };

  const updateInitialIngredients = (newIngredients) => {
    setIngredients(newIngredients);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    fetchRecipes(Initialprompt[selectedLanguage]);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    // Handle theme toggling logic
  };
  const updatedconverstationHistory = (newMessage) => {
    setConverstationHistory((prevHistory) => [...prevHistory, newMessage]);
  };

  const handelSumbit = (e) => {
    setConverstationHistory([
      ...converstationHistory,
      { content: e, role: "user" },
    ]);
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
        setRecipeSuggestion,
        recipeSuggestion,
        fetchRecipes,
        updateInitialIngredients,
        ingredients,
        renderCount,
        isLoading,
        setLoading,
        isalergies,
        setAlergies,
        updatedconverstationHistory,
        converstationHistory,
        handelSumbit,
        fetchRecipesSuggestion,
        dishNamesArray,
        setDishNamesArray,
        finalRecipes, 
        setfinalRecipes
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
