"use client";

import { createContext, useOptimistic, useState } from "react";
import { Pet } from "../lib/types";
import { addPet, deletePet, editPet } from "@/app/actions/actions";
import { toast } from "sonner";

type PetContextProviderProps = {
  children: React.ReactNode;
  data: Pet[];
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  handleChangeSelectPetId: (id: string) => void;
  handleAddPet: (newPet: Omit<Pet, "id">) => Promise<void>;
  handleEditPet: (petId: string, newPetData: Omit<Pet, "id">) => Promise<void>;
  handleCheckoutPet: (id: string) => Promise<void>;
  selectedPet: Pet | undefined;
  numberOfPets: number;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  children,
  data,
}: PetContextProviderProps) {
  // state
  const [optimisticPets, setOptimisticPets] = useOptimistic(
    data,
    (state, newPet) => {
      return [...state, {
        ...newPet,
        id: Math.random().toString(),
      }];
    }
  );
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  // derived state
  const selectedPet = optimisticPets.find((pet) => pet.id === selectedPetId);
  const numberOfPets = optimisticPets.length;

  // event handlers / actions
  function handleChangeSelectPetId(id: string) {
    setSelectedPetId(id);
  }

  async function handleAddPet(newPet: Omit<Pet, "id">) {
    const error = await addPet(newPet);
    if (error) {
      toast.warning(error.message);
      return;
    }
  }

  async function handleEditPet(petId: string, newPetData: Omit<Pet, "id">) {
    const error = await editPet(petId, newPetData);
    if (error) {
      toast.warning(error.message);
      return;
    }
  }

  async function handleCheckoutPet(id: string) {
    await deletePet(id);
    setSelectedPetId(null);
  }

  return (
    <PetContext.Provider
      value={{
        pets: optimisticPets,
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
