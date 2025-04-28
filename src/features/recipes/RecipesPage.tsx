import RecipePlanner from "../../components/ui/RecipePlanner";
import RecipeDietFilter from "../../components/ui/RecipeDietFilter";
import { useRecipeListProvider } from "../../hooks/UseRecipeList";
import RecipesPageContent from "./RecipesPageContent";
import RecipePlannerApi from "./services/RecipePlannerApi";
import RecipeCard from "../../components/ui/RecipeCard";
import { testDummyRecipes } from "./testDummyRecipes";
console.log(testDummyRecipes);

const RecipesPage = () => {
  const { diet } = useRecipeListProvider();

  return (
    <div className="flex flex-row items-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testDummyRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <RecipeDietFilter />
      {diet && <RecipesPageContent />}
      <RecipePlannerApi>
     
        <RecipePlanner />
      </RecipePlannerApi>
    </div>
  );
};

export default RecipesPage;
