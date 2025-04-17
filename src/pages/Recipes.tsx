import RecipesPage from "../features/recipes/RecipesPage";
import RecipeApi from "../features/recipes/services/RecipeApi";
import RecipeDietProvider from "../hooks/RecipeDietContext";

const Recipes = () => {
  return( <RecipeApi>
	<RecipeDietProvider>
	  <RecipesPage />
	</RecipeDietProvider>;
	</RecipeApi>)
 
};

export default Recipes;
