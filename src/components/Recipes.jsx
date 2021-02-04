import { useState } from "react";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 5,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 3,
};
console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);

const Recipes = () => {
  const [recipe, recipeSet] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => recipeSet(elvenShieldRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => recipeSet(elvenGauntletsRecipe)}>
        Elven Gauntlet Recipe
      </button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
