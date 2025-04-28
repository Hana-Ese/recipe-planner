import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import RecipeApi from "./features/recipes/services/RecipeApi.tsx";
import RecipePlannerApi from "./features/recipes/services/RecipePlannerApi.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecipeApi>
      <App />
    </RecipeApi>
  </StrictMode>
);
