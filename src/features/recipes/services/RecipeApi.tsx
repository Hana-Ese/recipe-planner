import { createContext, useEffect, useState } from "react";
import { Recipe, RecipeContextType } from "../../../types/recipe";

const apiRecipe = import.meta.env.VITE_Recipe_api_key;

const urlBase = `https://api.spoonacular.com/recipes/random?apiKey=${apiRecipe}&number=10`;


export const recipeListProvider = createContext<RecipeContextType>({
  recipes: [],
  loading: true,
  error: null,
});

function RecipeApi({ children }: { children: React.ReactNode }) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    const fetchRecipeList = async () => {
      setLoading(true);
      try {
        const response = await fetch(urlBase);
        const data = await response.json();
        console.log("API Response:", data);
        setRecipes(data.recipes || []);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeList();
  }, []);

  return (
    <recipeListProvider.Provider value={{ recipes, loading, error }}>
      {children}
    </recipeListProvider.Provider>
  );
}

export default RecipeApi;
