
import RecipePlanner from "../../components/ui/RecipePlanner";
import RecipeDietFilter from "../../components/ui/RecipeDietFilter";
import { useRecipeListProvider } from "../../hooks/UseRecipeList";
import RecipesPageContent from "./RecipesPageContent";
import RecipePlannerApi from "./services/RecipePlannerApi";

const RecipesPage = () => {
  const { diet } = useRecipeListProvider();

  return (
    <div className="flex flex-row items-center p-4">
      <RecipeDietFilter />
      {diet && <RecipesPageContent />}
      <RecipePlannerApi> <RecipePlanner/></RecipePlannerApi >
     
    </div>
  );
};

export default RecipesPage;
