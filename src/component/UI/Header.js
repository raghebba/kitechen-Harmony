import React from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import "./header.module.css"


const Header = () =>{
    const {selectedLanguage} = useAppContext()
    return(
        <header>
            {selectedLanguage === "tunisian" ?
            (<h1>توانسة هارموني</h1>):
            selectedLanguage === "french" ? 
            (<h1>Harmonie en Cuisine</h1>):
            (<h1>Kitchen Harmony</h1>)
            }
        
    </header>
    )
}

export default Header