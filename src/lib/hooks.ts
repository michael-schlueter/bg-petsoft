import { PetContext } from "@/contexts/pet-context-provider";
import { useContext } from "react";

export function usePetContext() {
  const context = useContext(PetContext);

  if (!context) {
    throw new Error("Does not work");
  }

  return context;
}
