import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";

interface RecipeSearchControlsProps {
  search: string;
  onSearchChange: (value: string) => void;
  onDietChange?: (diet: string) => void;
}

const RecipeSearchControls = ({
  search,
  onSearchChange,
}: RecipeSearchControlsProps) => {
  const [ingredientFilter, setIngredientFilter] = useState<string[]>([]);
  const [mealTimesFilter, setMealTimesFilter] = useState<string[]>([]);
  const [showIngredientDropdown, setShowIngredientDropdown] = useState(false);
  const [showMealTimesDropdown, setShowMealTimesDropdown] = useState(false);
 


  const ingredientDropdownRef = useRef<HTMLDivElement>(null);
  const mealTimesDropdownRef = useRef<HTMLDivElement>(null);

  const handleCheckboxChange = (
    filter: string[],
    setFilter: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    if (filter.includes(value)) {
      setFilter(filter.filter((item) => item !== value));
    } else {
      setFilter([...filter, value]);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ingredientDropdownRef.current &&
        !ingredientDropdownRef.current.contains(event.target as Node)
      ) {
        setShowIngredientDropdown(false);
      }
      if (
        mealTimesDropdownRef.current &&
        !mealTimesDropdownRef.current.contains(event.target as Node)
      ) {
        setShowMealTimesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 mb-32 mt-32 w-full px-4 md:w-7xl md:ml-72">
      {/* Search Input */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <input
          type="text"
          placeholder="Search recipes..."
          className="border px-4 py-2 rounded-lg w-full md:w-2/5"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Button label="Upload Recipe" variant="solid" onClick={() => {}} />
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
        <div className="flex flex-col md:flex-row gap-3">
       
          {/* Ingredient Filter */}
          <div className="relative" ref={ingredientDropdownRef}>
            <button
              className="border px-4 py-2 rounded-lg w-full md:w-auto flex gap-2"
              onClick={() => setShowIngredientDropdown(!showIngredientDropdown)}
            >
              Ingredient Filter <IoIosArrowDown />
            </button>
            {showIngredientDropdown && (
              <div className="absolute bg-white border rounded-lg shadow-lg  p-4 z-10 w-full md:w-48">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="tomato"
                    checked={ingredientFilter.includes("tomato")}
                    onChange={() =>
                      handleCheckboxChange(
                        ingredientFilter,
                        setIngredientFilter,
                        "tomato"
                      )
                    }
                  />
                  Tomato
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="chicken"
                    checked={ingredientFilter.includes("chicken")}
                    onChange={() =>
                      handleCheckboxChange(
                        ingredientFilter,
                        setIngredientFilter,
                        "chicken"
                      )
                    }
                  />
                  Chicken
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="beef"
                    checked={ingredientFilter.includes("beef")}
                    onChange={() =>
                      handleCheckboxChange(
                        ingredientFilter,
                        setIngredientFilter,
                        "beef"
                      )
                    }
                  />
                  Beef
                </label>
              </div>
            )}
          </div>

          {/* Meal-Times Filter */}
          <div className="relative" ref={mealTimesDropdownRef}>
            <button
              className="border px-4 py-2 rounded-lg w-full md:w-auto flex gap-2"
              onClick={() => setShowMealTimesDropdown(!showMealTimesDropdown)}
            >
              Meal-Times Filter <IoIosArrowDown />
            </button>
            {showMealTimesDropdown && (
              <div className="absolute bg-white border rounded-lg shadow-lg p-4 z-10 w-full md:w-48">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="breakfast"
                    checked={mealTimesFilter.includes("breakfast")}
                    onChange={() =>
                      handleCheckboxChange(
                        mealTimesFilter,
                        setMealTimesFilter,
                        "breakfast"
                      )
                    }
                  />
                  Breakfast
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="lunch"
                    checked={mealTimesFilter.includes("lunch")}
                    onChange={() =>
                      handleCheckboxChange(
                        mealTimesFilter,
                        setMealTimesFilter,
                        "lunch"
                      )
                    }
                  />
                  Lunch
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="dinner"
                    checked={mealTimesFilter.includes("dinner")}
                    onChange={() =>
                      handleCheckboxChange(
                        mealTimesFilter,
                        setMealTimesFilter,
                        "dinner"
                      )
                    }
                  />
                  Dinner
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="snacks"
                    checked={mealTimesFilter.includes("snacks")}
                    onChange={() =>
                      handleCheckboxChange(
                        mealTimesFilter,
                        setMealTimesFilter,
                        "snacks"
                      )
                    }
                  />
                  Snacks
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSearchControls;
