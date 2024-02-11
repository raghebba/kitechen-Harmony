import React, { useState } from "react";
import "./ingredients-section.module.css";
import BoxDisplay from "../../UI/boxDisplay";
import { useAppContext } from "../../../contextAPI/languageContext";
import { Translations } from "./ingredientsData";

const Ingredients = () => {
  const [isInput, setInput] = useState("");
  const {
    selectedLanguage,
    handelSumbit,
    updateInitialIngredients,
    fetchRecipesSuggestion,
  } = useAppContext();

  const onhandleSumbit = (event) => {
    event.preventDefault();

    handelSumbit(isInput);
    updateInitialIngredients(isInput);
    fetchRecipesSuggestion(isInput);
    
    setInput("");
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
