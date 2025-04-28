import { createContext, useState, useEffect } from "react";
import { Ingredient, Recipe, RecipePlannerContext } from "../../../types/recipe";

const apiRecipeUrl = import.meta.env.VITE_Recipe_api_key4;
// Removed unused expression
console.log(':',apiRecipeUrl);
console.log(':',);

export const RecipePlannerProvider = createContext<RecipePlannerContext>({
  duration: 1,
  mealTypes: [],
  toggleMealType: () => {},
  handleDurationChange: () => {},
  recipesByMeal: {},
  loading: true,
  error: null,
  ingredientsList: [],
});
// Ensure that the Recipe type is properly defined in your types
type RecipesByMeal = Record<string, Recipe[]>;

function RecipePlannerApi({ children }: { children: React.ReactNode }) {
  const [duration, setDuration] = useState<number>(1);
  const [mealTypes, setMealTypes] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([]);

  const [recipesByMeal, setRecipesByMeal] = useState<RecipesByMeal>({});

  const toggleMealType = (meal: string) => {
    setMealTypes((prev) =>
      prev.includes(meal) ? prev.filter((m) => m !== meal) : [...prev, meal]
    );
  };

  const handleDurationChange = (value: number) => {
    setDuration(value);
  };
  const allIngredients: Ingredient[] = [];
  const allRecipes: RecipesByMeal = {};
  useEffect(() => {
    const fetchRecipesPlaner = async () => {
      setLoading(true);
      setError(null);

      try {
        for (const meal of mealTypes) {
          const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiRecipeUrl}&number=${duration}&tags=${meal.toLowerCase()}`;

          const response = await fetch(url);
          const data = await response.json();

          if (data.recipes) {
            allRecipes[meal] = data.recipes;
            data.recipes.forEach((recipe: Recipe) => {
              if (recipe.extendedIngredients) {
                allIngredients.push(...recipe.extendedIngredients);
              }
            });
          } else {
            allRecipes[meal] = [];
          }
        }

        setRecipesByMeal(allRecipes);
        setIngredientsList(allIngredients);

      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError(err instanceof Error ? err.message : "Failed to get recipes");
      } finally {
        setLoading(false);
      }
    };

    if (mealTypes.length > 0) {
      fetchRecipesPlaner();
    } else {
      setRecipesByMeal({});
      setLoading(false);
    }
  }, [duration, mealTypes]);

  return (
    <RecipePlannerProvider.Provider
    value={{
      duration,
      mealTypes,
      toggleMealType,
      handleDurationChange,
      recipesByMeal,
      loading,
      error,
      ingredientsList,
    }}
  >
    {children}
  </RecipePlannerProvider.Provider>
  );
}

export default RecipePlannerApi;
