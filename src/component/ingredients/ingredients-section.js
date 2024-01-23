import React from "react";
import "./ingredients-section.module.css";
import BoxDisplay from "../UI/boxDisplay";
import { useAppContext } from "../../contextAPI/languageContext";

const Ingredients = () => {

  const translations = {
    british: {
      title: "What's in your kitchen?",
      description: "Enter your ingredients below and discover your next meal:",
      placeholder: "Enter ingredients",
      buttonText: "Discover",
    },
    french: {
      title: "Qu'y a-t-il dans votre cuisine ?",
      description: "Entrez vos ingrédients ci-dessous et découvrez votre prochain repas :",
      placeholder: "Entrez les ingrédients",
      buttonText: "Découvrir",
    },
    tunisian: {
      title: "شنو عندك في كوجينتك؟",
      description: "ادخل مكوناتك تحت واكتشف الوجبة الجديدة:",
      placeholder: "ادخل المكونات",
      buttonText: "اكتشاف",
    },
  };
  const {selectedLanguage } = useAppContext()
  
const translation = translations[selectedLanguage] || translations['british']
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
