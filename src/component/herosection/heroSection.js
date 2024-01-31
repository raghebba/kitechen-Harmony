import React,{useEffect,useRef} from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import Loading from "../UI/Loading";
import Ingredients from "./ingredients/ingredients-section";




const Herosection = () =>{

    const { recipeSuggestion,isLoading,isalergies } = useAppContext();

    const RenderCounter = useRef(0)
      
     useEffect(()=>{
      RenderCounter.current = RenderCounter.current + 1;
      console.log(`Rendered ${RenderCounter.current} times`);
     })
     console.log(recipeSuggestion)
     console.log(isalergies)
   
    
    return(
        <section>
         { isLoading  ? <Loading /> :<Ingredients /> }
         
        </section>
    )
}

export default Herosection