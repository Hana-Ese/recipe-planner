import { createContext } from "react";

export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  ingredients: string[];
  summary?: string;
  extendedIngredients?: Ingredient[];
};

export interface RecipeContextType {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  diet: string;
  handleDietChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface RecipePlannerContext {
  duration: number;
  mealTypes: string[];
  toggleMealType: (meal: string) => void;
  handleDurationChange: (value: number) => void;
  recipesByMeal: Record<string, Recipe[]>;
  loading: boolean;
  error: string | null;
  ingredientsList: Ingredient[];
}
export interface Ingredient {
  id: number;
  amount: number;
  unit: string;
  name: string;
}


export interface RecipeFiltersContextType {
  ingredientFilter: string[];
  setIngredientFilter: (value: string[]) => void;
  mealTimesFilter: string[];
  setMealTimesFilter: (value: string[]) => void;
  search: string;
  setSearch: (value: string) => void;
  diet: string | null;
  setDiet: (value: string | null) => void;
}

