import React, { useState } from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import BoxDisplay from "../UI/boxDisplay";
import { AlergiesTranslation } from "./alegiesData";
import "./alergies.module.css";

const Alergies = () => {
  const { selectedLanguage, setAlergies } = useAppContext();
  const [isInput, setInput] = useState("");

  const translation =
    AlergiesTranslation[selectedLanguage] || AlergiesTranslation["british"];

  const onhandleSumbit = async (event) => {
    event.preventDefault();

    // Update the conversation history with the user input
    // updatedconverstationHistory({ role: "user", content: setInput });

    // Set isLoading to true to show the loading indicator
    //setLoading(true);
    setAlergies(isInput);
    //handelSumbit(isInput);
    // Call the backend API and get the bot's response
    /*
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_input: setInput,
        conversation_history: converstationHistory,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
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
  

    // Set isLoading back to false after receiving the response
    setLoading(false);
    */
    setInput("");
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue); // Update the global input value
  };

  return (
    <BoxDisplay>
      <h2>{translation.title}</h2>
      <p>{translation.description}</p>
      <form onSubmit={onhandleSumbit}>
        <input
          type="text"
          id="allergies"
          name="allergies"
          value={isInput}
          placeholder={translation.placeholder}
          onChange={handleInputChange}
          required
        />
        <button id="discover-button" type="submit">
          {translation.buttonText}
        </button>
      </form>
    </BoxDisplay>
  );
};

export default Alergies;
