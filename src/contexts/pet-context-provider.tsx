"use client";

import { createContext, useOptimistic, useState } from "react";
import { Pet } from "@prisma/client"
import { addPet, deletePet, editPet } from "@/app/actions/actions";
import { toast } from "sonner";
import { PetEssentials } from "@/lib/types";

type PetContextProviderProps = {
  children: React.ReactNode;
  data: Pet[];
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: Pet["id"] | null;
  handleChangeSelectPetId: (id: Pet["id"]) => void;
  handleAddPet: (newPet: PetEssentials) => Promise<void>;
  handleEditPet: (petId: Pet["id"], newPetData: PetEssentials) => Promise<void>;
  handleCheckoutPet: (id: Pet["id"]) => Promise<void>;
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
    (state, { action, payload }) => {
      switch (action) {
        case "add":
          return [...state, { ...payload, id: Math.random().toString() }];
        case "edit":
          return state.map((pet) => {
            if (pet.id === payload.id) {
              return { ...pet, ...payload.newPetData };
            }
            return pet;
          });
        case "delete":
          return state.filter((pet) => pet.id !== payload);
        default:
          return state;
      }
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

  async function handleAddPet(newPet: PetEssentials) {
    setOptimisticPets({ action: "add", payload: newPet });
    const error = await addPet(newPet);
    if (error) {
      toast.warning(error.message);
      return;
    }
  }

  async function handleEditPet(petId: string, newPetData: PetEssentials) {
    setOptimisticPets({
      action: "edit",
      payload: {
        id: petId,
        newPetData,
      },
    });
    const error = await editPet(petId, newPetData);
    if (error) {
      toast.warning(error.message);
      return;
    }
  }

  async function handleCheckoutPet(id: string) {
    setOptimisticPets({ action: "delete", payload: id });
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
