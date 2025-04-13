import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AbouUs";
import Recipes from "../pages/Recipes";
import CookWare from "../pages/Cookware";

function AllRouts() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="/cookware" element={<CookWare />} />
    </Routes>
  );
}

export default AllRouts;
