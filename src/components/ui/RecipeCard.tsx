// src/components/planner/RecipeCard.tsx

import { Recipe } from "../../types/recipe";
import { Button } from "../ui/Button";

type Props = {
	recipe: Recipe;
};

const RecipeCard = ({ recipe }: Props) => {
	return (
		<div className='bg-white shadow-md rounded-2xl overflow-hidden transition hover:scale-[1.02]'>
			<img
				src={recipe.image}
				alt={recipe.title}
				className='w-full h-48 object-cover'
			/>
			<div className='p-4'>
				<div className='flex items-center justify-between mb-2'>
					<h2 className='text-lg font-bold'>{recipe.title}</h2>
					<span className='text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full'>
						{recipe.category}
					</span>
				</div>
				<p className='text-gray-600 text-sm line-clamp-3'>
					{recipe.description}
				</p>

				<div className='mt-4'>
					<Button
						label='View Recipe'
						variant='solid'
						onClick={() => console.log("View Recipe", recipe.id)}
					/>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
