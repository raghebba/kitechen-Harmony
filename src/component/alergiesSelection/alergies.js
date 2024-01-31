import React,{useState} from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import BoxDisplay from "../UI/boxDisplay";
import { AlergiesTranslation } from "./alegiesData";
import "./alergies.module.css";

const Alergies = () => {
  const { selectedLanguage,setAlergies} = useAppContext();
  const [isInput,setInput] = useState("")

  const translation = AlergiesTranslation[selectedLanguage] || AlergiesTranslation["british"];

  const handleSumbit = (e) => {
    e.preventDefault();
    setAlergies(isInput)
  }
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue); // Update the global input value
  };

  return (
    <BoxDisplay>
      <h2>{translation.title}</h2>
      <p>{translation.description}</p>
      <form onSubmit={handleSumbit}>
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
