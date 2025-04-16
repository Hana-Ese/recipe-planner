import Button from "./Button";

interface RecipeSearchControlsProps {
    search: string;
    onSearchChange: (value: string) => void;
}

const RecipeSearchControls = ({ search, onSearchChange }: RecipeSearchControlsProps) => {
    return (
        <div className='flex flex-col gap-4 mb-16 mt-16 w-full max-w-7xl mx-auto px-4'>
            {/* Search Input */}
            <div className='flex flex-col md:flex-row gap-4 items-center'>
                <input
                    type='text'
                    placeholder='Search recipes...'
                    className='border px-4 py-2 rounded-lg w-full md:w-2/5'
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <Button label='Upload Recipe' variant='solid' onClick={() => {}} />
            </div>

            {/* Filters */}
            <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-4'>
                <div className='flex flex-col md:flex-row gap-3 w-full md:w-auto'>
                    <select className='border px-4 py-2 rounded-lg w-full md:w-auto'>
                        <option value=''>Diet Filter</option>
                        <option value='vegan'>Vegan</option>
                        <option value='vegetarian'>Vegetarian</option>
                        <option value='gluten-free'>Gluten-Free</option>
                    </select>
                    <select className='border px-4 py-2 rounded-lg w-full md:w-auto'>
                        <option value=''>Ingredient Filter</option>
                        <option value='tomato'>Tomato</option>
                        <option value='chicken'>Chicken</option>
                        <option value='beef'>Beef</option>
                    </select>
                    <select className='border px-4 py-2 rounded-lg w-full md:w-auto'>
                        <option value=''>Meal-Times Filter</option>
                        <option value='breakfast'>Breakfast</option>
                        <option value='lunch'>Lunch</option>
                        <option value='dinner'>Dinner</option>
                        <option value='snacks'>Snacks</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default RecipeSearchControls;