import { useParams } from "react-router-dom";
import RecipeCard from "../../components/ui/RecipeCard";
import { useRecipeListProvider } from "../../hooks/UseRecipeList";
import { useState } from "react";
import { Recipe } from "../../types/recipe";


const RecipesDietContent = () => {
    const { recipes, loading, error } = useRecipeListProvider();
    const { diet } = useParams();
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    if (selectedRecipe) {
      return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <button
            onClick={() => setSelectedRecipe(null)}
            className="text-blue-600 underline mb-4"
          >
            ← Back to Overview
          </button>
  
          <h2 className="text-2xl font-bold mb-2">{selectedRecipe.title}</h2>
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-4">
            {selectedRecipe.summary || "Keine Beschreibung vorhanden."}
          </p>
          </div>)}
  
    const filteredRecipes = diet
    ?  recipes
    : [];
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}   onSelect={() => setSelectedRecipe(recipe)} />
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