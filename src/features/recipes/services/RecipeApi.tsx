import { createContext, useEffect, useState } from "react";
import { Recipe, RecipeContextType } from "../../../types/recipe";
import { useRecipeDietProvider } from "../../../hooks/RecipeDietContext";

const apiRecipe = import.meta.env.VITE_Recipe_api_key;

export const recipeListProvider = createContext<RecipeContextType>({
  recipes: [],
  loading: true,
  error: null,
});

function RecipeApi({ children }: { children: React.ReactNode }) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { diet } = useRecipeDietProvider();
  useEffect(() => {
    const fetchRecipeList = async () => {
      setLoading(true);
      try {
        // const urlBase = `https://api.spoonacular.com/recipes/random?apiKey=${apiRecipe}&number=10&include-tags=${diet}`;
        const response = await fetch(urlBase);
        const data = await response.json();
        console.log("API Response:", data);
        setRecipes(data.recipes || []);
        setLoading(false);
      } catch {
        setError("Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeList();
  }, [diet]);

  return (
    <recipeListProvider.Provider value={{ recipes, loading, error }}>
      {children}
    </recipeListProvider.Provider>
  );
}

export default RecipeApi;
