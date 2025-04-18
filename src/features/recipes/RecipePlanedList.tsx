// dein Context Hook

import RecipeCard from "../../components/ui/RecipeCard";
import { UseRecipePlanerProvider } from "../../hooks/UseRecipePlaner";

const GenerateRecipePlan = () => {
  const { recipesByMeal } = UseRecipePlanerProvider();

  return (
    <div className="space-y-6">
      {Object.entries(recipesByMeal).map(([meal, recipes]) => (
        <div key={meal}>
          <h2 className="text-xl font-semibold mb-2">{meal}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default GenerateRecipePlan;

