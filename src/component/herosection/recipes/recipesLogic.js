const parseRecipeString = (text) => {
  const ingredientsMarker = "**Ingredients:**";
  const instructionsMarker = "**Instructions:**";
  
  // Extract the title by finding the text between "Absolutely! Here's the recipe for" and the first occurrence of "Ingredients"
  let titleStart = "Absolutely! Here's the recipe for";
  let titleEnd = text.indexOf(ingredientsMarker);
  const title = text.substring(titleStart.length, titleEnd).trim().replace(':', '');

  // Extract ingredients by finding the text between "Ingredients:" and "Instructions:"
  const ingredientsStart = text.indexOf(ingredientsMarker) + ingredientsMarker.length;
  const instructionsStart = text.indexOf(instructionsMarker);
  const ingredientsText = text.substring(ingredientsStart, instructionsStart).trim();
  const ingredients = ingredientsText.split('\n').filter(line => line.startsWith('-')).map(line => line.substring(1).trim());

  // Extract instructions by getting the text after "Instructions:"
  const instructionsText = text.substring(instructionsStart + instructionsMarker.length).trim();
  // Split instructions into an array by lines, ensuring they start with a digit for steps
  const instructions = instructionsText.split('\n').filter(line => line.match(/^\d/)).map(line => line.trim());

  return {
      title,
      ingredients,
      instructions
  };
};

const parseRecipeStringFr = (recipeText) => {
  const titleRegex = /Voici la recette pour (.+?) :/;
  const ingredientsRegex = /Ingrédients :([\s\S]+?)Instructions :/;
  const instructionsRegex = /Instructions :([\s\S]+)/;

  const titleMatch = recipeText.match(titleRegex);
  const ingredientsMatch = recipeText.match(ingredientsRegex);
  const instructionsMatch = recipeText.match(instructionsRegex);

  if (!titleMatch || !ingredientsMatch || !instructionsMatch) {
    return null; // Unable to parse recipe
  }

  const title = titleMatch[1].trim();
  const ingredients = ingredientsMatch[1]
    .trim()
    .split("\n")
    .map((line) => line.trim());
  const instructions = instructionsMatch[1]
    .trim()
    .split("\n")
    .map((line) => line.trim());

  return {
    title,
    ingredients,
    instructions,
  };
};

const parseRecipeStringAr = (text) => {

  const ingredientsMarker = "مكونات:";
  const instructionsMarker = "طريقة التحضير:";
  
  let ingredients = [];
  let instructions = [];

  const ingredientsIndex = text.indexOf(ingredientsMarker);
  const instructionsIndex = text.indexOf(instructionsMarker);

  // Check if both markers are found to ensure proper parsing
  if (ingredientsIndex !== -1 && instructionsIndex !== -1) {
      // Extract ingredients
      ingredients = text.substring(ingredientsIndex + ingredientsMarker.length, instructionsIndex).trim().split('\n').filter(line => line.trim() !== '');
      // Extract instructions
      instructions = text.substring(instructionsIndex + instructionsMarker.length).trim().split('\n').filter(line => line.trim() !== '');
  } else {
      // Error handling if markers are not found
      console.error("One or both markers not found. Unable to parse ingredients or instructions properly.");
  }

  return {
      ingredients,
      instructions
  };
   
};

const languageRealtor = {
    british : {Ingredients: "Ingredients:",Instructions:"Instructions:"},
    frensh: {Ingredients: "Ingrédients:",Instructions :"Instructions:"},
    tunisian: {Ingredients:"مكونات:",Instructions :"طريقة التحضير:"}
   }

export { parseRecipeString, parseRecipeStringFr, parseRecipeStringAr ,languageRealtor};
