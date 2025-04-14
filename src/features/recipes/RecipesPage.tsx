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
            {/* Search Bar */}
            <div className='flex flex-col gap-4 mb-32 mt-24'>
                <input
                    type='text'
                    placeholder='Search recipes...'
                    className='w-full border px-4 py-2 rounded-lg'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Filters and Upload Button */}
                <div className='flex justify-between items-center mt-8'>
                    <div className='flex flex-row gap-3'>
                        <select className='border px-4 py-2 rounded-lg'>
                            <option value=''>Diet Filter</option>
                            <option value='vegan'>Vegan</option>
                            <option value='vegetarian'>Vegetarian</option>
                            <option value='gluten-free'>Gluten-Free</option>
                        </select>
                        <select className='border px-4 py-2 rounded-lg'>
                            <option value=''>Ingredient Filter</option>
                            <option value='tomato'>Tomato</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                        </select>
                    </div>
                    <Button
                        label='Upload Recipe'
                        variant='solid'
                        onClick={() => {}}
                        className="self-start "
                    />
                </div>
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
