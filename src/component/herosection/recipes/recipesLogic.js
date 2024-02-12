const parseRecipeString = (text) => {
  const ingredientsMarker = "**Ingredients:**";
  const instructionsMarker = "**Instructions:**";

  // Find the start of the ingredients section to use as an endpoint for the title
  const titleEnd = text.indexOf(ingredientsMarker);
  // Extract the title directly, assuming it's the line just before the ingredients marker
  // Splitting the text by new lines and filtering to get the line just before the ingredients marker
  const linesBeforeIngredients = text
    .substring(0, titleEnd)
    .split("\n")
    .filter((line) => line.trim() !== "");
  const title =
    linesBeforeIngredients[linesBeforeIngredients.length - 1].trim();

  // Extract ingredients by finding the text between "Ingredients:" and "Instructions:"
  const ingredientsStart =
    text.indexOf(ingredientsMarker) + ingredientsMarker.length;
  const instructionsStart = text.indexOf(instructionsMarker);
  const ingredientsText = text
    .substring(ingredientsStart, instructionsStart)
    .trim();
  const ingredients = ingredientsText
    .split("\n")
    .filter((line) => line.startsWith("-"))
    .map((line) => line.substring(1).trim());

  // Extract instructions by getting the text after "Instructions:"
  const instructionsText = text
    .substring(instructionsStart + instructionsMarker.length)
    .trim();
  const instructions = instructionsText
    .split("\n")
    .filter((line) => line.match(/^\d/))
    .map((line) => line.trim());

  return {
    title,
    ingredients,
    instructions,
  };
};

const parseRecipeStringFr = (text) => {
  const ingredientsMarker = "Ingrédients :";
  const instructionsMarker = "Instructions :";

  // Extraire le titre en trouvant le texte juste avant "Ingrédients"
  let titleStartIndex =
    text.indexOf("Voici la recette de la") + "Voici la recette de la".length;
  let titleEndIndex = text.indexOf(":", titleStartIndex);
  const title = text.substring(titleStartIndex, titleEndIndex).trim();

  // Extraire les ingrédients en trouvant le texte entre "Ingrédients :" et "Instructions :"
  const ingredientsStart =
    text.indexOf(ingredientsMarker) + ingredientsMarker.length;
  const instructionsStart = text.indexOf(instructionsMarker);
  const ingredientsText = text
    .substring(ingredientsStart, instructionsStart)
    .trim();
  const ingredients = ingredientsText
    .split("-")
    .filter((line) => line.trim() !== "")
    .map((line) => line.trim());

  // Extraire les instructions en récupérant le texte après "Instructions :"
  const instructionsText = text
    .substring(instructionsStart + instructionsMarker.length)
    .trim();
  // Séparer les instructions en un tableau par lignes, en s'assurant qu'elles commencent par un chiffre
  const instructions = instructionsText
    .split("\n")
    .filter((line) => line.match(/^\d/))
    .map((line) => line.trim());

  return {
    title,
    ingredients,
    instructions,
  };
};

const parseRecipeStringAr = (text) => {
  // تحديد العلامات لكل قسم
  const ingredientsMarker = "المكونات:";
  const methodMarker = "الطريقة:";

  // استخراج العنوان من النص، مفترضين أنه يبدأ النص وينتهي قبل "المكونات:"
  const titleEndIndex = text.indexOf(ingredientsMarker);
  const title = text
    .substring(0, titleEndIndex)
    .replace("طيب! إليك وصفة ل", "")
    .trim();

  // استخراج المكونات بين "المكونات:" و "الطريقة:"
  const ingredientsStartIndex =
    text.indexOf(ingredientsMarker) + ingredientsMarker.length;
  const methodStartIndex = text.indexOf(methodMarker);
  const ingredientsText = text
    .substring(ingredientsStartIndex, methodStartIndex)
    .trim();
  const ingredients = ingredientsText
    .split("-")
    .filter((line) => line.trim() !== "")
    .map((line) => line.trim());

  // استخراج الطريقة بعد "الطريقة:"
  const methodText = text
    .substring(methodStartIndex + methodMarker.length)
    .trim();
  const instructions = methodText
    .split("\n")
    .filter((line) => line.match(/^\d/))
    .map((line) => line.trim());

  return {
    title,
    ingredients,
    instructions,
  };
};

const languageRealtor = {
  british: { Ingredients: "Ingredients:", Instructions: "Instructions:" ,Back:"Back"},
  french: { Ingredients: "Ingrédients:", Instructions: "Instructions:" ,Back:"Retour"},
  tunisian: { Ingredients: "مكونات:", Instructions: "طريقة التحضير:" ,Back:"العودة"},
};

export {
  parseRecipeString,
  parseRecipeStringFr,
  parseRecipeStringAr,
  languageRealtor,
};
