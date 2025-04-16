import { useContext } from "react";
import { recipeListProvider } from "../features/recipes/services/RecipeApi";

export function useRecipeListProvider() {
    return useContext(recipeListProvider);
  }