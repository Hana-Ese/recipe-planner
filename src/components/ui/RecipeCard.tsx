// src/components/planner/RecipeCard.tsx

import  Button  from "../ui/Button";
import { Recipe } from "../../types/recipe";

const RecipeCard = (({
  recipe,
  onSelect,
}: {
  recipe?: Recipe;
  onSelect?: () => void;
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:scale-[1.02]">
      <img
        src={recipe?.image || "placeholder.jpg"}
        alt={recipe?.title || "No title"}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">{recipe?.title || "Untitled"}</h2>
        </div>
        <p className="text-gray-600 text-sm line-clamp-3">
          {recipe?.description || "No description available."}
        </p>

        <div className="mt-4">
          {onSelect && (
            <Button
              label="View Recipe"
              variant="solid"
              onClick={onSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
});

export default RecipeCard;
