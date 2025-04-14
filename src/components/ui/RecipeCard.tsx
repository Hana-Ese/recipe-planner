interface Recipe {
    id: string;
    title: string;
    image: string;
    category: string;
    ingredients: string[];
    instructions: string;
}

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.category}</p>
            {/* Additional recipe details */}
        </div>
    );
};
export default RecipeCard;