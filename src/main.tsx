import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import RecipeApi from "./features/recipes/services/RecipeApi.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecipeApi>
      <App />
    </RecipeApi>
  </StrictMode>
);
