import { PetContext } from "@/contexts/pet-context-provider";
import { SearchContext } from "@/contexts/search-context-provider";
import { useContext } from "react";

export function usePetContext() {
  const context = useContext(PetContext);

  if (!context) {
    throw new Error("PetContext must be used within the PetContextProvider");
  }

  return context;
}

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("SearchContext must be used within the SearchContextProvider");
  }

  return context;
}
