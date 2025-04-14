import { useState } from "react";
import { testDummyRecipes } from "./testDummyRecipes";
import { Button } from "../../components/ui/Button";
import RecipeCard from "../../components/ui/RecipeCard";

const RecipesPage = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full md:w-1/3 border px-4 py-2 rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
    
            {/* Filters */}
            <div className="flex gap-3 flex-wrap">
              <Button label="Category Filter" variant="outline" onClick={() => {}} />
              <Button label="Ingredient Filter" variant="outline" onClick={() => {}} />
            </div>
    
            {/* Upload Button */}
            <Button label="Upload Recipe" variant="solid" onClick={() => {}} />
          </div>
    
          {/* Recipe Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testDummyRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      );
};
export default RecipesPage;