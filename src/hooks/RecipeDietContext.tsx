// context/RecipeDietContext.tsx
import { createContext, useState, ReactNode, useContext } from "react";

interface DietContextType {
  diet: string;
  handleDietChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const RecipeDietContext = createContext<DietContextType>({
  diet: "",
  handleDietChange: () => {},
});

export const RecipeDietProvider = ({ children }: { children: ReactNode }) => {
  const [diet, setDiet] = useState("");

  const handleDietChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDiet(e.target.value);
  };

  return (
    <RecipeDietContext.Provider value={{ diet, handleDietChange }}>
      {children}
    </RecipeDietContext.Provider>
  );
};
export default RecipeDietProvider;

export function useRecipeDietProvider() {
    return useContext(RecipeDietContext);
  }