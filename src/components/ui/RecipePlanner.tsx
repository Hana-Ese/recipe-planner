import { IoIosArrowDown } from "react-icons/io";
import { UseRecipePlanerProvider } from "../../hooks/UseRecipePlaner";
import { useState } from "react";
import GenerateRecipePlan from "../../features/recipes/GenerateRecipePlan";
// import { Link } from "react-router-dom";

const RecipePlanner = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPlan, setShowPlan] = useState(false); 
  const { duration, mealTypes, toggleMealType, handleDurationChange } =
    UseRecipePlanerProvider();

  // const toggleDropdown = () => {
  //   setIsDropdownOpen((prev) => !prev);
  // };
  const handlePlanRecipes = () => {
    console.log("Plan Recipes button clicked");
    setShowPlan(true);
  };
 

  return (
    <div className="max-w-xl mx-auto">
      {/* <Link to={`/recipe/${plan-your-recipe}`}>      <button
        className="border px-4 py-2 rounded-lg w-full md:w-auto flex items-center gap-2"
        onClick={toggleDropdown}
      > */}
      <button>
     Plan Your Recipes
       
        <IoIosArrowDown
          className={`transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>


      {isDropdownOpen && (
        <div className="p-4 mt-4 border rounded-xl shadow-md space-y-4">
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="duration"
                value="day"
                checked={duration === 1}
                onChange={() => handleDurationChange(1)}
              />
              Day
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="duration"
                value="week"
                checked={duration === 7}
                onChange={() => handleDurationChange(7)}
              />
              Week
            </label>
          </div>

          <div className="space-y-2">
            {["Breakfast", "Lunch", "Dinner", "Snack"].map((meal) => (
              <label key={meal} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={meal}
                  checked={mealTypes.includes(meal)}
                  onChange={() => toggleMealType(meal)}
                />
                {meal}
              </label>
            ))}
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
            onClick={() => {
              handlePlanRecipes();
            }}
          >
            Plan Recipes
          </button>

          {showPlan && (
            <div>
              <GenerateRecipePlan />
            </div>
          )}

          <div className="mt-4 text-sm text-gray-500">
            <p>
              <strong>Geplante Dauer:</strong>{" "}
              {duration === 1 ? "1 Tag" : "1 Woche"}
            </p>
            <p>
              <strong>Mahlzeiten:</strong>{" "}
              {mealTypes.length > 0 ? mealTypes.join(", ") : "Keine ausgewählt"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipePlanner;
