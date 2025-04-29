import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecipeListProvider } from "../../hooks/UseRecipeList";

const RecipeDietFilter = () => {
  const { diet, handleDietChange } = useRecipeListProvider();
  const { id } = useParams(); // Get the diet from the URL
  const navigate = useNavigate();

  // Update the diet state when the URL changes
  useEffect(() => {
    if (id) {
      handleDietChange({ target: { value: id } } as React.ChangeEvent<HTMLSelectElement>);
    }
  }, [id, handleDietChange]);

  const handleDietSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDiet = e.target.value;
    navigate(`/recipe/${selectedDiet}`); // Navigate to the dynamic route
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
      <div className="flex flex-col md:flex-row gap-3">
        <select
          value={diet}
          onChange={handleDietSelection}
          className="border px-4 py-2 rounded-lg w-full md:w-auto"
        >
          <option value="">Diet Filter</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
      </div>
    </div>
  );
};

export default RecipeDietFilter;