import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Recipes from "../pages/Recipes";
import CookWare from "../pages/Cookware";
import ContactPage from "../pages/Contact";
import DetailiertRecipesPage from "../features/recipes/DetailiertRecipes";


function AllRouts() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="/recipe/:diet" element={<DetailiertRecipesPage />} />
<Route path="/plan/recipes/:duration/:mealTypes" element={<DetailiertRecipesPage />} />
      <Route path="/cookware" element={<CookWare />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AllRouts;
