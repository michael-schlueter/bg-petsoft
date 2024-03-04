"use client";

import { createContext, useState } from "react";
import { Pet } from "../lib/types";

type PetContextProviderProps = {
  children: React.ReactNode;
  data: Pet[];
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  handleChangeSelectPetId: (id: string) => void;
  handleAddPet: (newPet: Omit<Pet, "id">) => void;
  handleEditPet: (petId: string, newPetData: Omit<Pet, "id">) => void;
  handleCheckoutPet: (id: string) => void;
  selectedPet: Pet | undefined;
  numberOfPets: number;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  children,
  data,
}: PetContextProviderProps) {
  // state
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  // derived state
  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const numberOfPets = pets.length;

  // event handlers / actions
  function handleChangeSelectPetId(id: string) {
    setSelectedPetId(id);
  }

  function handleAddPet(newPet: Omit<Pet, "id">) {
    setPets((prev) => [
      ...prev,
      {
        id: new Date().toString(),
        ...newPet,
      },
    ]);
  }

  function handleEditPet(petId: string, newPetData: Omit<Pet, "id">) {
    setPets((prev) =>
      prev.map((pet) => {
        if (pet.id === petId) {
          return {
            id: pet.id,
            ...newPetData,
          };
        }
        return pet;
      })
    );
  }

  function handleCheckoutPet(id: string) {
    setPets((prev) => prev.filter((pet) => pet.id !== id));
    setSelectedPetId(null);
  }

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
        handleChangeSelectPetId,
        handleAddPet,
        handleEditPet,
        handleCheckoutPet,
        selectedPet,
        numberOfPets,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
