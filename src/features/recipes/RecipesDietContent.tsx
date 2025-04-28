import { useParams } from "react-router-dom";
import RecipeCard from "../../components/ui/RecipeCard";
import { useRecipeListProvider } from "../../hooks/UseRecipeList";
import { RecipeContextType } from "../../types/recipe"; // Use the existing RecipeContextType

<<<<<<< HEAD:src/features/recipes/RecipesPageContent.tsx
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

=======

const RecipesDietContent = () => {
    const { recipes, loading, error } = useRecipeListProvider();
    const { diet } = useParams();
  
    const filteredRecipes = diet
    ? recipes.filter((recipe) => recipe.category === diet)
    : recipes;
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
          {error && <p className="text-red-500">{error}</p>}
          {loading && <p className="text-blue-500">Loading recipes...</p>}
          {!loading && recipes.length === 0 && (
            <p className="text-red-500">No recipes found.</p>
          )}
        </div>
      </>
    );
  };
  export default RecipesDietContent;
>>>>>>> 12-implement-fetch-logic-for-multiple-functions:src/features/recipes/RecipesDietContent.tsx
