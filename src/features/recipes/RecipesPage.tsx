import { useRecipeDietProvider } from "../../hooks/RecipeDietContext";
import RecipeDietFilter from "../../components/ui/RecipeDietFilter";
import RecipesPageContent from "./RecipesPageContent";

const RecipesPage = () => {
  const { diet } = useRecipeDietProvider();

  return (
    <div>
      <RecipeDietFilter />
      {diet && <RecipesPageContent />}
    </div>
  );
};

export default RecipesPage;
