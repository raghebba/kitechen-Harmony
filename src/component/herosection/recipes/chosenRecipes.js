import React, { useState, useEffect } from "react";
import { useAppContext } from "../../../contextAPI/languageContext";
import BoxDisplay from "../../UI/boxDisplay";
import {
  languageRealtor,
  parseRecipeString,
  parseRecipeStringAr,
  parseRecipeStringFr,
} from "./recipesLogic";

const ChosenRecipes = ({ recipeString ,Backtorecipes}) => {
  const [recipeData, setRecipeData] = useState(null);
  const [langugeselection, setlangugeselection] = useState({});
  const { selectedLanguage } = useAppContext();

  useEffect(() => {
    setlangugeselection(languageRealtor[selectedLanguage]);
    if (recipeString && selectedLanguage === "british") {
      const parsedData = parseRecipeString(recipeString);
      setRecipeData(parsedData);
    }
    if (recipeString && selectedLanguage === "french") {
      const parsedData = parseRecipeStringFr(recipeString);
      setRecipeData(parsedData);
    }
    if (recipeString && selectedLanguage === "tunisian") {
      const parsedData = parseRecipeStringAr(recipeString);
      setRecipeData(parsedData);
    }
  }, [recipeString, selectedLanguage]);

  if (!recipeData) {
    return <div>Loading...</div>; // You can render a loading indicator while parsing the data.
  }

  return (
    <BoxDisplay language={selectedLanguage}>
      <h2>{recipeData.title}</h2>
      <div>
        <h3>{langugeselection.Ingredients}</h3>
        <ul>
          {recipeData.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>{langugeselection.Instructions}</h3>
        <ol>
          {recipeData.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
      <button onClick={Backtorecipes}>{langugeselection.Back}</button>
    </BoxDisplay>
  );
};

export default ChosenRecipes;
