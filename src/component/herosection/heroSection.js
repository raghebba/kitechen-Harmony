import React,{useEffect,useRef} from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import Ingredients from "./ingredients/ingredients-section";




const Herosection = () =>{

    const { recipeSuggestion } = useAppContext();

    const RenderCounter = useRef(0)
      
     useEffect(()=>{
      RenderCounter.current = RenderCounter.current + 1;
      console.log(`Rendered ${RenderCounter.current} times`);
     })
     
   
    
    return(
        <section>
            {recipeSuggestion === '' ? "loading" :<Ingredients /> }
         
        </section>
    )
}

export default Herosection