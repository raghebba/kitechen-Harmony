import React from "react";
import "./ingredients-section.module.css";
import BoxDisplay from "../../UI/boxDisplay";
import { useAppContext } from "../../../contextAPI/languageContext";
import  { Translations}  from "./ingredientsData";


const Ingredients = () => {
  

  const {selectedLanguage } = useAppContext()
    


  
const translation = Translations[selectedLanguage] || Translations['british']
  return (
    <BoxDisplay>
      <h2>{translation.title}</h2>
      <p>{translation.description}</p>
      <form id="ingredients-form">
        <input
          type="text"
          name="ingredients"
          id="ingredients-input"
          placeholder={translation.placeholder}
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
