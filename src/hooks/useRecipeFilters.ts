import React, { useContext, useState } from "react";
import { createContext } from "react";
import { RecipeFiltersContextType } from "../types/recipe";

export const RecipeFiltersContext = createContext<RecipeFiltersContextType | null>(null);

export const RecipeFiltersProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [ingredientFilter, setIngredientFilter] = useState<string[]>([]);
	const [mealTimesFilter, setMealTimesFilter] = useState<string[]>([]);
	const [search, setSearch] = useState("");
	const [diet, setDiet] = useState<string | null>(null);

	const contextValue: RecipeFiltersContextType = {
		ingredientFilter,
		setIngredientFilter,
		mealTimesFilter,
		setMealTimesFilter,
		search,
		setSearch,
		diet,
		setDiet,
	};

	return (
		<RecipeFiltersContext.Provider value={contextValue}>
			{children}
		</RecipeFiltersContext.Provider>
	);
};

export const useRecipeFilters = (): RecipeFiltersContextType => {
	const context = useContext(RecipeFiltersContext);
	if (!context) {
		throw new Error(
			"useRecipeFilters must be used within a RecipeFiltersProvider"
		);
	}
	return context;
};
