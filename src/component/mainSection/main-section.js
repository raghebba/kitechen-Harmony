import React from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import Alergies from "../alergiesSelection/alergies";
import Herosection from "../herosection/heroSection";
import LanguageSelector from "../Languges/languagesselector";
import Loading from "../UI/Loading";
import "./main-section.module.css";

const Mainsection = () => {
  const { selectedLanguage, handleLanguageChange, isalergies,isLoading } =
    useAppContext();
   
    return (
      isLoading ? (
        <Loading />
      ) : (
        <section>
          {!selectedLanguage && (
            <LanguageSelector
              onLanguageChange={handleLanguageChange}
              selectedLanguage={selectedLanguage}
            />
          )}
    
          {selectedLanguage && !isalergies && (<Alergies />)}
          {selectedLanguage && isalergies && (<Herosection />)}
        </section>
      )
    );
          }
    
export default Mainsection;
