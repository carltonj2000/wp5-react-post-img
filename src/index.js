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
