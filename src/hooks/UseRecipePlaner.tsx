import { useContext } from "react";
import { RecipePlannerProvider } from "../features/recipes/services/RecipePlannerApi";

export function UseRecipePlanerProvider() {
    return useContext(RecipePlannerProvider);
  }