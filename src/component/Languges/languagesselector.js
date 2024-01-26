import React from "react";
import BoxDisplay from "../UI/boxDisplay";
import FlagIcon from "../UI/flagfactory";
import styles from "./languageselector.module.css";

function LanguageSelector({ selectedLanguage, onLanguageChange }) {
  return (
    <BoxDisplay>
      <h3>Select a Language:</h3>
      <div className="flag-container">
        <button
          className={
            `flag ${selectedLanguage === "british" ? "selected" : ""}` +
            styles.languageButton
          }
          onClick={() => onLanguageChange("british")}
        >
          <FlagIcon code="gb" size="lg" /> 
        </button>
        <button
          className={
            `flag ${selectedLanguage === "french" ? "selected" : ""}` +
            styles.languageButton
          }
          onClick={() => onLanguageChange("french")}
        >
          <FlagIcon code="fr" size="lg" />
        </button>
        <button
          className={
            `flag ${selectedLanguage === "tunisian" ? "selected" : ""}` +
            styles.languageButton
          }
          onClick={() => onLanguageChange("tunisian")}
        >
          <FlagIcon code="tn" size="lg" />
        </button>
      </div>
    </BoxDisplay>
  );
}

export default LanguageSelector;
