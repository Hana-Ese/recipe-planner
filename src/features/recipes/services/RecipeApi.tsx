import { createContext, useEffect, useState } from "react";
import { Recipe, RecipeContextType } from "../../../types/recipe";


const apiRecipeUrl = import.meta.env.VITE_Recipe_api_key4;

export const recipeListProvider = createContext<RecipeContextType>({
  recipes: [],
  loading: true,
  error: null,
  diet: "",
  handleDietChange: () => {},
});

function RecipeApi({ children }: { children: React.ReactNode }) {
  const [diet, setDiet] = useState("");

  const handleDietChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDiet(e.target.value);
  };
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("diet:", diet);
    const fetchRecipeList = async () => {
      setLoading(true);
      try {
        const urlBase = `https://api.spoonacular.com/recipes/random?apiKey=${apiRecipeUrl}&number=10&include-tags=${diet}`;
        const response = await fetch(urlBase);
        const data = await response.json();
        console.log("API Response:", data);
        setRecipes(data.recipes || []);
        setLoading(false);
      } catch {
        setError("Failed to get recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeList();
  }, [diet]);

  return (
    <recipeListProvider.Provider
      value={{ recipes, loading, error, handleDietChange, diet }}
    >
      {children}
    </recipeListProvider.Provider>
  );
}

export default RecipeApi;
