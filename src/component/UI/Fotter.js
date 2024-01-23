import React from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import "./Fotter.module.css"

const Fotter =()=>{
    
   const {selectedLanguage} = useAppContext()
    return(
        <footer>
            {selectedLanguage === "tunisian"?
            ( <p>&copy; توانسة هارموني 2024. جميع الحقوق محفوظة.</p>):
            selectedLanguage === 'french'?
            (  <p>&copy; 2024 Cuisine Harmony. Tous droits réservés.</p>):
            ( <p>&copy; 2024 Kitchen Harmony. All rights reserved.</p>)
        }
       
    </footer>
    )
}

export default Fotter