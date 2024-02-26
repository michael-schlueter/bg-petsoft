"use client";

import { createContext, useState } from "react";

export const PetContext = createContext(null);

export default function PetContextProvider({ children, data }) {
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
