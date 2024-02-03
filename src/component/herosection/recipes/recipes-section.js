import React from "react";
import BoxDisplay from "../../UI/boxDisplay";
import Styles from "./recipes-section.module.css";
import { useAppContext } from "../../../contextAPI/languageContext";

const Recipes = () => {
  const { recipeSuggestion } = useAppContext();

  const inputString = recipeSuggestion.response;

  const lines = inputString.split("\n");

  // Initialize an object to store numbered dishes
  const dishesObject = {};

  // Loop through the lines to extract numbered dishes
  for (const line of lines) {
    // Use regular expression to match numbered dishes
    const match = line.match(/^(\d+)\.\s(.+)$/);
    if (match) {
      const dishNumber = match[1];
      const dishName = match[2];
      dishesObject[dishNumber] = dishName;
    }
  }

  // Extract dish names into an array
  const dishNamesArray = Object.values(dishesObject);



  return (
    <div>
      <BoxDisplay>
        <h2 className={Styles.title}>Recipe Suggestion</h2>
        {dishNamesArray.map((dish, index) => (
          <BoxDisplay key={index}>{dish}</BoxDisplay>
        ))}
      </BoxDisplay>
    </div>
  );
};

export default Recipes;
