import RecipesPage from "../features/recipes/RecipesPage";
import RecipeApi from "../features/recipes/services/RecipeApi";

const Recipes = () => {
  return (
    <RecipeApi>
      <RecipesPage />
    </RecipeApi>
  );
};

export default Recipes;
