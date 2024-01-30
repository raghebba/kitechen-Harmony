import React from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import Herosection from "../herosection/heroSection";
import LanguageSelector from "../Languges/languagesselector";
import "./main-section.module.css";

const Mainsection = () => {
  const {
    selectedLanguage,
    handleLanguageChange,
  } = useAppContext();


  return (
    <section>
      {!selectedLanguage ? (
        <LanguageSelector
          onLanguageChange={handleLanguageChange}
          selectedLanguage={selectedLanguage}
        />
      ) : (
        <Herosection />
      )}
    </section>
  );
};

export default Mainsection;
