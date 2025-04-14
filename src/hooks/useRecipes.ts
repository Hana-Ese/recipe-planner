import { useState, useEffect } from "react";
import { Recipe } from "../types/recipe";
import { testDummyRecipes } from "../features/recipes/testDummyRecipes";

const useRecipes = () => {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Simulate fetching data
		setTimeout(() => {
			try {
				setRecipes(testDummyRecipes);
				setLoading(false);
			} catch {
				setError("Failed to fetch recipes");
				setLoading(false);
			}
		}, 1000);
	}, []);

	return { recipes, loading, error };
};

export default useRecipes;
