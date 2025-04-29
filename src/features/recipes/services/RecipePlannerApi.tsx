import { createContext, useState, useEffect } from "react";
import { RecipePlannerContext } from "../../../types/recipe";

const apiRecipeUrl = import.meta.env.VITE_Recipe_api_key4;
apiRecipeUrl
console.log(':',apiRecipeUrl);
console.log(':',);

export const recipePlanerProvider = createContext<RecipePlannerContext>({
  duration: 1,
  mealTypes: [],
  toggleMealType: () => {},
  handleDurationChange: () => {},
  recipesByMeal: {},
  loading: true,
  error: null,
  ingredientsList: [],
});
type RecipesByMeal = Record<string, any[]>;

function RecipePlannerApi({ children }: { children: React.ReactNode }) {
  const [duration, setDuration] = useState<number>(1);
  const [mealTypes, setMealTypes] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [ingredientsList, setIngredientsList] = useState<any[]>([]);

  const [recipesByMeal, setRecipesByMeal] = useState<RecipesByMeal>({});

  const toggleMealType = (meal: string) => {
    setMealTypes((prev) =>
      prev.includes(meal) ? prev.filter((m) => m !== meal) : [...prev, meal]
    );
  };

  const handleDurationChange = (value: number) => {
    setDuration(value);
  };
  const allIngredients: any[] = [];
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
            data.recipes.forEach((recipe: any) => {
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
        console.error("Fehler beim Laden:", err);
        setError("Failed to get recipes");
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
    <recipePlanerProvider.Provider
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
    </recipePlanerProvider.Provider>
  );
}

export default RecipePlannerApi;
