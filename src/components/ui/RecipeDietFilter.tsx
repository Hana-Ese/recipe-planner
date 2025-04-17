import { useRecipeDietProvider } from "../../hooks/RecipeDietContext";

const RecipeDietFilter = () => {
  const { diet, handleDietChange } = useRecipeDietProvider();

  console.log("Current diet:", diet);
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
      <div className="flex flex-col md:flex-row gap-3">
        <select
          value={diet}
          onChange={handleDietChange}
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
