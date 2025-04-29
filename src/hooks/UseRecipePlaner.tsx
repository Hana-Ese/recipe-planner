import { useContext } from "react";
import { recipePlanerProvider } from "../features/recipes/services/RecipePlannerApi";

export function UseRecipePlanerProvider() {
    return useContext(recipePlanerProvider);
  }