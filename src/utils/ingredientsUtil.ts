
const getIngredients = (meal: object): unknown[] => {
  const firstIngredient = 9;
  const lastIngredient = 29;
  return Object
    .values(meal)
    .slice(firstIngredient, lastIngredient)
    .filter(Boolean);
}

const capitalize = (str: string) => {
  if (str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}

export { getIngredients, capitalize }