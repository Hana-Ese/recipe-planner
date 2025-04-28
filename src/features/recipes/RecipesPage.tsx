import RecipePlanner from "../../components/ui/RecipePlanner";
import RecipeDietFilter from "../../components/ui/RecipeDietFilter";
import { useRecipeListProvider } from "../../hooks/UseRecipeList";
import RecipesPageContent from "./RecipesDietContent";
import RecipePlannerApi from "./services/RecipePlannerApi";
import RecipeCard from "../../components/ui/RecipeCard";
import { testDummyRecipes } from "./testDummyRecipes";
console.log(testDummyRecipes);

const RecipesPage = () => {
  const { diet } = useRecipeListProvider();

  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-50">
     
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="w-full md:w-auto">
          <RecipeDietFilter />
        </div>
        <div className="w-full md:w-auto">
          <RecipePlannerApi>
            <RecipePlanner />
          </RecipePlannerApi>
        </div>
      </div>

      
      <div className="flex-grow">
        {diet && <RecipesPageContent />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testDummyRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;