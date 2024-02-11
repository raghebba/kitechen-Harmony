import React from "react";
import BoxDisplay from "../../UI/boxDisplay";
import Styles from "./recipes-section.module.css";
import { useAppContext } from "../../../contextAPI/languageContext";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import ChosenRecipes from "./chosenRecipes";

const Recipes = () => {
  const {
    recipeSuggestion,
    selectedLanguage,
    dishNamesArray,
    setDishNamesArray,
    finalRecipes,
    fetchRecipesSuggestion,
  } = useAppContext();

  const ChosenTitle = {
    british: "Recipe Suggestion",
    french: "Suggestions de recettes",
    tunisian: "إقتراح الوصفا",
  };

  useEffect(() => {
    const lines = recipeSuggestion.response.split('\n');
    
    // Filter lines that contain dish titles, assuming they start with a number followed by a period
    const dishTitleLines = lines.filter(line => line.match(/^\d+\./));
    
    // Extract the dish names from the filtered lines, considering the bold syntax
    const dishTitles = dishTitleLines.map(line => {
        // Find the start and end indices of the bold markers
        const startBoldIndex = line.indexOf('**');
        const endBoldIndex = line.lastIndexOf('**');
        
        // Extract the dish name by removing the numbering, bold markers, and trimming whitespace
        // Check for the presence of bold markers before extracting
        if (startBoldIndex !== -1 && endBoldIndex !== -1 && startBoldIndex !== endBoldIndex) {
            return line.substring(startBoldIndex + 2, endBoldIndex).trim();
        }
        // Fallback in case the bold markers are not found or improperly formatted
        return line.substring(line.indexOf('.') + 1).trim();
    });
    setDishNamesArray(Object.values(dishTitles));
  }, [recipeSuggestion, setDishNamesArray]);
    

console.log(recipeSuggestion)
  return (
    <div>
      <BoxDisplay>
        <h2 className={Styles.title}>{ChosenTitle[selectedLanguage]}</h2>
        {finalRecipes ? (
        <ChosenRecipes recipeString={finalRecipes.response} /> 
        //<BoxDisplay>{finalRecipes.response}</BoxDisplay>
        ) : (
          dishNamesArray.map((dish) => (
            <div
              onClick={() => {
                fetchRecipesSuggestion(dish);
                // fetchMainDish(dish)
              }}
              className={Styles.boxes}
              key={uuid()}
            >
              <BoxDisplay>{dish}</BoxDisplay>
            </div>
          ))
          
        )}
      </BoxDisplay>
    </div>
  );
};

export default Recipes;
