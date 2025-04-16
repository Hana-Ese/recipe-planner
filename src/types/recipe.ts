export type Recipe = {
	id: string;
	title: string;
	description: string;
	image: string;
	category: string;
	ingredients: string[];
	
};

export interface RecipeContextType {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}
