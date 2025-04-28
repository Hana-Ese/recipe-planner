import { useContext } from "react";
import { RecipeListProvider } from "../features/recipes/services/RecipeApi";

export function useRecipeListProvider() {


    return useContext(RecipeListProvider);
  }