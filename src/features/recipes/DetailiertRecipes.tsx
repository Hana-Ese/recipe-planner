import { useParams } from "react-router-dom";

import GenerateRecipePlan from "./GenerateRecipePlan";
import RecipesDietContent from "./RecipesDietContent";

const DetailiertRecipesPage = () => {
  const { diet, duration, mealTypes } = useParams();

  if (diet) {
    return <RecipesDietContent />;
  }

  if (duration && mealTypes) {
    return <GenerateRecipePlan />;
  }

  return <p>Please select a filter to view recipes.</p>;
};

export default DetailiertRecipesPage;
