import useRecipes from "../hooks/useRecipes";
import RecipeCard from "../components/ui/RecipeCard";

const Recipes = () => {
  const { recipes, loading, error } = useRecipes();

  if (loading) return <p className="text-center py-6">Loading recipes...</p>;
  if (error) return <p className="text-center py-6 text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;