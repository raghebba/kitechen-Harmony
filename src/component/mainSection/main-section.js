import React from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import Ingredients from "../ingredients/ingredients-section";
import LanguageSelector from "../Languges/languagesselector";
import "./main-section.module.css"

const Mainsection = () => {
  const { selectedLanguage, handleLanguageChange } = useAppContext();


  return (
    <section >    
      {!selectedLanguage ?
       <LanguageSelector onLanguageChange={handleLanguageChange} selectedLanguage={selectedLanguage}/>
      :<Ingredients />}
    </section>
  );
};

export default Mainsection;
