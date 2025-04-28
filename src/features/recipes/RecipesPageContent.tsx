import RecipeCard from "../../components/ui/RecipeCard";
import { useRecipeListProvider } from "../../hooks/UseRecipeList";
import { RecipeContextType } from "../../types/recipe"; // Use the existing RecipeContextType

const RecipesPageContent = () => {
  const { recipes = [], loading, error } = useRecipeListProvider() as RecipeContextType;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onSelect={() => console.log(`Selected recipe: ${recipe.id}`)}
        />
      ))}
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p className="text-blue-500">Loading recipes...</p>}
      {!loading && recipes.length === 0 && (
        <p className="text-red-500">No recipes found.</p>
      )}
    </div>
  );
};

export default RecipesPageContent;

