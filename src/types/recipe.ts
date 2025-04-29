export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  ingredients: string[];
  summary?: string; //

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
  recipesByMeal: Record<string, any[]>;
  loading: boolean;
  error: string | null;
  ingredientsList: any[];
}
export interface Ingredient {
  amount: number;
  unit: string;
  name: string;
}
