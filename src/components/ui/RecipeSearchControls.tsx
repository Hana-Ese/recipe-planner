
import Button from "./Button";

interface RecipeSearchControlsProps {
	search: string;
	onSearchChange: (value: string) => void;
}

const RecipeSearchControls = ({ search, onSearchChange }: RecipeSearchControlsProps) => {
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
					<select className='border px-4 py-2 rounded-lg'>
						<option value=''>Ingredient Filter</option>
						<option value='tomato'>Tomato</option>
						<option value='chicken'>Chicken</option>
						<option value='beef'>Beef</option>
                    </select>
                    <select className='border px-4 py-2 rounded-lg'>
						<option value=''>Meal-Times Filter</option>
						<option value='tomato'>Breakfast</option>
						<option value='chicken'>Lunch</option>
                        <option value='beef'>Dinner</option>
                        <option value='beef'>Sancks</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default RecipeSearchControls;