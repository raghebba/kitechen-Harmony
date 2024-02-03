import React, { useState } from "react";
import "./ingredients-section.module.css";
import BoxDisplay from "../../UI/boxDisplay";
import { useAppContext } from "../../../contextAPI/languageContext";
import { Translations } from "./ingredientsData";

const Ingredients = () => {
  const [isInput, setInput] = useState("");
  const {
    selectedLanguage,
    isalergies,
    converstationHistory,
    updatedconverstationHistory,
    setLoading,
    handelSumbit,
    updateInitialIngredients,
    setRecipeSuggestion
  } = useAppContext();

  

  const onhandleSumbit = async (event) => {
    event.preventDefault();

    // Update the conversation history with the user input
    updatedconverstationHistory({
      role: "user",
      content: `${isalergies} and ${isInput}`,
    });

    // Set isLoading to true to show the loading indicator
    setLoading(true);
    handelSumbit(isInput);
    updateInitialIngredients(isInput)
    // Call the backend API and get the bot's response
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_input: `${isalergies} and ${isInput}`,
        conversation_history: converstationHistory,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      //update recipesSuggestion
      setRecipeSuggestion(responseData)
      // Update the conversation history with the bot's response
      updatedconverstationHistory({
        role: "assistant",
        content: responseData.response,
      });
    } else {
      // Handle error if the API request fails
      console.error("API request failed");
    }

    // Clear the input field after submission
    setInput("");

    // Set isLoading back to false after receiving the response
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const newVale = e.target.value;
    setInput(newVale);
  };

  const translation = Translations[selectedLanguage] || Translations["british"];
  return (
    <BoxDisplay>
      <h2>{translation.title}</h2>
      <p>{translation.description}</p>
      <form id="ingredients-form" onSubmit={onhandleSumbit}>
        <input
          type="text"
          name="ingredients"
          id="ingredients-input"
          placeholder={translation.placeholder}
          onChange={handleInputChange}
          value={isInput}
          required
        />
        <button id="discover-button" type="submit">
          {translation.buttonText}
        </button>
      </form>
    </BoxDisplay>
  );
};

export default Ingredients;
