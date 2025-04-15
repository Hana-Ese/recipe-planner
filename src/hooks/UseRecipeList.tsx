import { useContext } from "react";
import { recipeList } from "../features/recipes/services/RecipeApi";

export function useData() {
    return useContext(recipeList);
  }