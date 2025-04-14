import { useState } from "react";
import useRecipes from "../../hooks/useRecipes";
import { Button } from "../../components/ui/Button";
import RecipeCard from "../../components/ui/RecipeCard";

const RecipesPage = () => {
	const [search, setSearch] = useState("");
	const { recipes, loading, error } = useRecipes();

	if (loading) return <p className='text-center py-6'>Loading recipes...</p>;
	if (error) return <p className='text-center py-6 text-red-500'>{error}</p>;

	const filteredRecipes = recipes.filter((recipe) =>
		recipe.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className='max-w-7xl mx-auto px-4 py-8'>
			<div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6'>
				{/* Search Bar */}
				<input
					type='text'
					placeholder='Search recipes...'
					className='w-full md:w-1/3 border px-4 py-2 rounded-lg'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>

				{/* Filters */}
				<div className='flex gap-3 flex-wrap'>
					<Button label='Diet Filter' variant='solid' onClick={() => {}} />
					<Button
						label='Ingredient Filter'
						variant='solid'
						onClick={() => {}}
					/>
				</div>

				{/* Upload Button */}
				<Button label='Upload Recipe' variant='solid' onClick={() => {}} />
			</div>

			{/* Recipe Cards Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
				{filteredRecipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</div>
		</div>
	);
};

export default RecipesPage;
