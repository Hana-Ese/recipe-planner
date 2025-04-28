import { useParams } from "react-router-dom";

import GenerateRecipePlan from "./GenerateRecipePlan";
import RecipesDietContent from "./RecipesDietContent";
import RecipePlannerApi from "./services/RecipePlannerApi";

const DetailiertRecipesPage = () => {
  const { diet, duration, mealTypes } = useParams();
  const params = useParams();
  console.log("DetailiertRecipesPage Params:", params);

  if (diet) {  console.log('diet rec:', diet);
    
    return <RecipesDietContent />;
  
  }

 
if (duration && mealTypes) {
  console.log('duration:', duration);
  return (
    <RecipePlannerApi durationFromUrl={duration} mealTypesFromUrl={mealTypes}>
      <GenerateRecipePlan />
    </RecipePlannerApi>
  );
}

  return <p>Please select a filter to view recipes.</p>;
};

export default DetailiertRecipesPage;
