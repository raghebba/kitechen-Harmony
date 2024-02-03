import React, { useEffect, useRef } from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import Loading from "../UI/Loading";
import Ingredients from "./ingredients/ingredients-section";
import Recipes from "./recipes/recipes-section";

const Herosection = () => {
  const { isLoading, ingredients } = useAppContext();

  const RenderCounter = useRef(0);

  useEffect(() => {
    RenderCounter.current = RenderCounter.current + 1;
    //console.log(`Rendered ${RenderCounter.current} times`);
  });

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <>{!ingredients ? <Ingredients /> : <Recipes />}</>
      )}
    </section>
  );
};

export default Herosection;
