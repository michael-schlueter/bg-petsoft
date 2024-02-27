"use client";

import { createContext, useState } from "react";
import { Pet } from "./lib/types";

type PetContextProviderProps = {
  children: React.ReactNode;
  data: Pet[];
}

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null
}

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({ children, data }: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState(null);

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
