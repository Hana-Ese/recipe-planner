import React, { createContext, useContext, useState } from "react";
import { RecipeFiltersContext } from '../context/RecipeFiltersContext';
export const RecipeFiltersContext = createContext<
	RecipeFiltersContextType | undefined
>(undefined);

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

export const RecipeFiltersProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [ingredientFilter, setIngredientFilter] = useState<string[]>([]);
	const [mealTimesFilter, setMealTimesFilter] = useState<string[]>([]);
	const [search, setSearch] = useState("");
	const [diet, setDiet] = useState<string | null>(null);

	return (
		<RecipeFiltersContext.Provider
			value={{
				ingredientFilter,
				setIngredientFilter,
				mealTimesFilter,
				setMealTimesFilter,
				search,
				setSearch,
				diet,
				setDiet,
			}}
		>
			{children}
		</RecipeFiltersContext.Provider>
	);
};

export const useRecipeFilters = () => {
	const context = useContext(RecipeFiltersContext);
	if (!context) {
		throw new Error(
			"useRecipeFilters must be used within a RecipeFiltersProvider"
		);
	}
	return context;
};
