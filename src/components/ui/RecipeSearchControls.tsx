import React, { useState } from "react";
import Button from "./Button";

interface RecipeSearchControlsProps {
    search: string;
    onSearchChange: (value: string) => void;
}

const RecipeSearchControls = ({ search, onSearchChange }: RecipeSearchControlsProps) => {
    const [ingredientFilter, setIngredientFilter] = useState<string[]>([]);
    const [mealTimesFilter, setMealTimesFilter] = useState<string[]>([]);
    const [showIngredientDropdown, setShowIngredientDropdown] = useState(false);
    const [showMealTimesDropdown, setShowMealTimesDropdown] = useState(false);

    const handleCheckboxChange = (filter: string[], setFilter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
        if (filter.includes(value)) {
            setFilter(filter.filter((item) => item !== value));
        } else {
            setFilter([...filter, value]);
        }
    };

	return (
		<div className='flex flex-col gap-4 mb-32 mt-32 w-7xl ml-72 '>
			{/* Search Input */}
            <div className="mr-72 flex gap-6 items-center">
                <input
				type='text'
				placeholder='Search recipes...'
				className=' border px-4 py-2 rounded-lg w-2/5'
				value={search}
				onChange={(e) => onSearchChange(e.target.value)}
              />
                <Button label='Upload Recipe' variant='solid' onClick={() => { }} />
                
               </div>

			{/* Filters and Upload Button */}
			<div className='flex justify-between items-center mt-8'>
				<div className='flex flex-row gap-3'>
					<select className='border px-4 py-2 rounded-lg'>
						<option value=''>Diet Filter</option>
						<option value='vegan'>Vegan</option>
						<option value='vegetarian'>Vegetarian</option>
						<option value='gluten-free'>Gluten-Free</option>
					</select>
					 {/* Ingredient Filter */}
                     <div className='relative'>
                        <button
                            className='border px-4 py-2 rounded-lg w-full md:w-auto'
                            onClick={() => setShowIngredientDropdown(!showIngredientDropdown)}
                        >
                            Ingredient Filter
                        </button>
                        {showIngredientDropdown && (
                            <div className='absolute bg-white border shadow-lg w-38 p-4'>
                                <label className='flex gap-2 ml-4'>
                                    <input
                                        type='checkbox'
                                        value='tomato'
                                        checked={ingredientFilter.includes('tomato')}
                                        onChange={() => handleCheckboxChange(ingredientFilter, setIngredientFilter, 'tomato')}
                                    />
                                    Tomato
                                </label>
                                <label className='flex gap-2 ml-4'>
                                    <input
                                        type='checkbox'
                                        value='chicken'
                                        checked={ingredientFilter.includes('chicken')}
                                        onChange={() => handleCheckboxChange(ingredientFilter, setIngredientFilter, 'chicken')}
                                    />
                                    Chicken
                                </label>
                                <label className='flex gap-2 ml-4'>
                                    <input
                                        type='checkbox'
                                        value='beef'
                                        checked={ingredientFilter.includes('beef')}
                                        onChange={() => handleCheckboxChange(ingredientFilter, setIngredientFilter, 'beef')}
                                    />
                                    Beef
                                </label>
                            </div>
                        )}
                    </div>
                    {/* Meal-Times Filter */}
                    <div className='relative'>
                        <button
                            className='border px-4 py-2 rounded-lg w-full md:w-auto'
                            onClick={() => setShowMealTimesDropdown(!showMealTimesDropdown)}
                        >
                            Meal-Times Filter
                        </button>
                        {showMealTimesDropdown && (
                            <div className='absolute bg-white border shadow-lg  p-4 w-39'>
                                <label className='flex gap-2 ml-4'>
                                    <input
                                        type='checkbox'
                                        value='breakfast'
                                        checked={mealTimesFilter.includes('breakfast')}
                                        onChange={() => handleCheckboxChange(mealTimesFilter, setMealTimesFilter, 'breakfast')}
                                    />
                                    Breakfast
                                </label>
                                <label className='flex gap-2 ml-4'>
                                    <input
                                        type='checkbox'
                                        value='lunch'
                                        checked={mealTimesFilter.includes('lunch')}
                                        onChange={() => handleCheckboxChange(mealTimesFilter, setMealTimesFilter, 'lunch')}
                                    />
                                    Lunch
                                </label>
                                <label className='flex gap-2 ml-4'>
                                    <input
                                        type='checkbox'
                                        value='dinner'
                                        checked={mealTimesFilter.includes('dinner')}
                                        onChange={() => handleCheckboxChange(mealTimesFilter, setMealTimesFilter, 'dinner')}
                                    />
                                    Dinner
                                </label>
                                <label className='flex gap-2 ml-4'>
                                <input
                                        type='checkbox'
                                        value='snacks'
                                        checked={mealTimesFilter.includes('snacks')}
                                        onChange={() => handleCheckboxChange(mealTimesFilter, setMealTimesFilter, 'snacks')}
                                    />
                                    Snacks
                                </label>
                            </div>
                        )}
                    </div>
				</div>
			</div>
		</div>
	);
};

export default RecipeSearchControls;