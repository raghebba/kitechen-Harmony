import React from "react";
import "./ingredients-section.module.css";
import BoxDisplay from "../UI/boxDisplay";

const Ingredients = () => {
  return (
    <BoxDisplay>
      <h2>What's in your kitchen?</h2>
      <p>Enter your ingredients below and discover your next meal:</p>
      <form id="ingredients-form">
        <input
          type="text"
          name="ingredients"
          id="ingredients-input"
          placeholder="Enter ingredients"
          required
        />
        <button id="discover-button" type="submit">
          Discover
        </button>
      </form>
    </BoxDisplay>
  );
};

export default Ingredients;
