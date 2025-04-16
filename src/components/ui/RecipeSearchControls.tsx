
import Button from "./Button";

interface RecipeSearchControlsProps {
	search: string;
	onSearchChange: (value: string) => void;
}

const RecipeSearchControls = ({ search, onSearchChange }: RecipeSearchControlsProps) => {
	return (
		<div className='flex flex-col gap-4 mb-32 mt-24'>
			{/* Search Input */}
			<input
				type='text'
				placeholder='Search recipes...'
				className='w-full border px-4 py-2 rounded-lg'
				value={search}
				onChange={(e) => onSearchChange(e.target.value)}
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

				<Button label='Upload Recipe' variant='solid' onClick={() => {}} />
			</div>
		</div>
	);
};

export default RecipeSearchControls;