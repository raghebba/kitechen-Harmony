import React, { useState } from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import BoxDisplay from "../UI/boxDisplay";
import { AlergiesTranslation } from "./alegiesData";
import Style from "./alergies.module.css";

const Alergies = () => {
  const { selectedLanguage, setAlergies } = useAppContext();
  const [isInput, setInput] = useState("");

  const translation =
    AlergiesTranslation[selectedLanguage] || AlergiesTranslation["british"];

  const onhandleSumbit = async (event) => {
    event.preventDefault();

    setAlergies(isInput);
    setInput("");
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue); // Update the global input value
  };

  const handelSkip = () => {
    setInput(translation.ButtonskipVal);
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
        <button onClick={handelSkip} className={Style.SeconderyButton}>
          {translation.Buttonskip}
        </button>
        <button id="discover-button" type="submit">
          {translation.buttonText}
        </button>
      </form>
    </BoxDisplay>
  );
};

export default Alergies;
