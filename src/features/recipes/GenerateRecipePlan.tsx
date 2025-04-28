import { useState } from "react";
import RecipeCard from "../../components/ui/RecipeCard";
import { UseRecipePlanerProvider } from "../../hooks/UseRecipePlaner";
import { Recipe } from "../../types/recipe";
import { useParams } from "react-router-dom";

const GenerateRecipePlan = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const { recipesByMeal, ingredientsList } = UseRecipePlanerProvider();
  const { duration, mealTypes } = useParams();

  const filteredRecipes = duration && mealTypes ? recipesByMeal : {};


  if (!recipesByMeal || Object.keys(recipesByMeal).length === 0) {
    return <p>No recipes found for the selected plan.</p>;
  }

  if (!ingredientsList || ingredientsList.length === 0) {
    return <p>No ingredients found for the selected plan.</p>;
  }

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

        <h3 className="text-lg font-semibold mb-2">📝 Zutaten</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {selectedRecipe.extendedIngredients?.map((ing, i) => (
            <li key={i}>
              {ing.amount} {ing.unit} {ing.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        {Object.entries(filteredRecipes).map(([meal, recipes]) => (
          <div key={meal}>
            <h2 className="text-xl font-semibold mb-2">{meal}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={() => setSelectedRecipe(recipe)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md h-fit">
        <h2 className="text-xl font-bold mb-4">🛒 Einkaufsliste</h2>

        <ul className="list-disc pl-4 space-y-1 text-sm">
          {ingredientsList.map((ing, index) => (
            <li key={index}>
              {ing.amount} {ing.unit} {ing.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GenerateRecipePlan;
